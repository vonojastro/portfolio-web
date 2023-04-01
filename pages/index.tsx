import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ProjectSection from '../components/Projects'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Von Ojastro o</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
<Layout >
<Hero/>
<ProjectSection/>
</Layout>

    </div>
  )
}

export default Home
