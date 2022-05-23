import React from "react"

type LabelProps = JSX.IntrinsicElements["label"]

export const Label: React.FC<LabelProps> = props => {
  return <label {...props}>{props.children}</label>
}

export default Label
