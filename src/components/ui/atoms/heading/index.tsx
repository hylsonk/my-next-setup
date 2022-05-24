import React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

export const Heading = ({
  headingLevel = "p",
  children,
  ...otherProps
}: HeadingProps): JSX.Element => {
  const Heading = headingLevel
  return <Heading {...otherProps}>{children}</Heading>
}

Heading.displayName = "Heading"

export default Heading
