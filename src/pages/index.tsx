import React from "react"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"

const Home = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div>
      <Head>
        <title>{t("common:intro")}</title>
      </Head>

      <main></main>
    </div>
  )
}

export default Home
