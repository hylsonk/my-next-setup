import React from "react"
import Head from "next/head"
import SampleForm from "../components/ui/templates/sampleForm"
import useTranslation from "next-translate/useTranslation"

const Home = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div>
      <Head>
        <title>{t("common:intro")}</title>
      </Head>

      <main>
        <SampleForm />
      </main>
    </div>
  )
}

export default Home
