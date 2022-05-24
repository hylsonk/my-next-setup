import useTranslation from "next-translate/useTranslation"
import React from "react"
import { Heading } from "../components/ui/atoms"

const Custom404 = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <Heading headingLevel="h1">{t("error:404")}</Heading>
    </div>
  )
}

export default Custom404
