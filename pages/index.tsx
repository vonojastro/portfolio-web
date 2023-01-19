import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Von Ojastro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
<Layout >
<Projects/>

</Layout>

    </div>
  )
}

export default Home
