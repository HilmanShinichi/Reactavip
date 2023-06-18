/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Input = (props) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opcity-50"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
