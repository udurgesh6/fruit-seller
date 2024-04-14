import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-full border border-[#770006] text-xs py-2 px-3 text-[#770006]">
      {text}
    </button>
  );
};

export default Button;
