import React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const Heading: React.FC<HeadingProps> = ({
  headingLevel = "p",
  children,
  className,
}) => {
  const Heading = headingLevel
  return <Heading className={className}>{children}</Heading>
}

export default Heading