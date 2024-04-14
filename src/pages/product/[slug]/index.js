/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import DesignsModuleStyle from "@/styles/Designs.module.css";
import { CartContext } from "@/context/CartContext";
import { Minus, Plus } from "@/constants/allSvgs";
import WhyChoose from "@/components/landing/WhyChoose";
import { WhyChooseUs } from "@/constants/fruits";
import Fruit from "@/components/landing/fruit";

const index = () => {
  const router = useRouter();
  const { cartItems, addToCart, removeFromCart, setCartModalOpen } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [fruit, setFruit] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    console.log(router.query);
    axios({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/show`,
      method: "GET",
    }).then((res) => {
      const products = res.data;
      setProducts(res.data);
      const tempFruit = products.filter(
        (product) => product.slug === router.query.slug
      )[0];
      console.log(tempFruit);
      setFruit(tempFruit);
    });
  }, [router.isReady, router.query.slug]);

  useEffect(() => {
    if (fruit) {
      const quantity = cartItems.find(
        (item) => item._id === fruit._id
      )?.quantity;
      if (quantity) {
        setQuantity(quantity);
      } else {
        setQuantity(0);
      }
    }
  }, [cartItems, fruit]);

  if (!fruit) {
    return (
      <div className="p-5 md:p-14 bg-white w-full">
        <div className="bg-[#f6f7f8] h-6 relative mb-8 w-64"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="w-full flex flex-col">
            <div
              className={`w-full h-[130px] xs:h-[160px] sm:h-[200px] md:h-[500px] rounded-md ${DesignsModuleStyle.animatedBackground}`}
            ></div>
          </div>
          <div className="flex flex-col">
            <div className="bg-[#f6f7f8] h-10 relative mb-8 w-64"></div>
            <div
              className={`w-full mb-2 h-6 ${DesignsModuleStyle.animatedBackground}`}
            ></div>
            <div
              className={`w-full mb-2 h-6 ${DesignsModuleStyle.animatedBackground}`}
            ></div>
            <div
              className={`w-[50%] h-6 mb-8 ${DesignsModuleStyle.animatedBackground}`}
            ></div>

            <div
              className={`w-full mb-2 h-12 ${DesignsModuleStyle.animatedBackground}`}
            ></div>
            <div
              className={`w-full mb-2 h-12 ${DesignsModuleStyle.animatedBackground}`}
            ></div>
            <div
              className={`w-full mb-2 h-12 ${DesignsModuleStyle.animatedBackground}`}
            ></div>
            <div
              className={`w-full mb-2 h-12 ${DesignsModuleStyle.animatedBackground}`}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-5 md:p-14 lg:pt-14 lg:px-24 bg-white w-full  ">
      <div className="grid grid-cols-2 md:gap-8">
        <Image
          alt={fruit.title}
          src={fruit.image}
          height={500}
          width={500}
          className="col-span-2 md:col-span-1 "
        />
        <div className="col-span-2 md:col-span-1 flex flex-col mt-4 md:mt-0">
          <h1 className="text-lg font-semibold">{fruit.title}</h1>
          <p className="text-uppercase">(PER {fruit.unit})</p>
          <div className="flex flex-row items-center">
            <p className="my-2 text-[#770006] font-medium">
              Rs. ${fruit.price}
            </p>
            {fruit.originalPrice && (
              <p className="my-2 text-[#770006] font-medium line-through opacity-60 ml-4">
                ${fruit.originalPrice}
              </p>
            )}
            {fruit.discount && (
              <p className="my-2 font-medium ml-4 bg-[#770006] p-1 rounded text-white text-sm">
                {Math.floor(fruit.discount)}% off
              </p>
            )}
          </div>
          <p className="text-sm font-semibold">Description</p>
          <p className="my-2 text-sm">{fruit.description}</p>
          <div className="rounded-lg text-sm border border-gray-300 flex flex-row items-center justify-center px-2 py-1 w-28">
            <span
              onClick={() => {
                if (quantity > 0) {
                  removeFromCart(fruit);
                }
              }}
              className="cursor-pointer"
            >
              <Minus height={5} width={5} />
            </span>
            <span className="mx-3 font-medium">{quantity}</span>
            <span onClick={() => addToCart(fruit)} className="cursor-pointer">
              <Plus height={5} width={5} />
            </span>
          </div>
          <button
            className="border border-[#770006] p-2 uppercase my-4 hover:bg-gray-50"
            onClick={() => addToCart(fruit)}
          >
            Add to Cart
          </button>
          <button
            className="border border-[#770006] p-2 uppercase hover:bg-gray-50"
            onClick={() => setCartModalOpen(true)}
          >
            Buy now
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6 md:mt-14">
        <h1 className="text-[#770006] text-xl font-medium">
          Why Choose Quintessential Fruits?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mt-4">
        {WhyChooseUs.map(({ heading, description }, whyChooseUsIndex) => (
          <WhyChoose
            key={whyChooseUsIndex}
            heading={heading}
            description={description}
          />
        ))}
      </div>
      <div className="flex flex-row justify-between mt-6 md:mt-14">
        <h1 className="text-[#770006] text-xl font-semibold">
          Related Products
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mt-4">
        {products
          .filter(({ _id }) => _id !== fruit._id)
          .slice(0, 6)
          .map(
            ({
              description,
              image,
              price,
              quantity,
              slug,
              title,
              unit,
              _id,
            }) => (
              <Fruit
                key={_id}
                title={title}
                image={image}
                price={price}
                unit={unit}
                slug={slug}
                quantity={quantity}
                description={description}
                _id={_id}
              />
            )
          )}
      </div>
    </div>
  );
};

export default index;
