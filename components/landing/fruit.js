import { Right } from "@/constants/allSvgs";
import Image from "next/image";

const Fruit = ({ url, name, price, unit }) => {
  return (
    <div className="flex flex-col">
      <Image className="w-full" alt={name} height={300} width={300} src={url} />
      <p className="text-xs md:text-sm my-2">
        {name} - {unit}
      </p>
      <div className="p-2 border flex flex-row justify-between border border-black text-xs md:text-sm lg:text-base">
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
