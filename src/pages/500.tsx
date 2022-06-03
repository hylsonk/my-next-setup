import useTranslation from "next-translate/useTranslation"
import React from "react"
import { Heading } from "../components/ui"

const Custom500 = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <Heading headingLevel="h1">{t("error:500")}</Heading>
    </div>
  )
}

export default Custom500
