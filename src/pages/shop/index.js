/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fruit from "@/components/landing/fruit";
import DesignsModuleStyle from "@/styles/Designs.module.css";

const index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/show`,
      method: "GET",
    }).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-5 md:p-10">
      {products.length < 1 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div
              key={index}
              className={`w-full h-[130px] xs:h-[160px] sm:h-[200px] md:h-[240px] rounded-md ${DesignsModuleStyle.animatedBackground}`}
            ></div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mt-4">
        {products.map(
          ({ description, image, price, quantity, slug, title, unit, _id }) => (
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
