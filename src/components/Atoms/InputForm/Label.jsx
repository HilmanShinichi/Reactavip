/* eslint-disable no-unused-vars */
import React, { Children } from "react";

const Label = (props) => {

    // eslint-disable-next-line react/prop-types
    const {htmlFor, children} = props

  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
