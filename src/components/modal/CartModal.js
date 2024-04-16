import React, { useContext } from "react";
import Image from "next/image";
import MainModal from "./MainModal";
import { Bag, Minus, Plus } from "@/constants/allSvgs";
import { CartContext } from "@/context/CartContext";
import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import { notifyError } from "@/utils/toast";

const CartModal = ({ modalOpen, setModalOpen }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
    setCartModalOpen,
  } = useContext(CartContext);
  const {
    state: { userInfo },
  } = useContext(UserContext);
  console.log(userInfo);

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
          <Link
            className="py-3 px-3 rounded text-white flex flex-row items-center justify-between bg-[#770006] w-full"
            href={!userInfo ? "/authentication" : "/checkout"}
            onClick={() => {
              setCartModalOpen(false);
              if (!userInfo) {
                notifyError("Please login first !");
              }
            }}
          >
            <p>Proceed To Checkout</p>
            <span className="px-3 py-1 bg-white text-lime-900 text-lg font-semibold rounded-sm">
              ₹ {getCartTotal()}
            </span>
          </Link>
        )}
      </div>
    </MainModal>
  );
};

export default React.memo(CartModal);
