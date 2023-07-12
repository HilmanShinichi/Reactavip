/* eslint-disable no-unused-vars */
import React, { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

// eslint-disable-next-line react/display-name
const InputForm = forwardRef((props, ref) => {

  // eslint-disable-next-line react/prop-types
  const { label, name, type, placeholder} = props
    return (
      <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
      </div>
    );
  })

export default InputForm;
