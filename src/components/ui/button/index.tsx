import React from "react"

type ButtonProps = JSX.IntrinsicElements["button"]

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => (
    <button {...props} ref={ref}>
      {props.children}
    </button>
  )
)

Button.displayName = "Button"

export default Button
