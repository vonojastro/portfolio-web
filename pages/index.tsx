import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../utils/Layout'
import MyParticles from '../utils/ParticlesBG'
import ProjectSection from '../components/Projects'
import particlesConfig from '../particlesConfig/particles-config'
import SkillSection from '../components/Skills'
import Qualification from '../components/Qualification'
import { education, work } from '../constants/qualification'


const Home: NextPage = () => {



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Von Ojastro 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout >
        <Hero />
        {/* <SkillSection /> */}
        <Qualification education={education} work={work}/>
        {/* <ProjectSection /> */}
      </Layout>

    </div>
  )
}

export default Home
