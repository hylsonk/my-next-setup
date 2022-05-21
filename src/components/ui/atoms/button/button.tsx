import React from "react";

type ButtonProps = JSX.IntrinsicElements["button"];

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button
      {...props}
      ref={ref}
    >
      {props.children}
    </button> 
  )

);

export default Button