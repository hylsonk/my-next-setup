import React from "react";

type InputProps = JSX.IntrinsicElements["input"];

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <input
      {...props}
      ref={ref}
    />  
  )

);

export default Input