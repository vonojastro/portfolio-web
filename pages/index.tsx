import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/utils/Layout'
import MyParticles from '../components/utils/ParticlesBackground'
import ProjectSection from '../components/Projects'
import particlesConfig from '../particlesConfig/particles-config'
import SkillSection from '../components/Skills'
import Qualification from '../components/Qualification'
import { education, work, frontendSkills, backendSkills, designSkills } from '../constants/details'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

import toast, { Toaster } from 'react-hot-toast';


import card1 from '/public/images/skills/node.webp'
import card2 from '/public/images/skills/canva.webp'
import card3 from '/public/images/skills/figma.webp'
import card4 from '/public/images/skills/lumion.webp'

const imageItems = [
  <Image src={card1} className='h-full w-full' alt='card1' />,
  <Image src={card2} className='h-full w-full' alt='card1' />,
  <Image src={card3} className='h-full w-full' alt='card1' />,
  <Image src={card4} className='h-full w-full' alt='card1' />,
  <Image src={card4} className='h-full w-full' alt='card1' />,
  <Image src={card4} className='h-full w-full' alt='card1' />,
]


const Home: NextPage = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Von Ojastro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout >
        <Toaster />
        <Hero />
        <SkillSection frontendSkills={frontendSkills} backendSkills={backendSkills} designSkills={designSkills} />
        <Qualification education={education} work={work} />
        <ProjectSection />
        {/* <Testimonials items={imageItems} /> */}
        <Contact />

      </Layout>

    </div>
  )
}

export default Home
