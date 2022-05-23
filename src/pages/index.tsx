import React from "react"
import Head from "next/head"
import SampleForm from "../components/ui/templates/sampleForm"

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Create Next App</title>
    </Head>

    <main>
      <SampleForm />
    </main>
  </div>
)

export default Home
