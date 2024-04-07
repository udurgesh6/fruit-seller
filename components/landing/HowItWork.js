import React from "react";

const HowItWork = ({ image, heading }) => {
  return (
    <div className="flex flex-row items-center justify-center p-4 text-[#770006] border border-[#770006] rounded">
      <div className="bg-[#ffe5f0] p-1 rounded mr-2">{image}</div>
      <p className="text-sm lg:text-base">{heading}</p>
    </div>
  );
};

export default HowItWork;
