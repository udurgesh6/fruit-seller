import { useContext } from "react";
import { Right } from "@/constants/allSvgs";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";

const Fruit = ({
  description,
  image,
  price,
  quantity,
  slug,
  title,
  unit,
  _id,
}) => {
  const { setCartModalOpen, addToCart } = useContext(CartContext);
  const onAddToBag = () => {
    addToCart({
      _id: _id,
      image: image,
      price: price,
      quantity: quantity,
      slug: slug,
      unit: unit,
      title: title,
      description: description,
    });
    setCartModalOpen((cartModalOpen) => !cartModalOpen);
  };
  return (
    <div className="flex flex-col">
      <Link href={`/product/${slug}`}>
        <Image
          className="w-full object-cover h-[130px] midSm:h-[180px] sm:h-[270px] md:h-[250px] lg:h-[300px]"
          alt={title}
          height={300}
          width={300}
          src={image}
        />
        <p className="text-xs md:text-sm my-2">
          {title} - {quantity}
          {unit}
        </p>
      </Link>

      <div
        className="p-2 border flex flex-row justify-between border border-black text-xs md:text-sm lg:text-base cursor-pointer"
        onClick={onAddToBag}
      >
        <p>{price}</p>
        <div className="flex flex-row items-center">
          <p className="mr-1">Add to cart</p>
          <Right height={5} width={5} />
        </div>
      </div>
    </div>
  );
};

export default Fruit;
