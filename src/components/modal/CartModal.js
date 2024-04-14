import React, { useContext } from "react";
import Image from "next/image";
import MainModal from "./MainModal";
import { Bag, Minus, Plus } from "@/constants/allSvgs";
import { CartContext } from "@/context/CartContext";

const CartModal = ({ modalOpen, setModalOpen }) => {
  const { cartItems, addToCart, removeFromCart, getCartTotal } =
    useContext(CartContext);

  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );

    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Quintessentials",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou",
      image: "https://www.quintessentials.in/logo/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
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
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="border-2 z-[1000] relative w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <h1 className="font-semibold text-lg flex flex-row">
          <Bag />
          <span className="ml-2">Shopping Cart</span>
        </h1>
        {cartItems.length < 1 && (
          <p className="text-gray-400 font-medium mt-4">No items added !</p>
        )}
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-row items-center justify-between my-4"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row">
                <Image
                  alt={item.title}
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col ml-4">
                  <h2 className="font-semibold">{item.title}</h2>
                  <h3 className="text-midSm text-gray-500 -mt-1 mb-1">
                    Item Price
                  </h3>
                  <p className="font-bold text-lg">₹ {item.price}</p>
                </div>
              </div>

              <div className="flex flex-col justify-end mx-2">
                <div className="rounded-lg text-sm border border-gray-300 flex flex-row items-center px-2 py-1">
                  <span
                    onClick={() => removeFromCart(item)}
                    className="cursor-pointer"
                  >
                    <Minus height={5} width={5} />
                  </span>
                  <span className="mx-3 font-medium">{item.quantity}</span>
                  <span
                    onClick={() => addToCart(item)}
                    className="cursor-pointer"
                  >
                    <Plus height={5} width={5} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <button
            className="py-3 px-3 rounded text-white flex flex-row items-center justify-between bg-[#770006] w-full"
            onClick={makePayment}
          >
            <p>Proceed To Checkout</p>
            <span className="px-3 py-1 bg-white text-lime-900 text-lg font-semibold rounded-sm">
              ₹ {getCartTotal()}
            </span>
          </button>
        )}
      </div>
    </MainModal>
  );
};

export default React.memo(CartModal);
