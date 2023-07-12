/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name  } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded outline-blue-400 w-full py-2 px-3 text-slate-700 placeholder:opcity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
})

export default Input;
