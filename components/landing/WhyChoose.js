import React from "react";

const WhyChoose = ({ heading, description }) => {
  return (
    <div className="flex flex-col p-4 text-[#770006] bg-[#FF8BB7] border border-[#770006] rounded">
      <h2 className="font-semibold lg:text-lg">{heading}</h2>
      <p className="text-xs lg:text-sm tracking-5 mt-1">{description}</p>
    </div>
  );
};

export default WhyChoose;
