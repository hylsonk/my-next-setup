import React from "react"

type LabelProps = JSX.IntrinsicElements["label"]

export const Label = (props: LabelProps): JSX.Element => {
  return <label {...props}>{props.children}</label>
}

export default Label
