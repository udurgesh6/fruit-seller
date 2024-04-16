// import { SidebarContext } from "@context/SidebarContext";
import { useContext } from "react";
import Image from "next/image";
import { Minus, Plus } from "@/constants/allSvgs";
import { CartContext } from "@/context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useContext(CartContext);
  return (
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
            <h3 className="text-midSm text-gray-500 -mt-1 mb-1">Item Price</h3>
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
            <span onClick={() => addToCart(item)} className="cursor-pointer">
              <Plus height={5} width={5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
