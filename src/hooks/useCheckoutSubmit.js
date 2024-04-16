import Cookies from "js-cookie";
import * as dayjs from "dayjs";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import useAsync from "./useAsync";
import { UserContext } from "@/context/UserContext";
import OrderServices from "@/services/OrderServices";
import CouponServices from "@/services/CouponServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import { CartContext } from "@/context/CartContext";
import { nanoid } from "nanoid";

const useCheckoutSubmit = () => {
  const {
    state: { userInfo, shippingAddress },
    dispatch,
  } = useContext(UserContext);

  const { cartItems, clearCart, getCartTotal } = useContext(CartContext);

  const [error, setError] = useState("");
  const [total, setTotal] = useState("");
  const [couponInfo, setCouponInfo] = useState({});
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountProductType, setDiscountProductType] = useState("");
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);

  const router = useRouter();
  const couponRef = useRef("");
  const isEmpty = cartItems.length < 1;
  const cartTotal = getCartTotal();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { data } = useAsync(CouponServices.getAllCoupons);

  useEffect(() => {
    if (Cookies.get("couponInfo")) {
      const coupon = JSON.parse(Cookies.get("couponInfo"));
      setCouponInfo(coupon);
      setDiscountPercentage(coupon.discountPercentage);
      setMinimumAmount(coupon.minimumAmount);
    }
  }, []);

  useEffect(() => {
    if (minimumAmount - discountAmount > total || isEmpty) {
      setDiscountPercentage(0);
      Cookies.remove("couponInfo");
    }
  }, [minimumAmount, total]);

  //calculate total and discount value
  useEffect(() => {
    const result = cartItems?.filter((p) => p.type === discountProductType);
    const discountProductTotal = result?.reduce(
      (preValue, currentValue) => preValue + currentValue.itemTotal,
      0
    );
    let totalValue = "";
    let subTotal = (cartTotal + shippingCost).toFixed(2);
    let discountAmount = discountProductTotal * (discountPercentage / 100);
    totalValue = subTotal - discountAmount;
    setDiscountAmount(discountAmount);
    setTotal(totalValue);
  }, [cartTotal, shippingCost, discountPercentage]);

  //if not login then push user to home page
  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }
    setValue("firstName", shippingAddress.firstName);
    setValue("lastName", shippingAddress.lastName);
    setValue("address", shippingAddress.address);
    setValue("contact", shippingAddress.contact);
    setValue("email", shippingAddress.email);
    setValue("city", shippingAddress.city);
    setValue("country", shippingAddress.country);
    setValue("zipCode", shippingAddress.zipCode);
  }, []);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const makePayment = async (orderResponse, orderInfo) => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const data = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify({ ...orderResponse }),
    }).then((t) => t.json());

    let options = {
      key: process.env.RAZORPAY_KEY,
      name: "Quintessentials",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou",
      image: "https://www.quintessentials.in/logo/logo.png",
      handler: function (response) {
        handleSuccess(response, orderResponse, data);
      },
      prefill: {
        name: "Quintessentials",
        email: "quintessentialsmailer@gmail.com",
        contact: "8591519966",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const submitHandler = async (data) => {
    dispatch({ type: "SAVE_SHIPPING_ADDRESS", payload: data });
    Cookies.set("shippingAddress", JSON.stringify(data));
    setIsCheckoutSubmit(true);

    let orderInfo = {
      name: `${data.firstName} ${data.lastName}`,
      address: data.address,
      contact: data.contact,
      email: data.email,
      city: data.city,
      country: data.country,
      zipCode: data.zipCode,
      shippingOption: data.shippingOption,
      paymentMethod: data.paymentMethod,
      status: "Pending",
      cart: cartItems,
      subTotal: cartTotal,
      shippingCost: shippingCost,
      discount: discountAmount,
      total: total,
      currency: "INR",
    };

    if (data.paymentMethod === "Other") {
      OrderServices.addOrder(orderInfo).then(async (orderResponse) => {
        makePayment(orderResponse, orderInfo);
      });
    }

    if (data.paymentMethod === "COD") {
      OrderServices.addOrder(orderInfo)
        .then((res) => {
          router.push(`/order/${res._id}`);
          notifySuccess("Your Order Confirmed!");
          Cookies.remove("couponInfo");
          sessionStorage.removeItem("products");
          clearCart();
          setIsCheckoutSubmit(false);
        })
        .catch((err) => {
          notifyError(err.message);
          setIsCheckoutSubmit(false);
        });
    }
  };

  const handleSuccess = (response, orderInfo, data) => {
    const orderData = {
      ...orderInfo,
      cardInfo: data.paymentMethod,
      payment: response,
    };
    OrderServices.updateOrder(orderData)
      .then((res) => {
        notifySuccess("Your Order Confirmed!");
        router.push(`/order/${res._id}`);
        Cookies.remove("couponInfo");
        clearCart();
        sessionStorage.removeItem("products");
        setIsCheckoutSubmit(false);
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
        setIsCheckoutSubmit(false);
      });
  };

  const handleShippingCost = (value) => {
    setShippingCost(value);
  };

  const handleCouponCode = (e) => {
    e.preventDefault();

    if (!couponRef.current?.value) {
      notifyError("Please Input a Coupon Code!");
      return;
    }
    const result = data?.filter(
      (coupon) => coupon.couponCode === couponRef.current.value
    );

    if (result.length < 1) {
      notifyError("Please Input a Valid Coupon!");
      return;
    }

    if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
      notifyError("This coupon is not valid!");
      return;
    }

    if (total < result[0]?.minimumAmount) {
      notifyError(
        `Minimum ${result[0].minimumAmount} USD required for Apply this coupon!`
      );
      return;
    } else {
      notifySuccess(
        `Your Coupon ${result[0].title} is Applied on ${result[0].productType}!`
      );
      setMinimumAmount(result[0]?.minimumAmount);
      setDiscountProductType(result[0].productType);
      setDiscountPercentage(result[0].discountPercentage);
      dispatch({ type: "SAVE_COUPON", payload: result[0] });
      Cookies.set("couponInfo", JSON.stringify(result[0]));
    }
  };

  return {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    couponInfo,
    couponRef,
    handleCouponCode,
    discountPercentage,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    cartItems,
    cartTotal,
    isCheckoutSubmit,
  };
};

export default useCheckoutSubmit;
