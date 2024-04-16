import React from "react";
import Label from "./Label";

const InputArea = ({
  register,
  defaultValue,
  name,
  label,
  type,
  placeholder,
  Icon,
  className = "",
}) => {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div
            className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${className}`}
          >
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{" "}
            </span>
          </div>
        )}
        <input
          {...register(`${name}`, {
            required: `${label} is required!`,
          })}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          name={name}
          className={`${
            Icon
              ? "py-2 pl-10 w-full text-sm opacity-75 text-input placeholder-body min-h-12 transition duration-200 ease-in-out h-11 md:h-12 outline-none"
              : "py-2 px-4 md:px-5 w-full text-sm opacity-75 text-input placeholder-body min-h-12 transition duration-200 ease-in-out h-11 md:h-12 outline-none"
          } ${className}`}
        />
      </div>
    </>
  );
};

export default InputArea;
