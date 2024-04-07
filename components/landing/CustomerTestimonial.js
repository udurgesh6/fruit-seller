import React from "react";

const CustomerTestimonial = ({ testimonial, from }) => {
  return (
    <div className="flex flex-col p-6 text-[#770006] border border-[#770006] rounded">
      <p className="text-xs lg:text-sm">{testimonial}</p>
      <p className="p-2 bg-[#FF8BB7] mt-4 rounded text-center text-sm lg:text-base">
        {from}
      </p>
    </div>
  );
};

export default CustomerTestimonial;
