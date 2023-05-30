import React from 'react'
import particlesConfig from '../particlesConfig/particles-config'
import MyParticles from './utils/ParticlesBackground'
import ButtonPrimary from './utils/ButtonPrimary'
import ButtonSecondary from './utils/ButtonSecondary'
import { HiDownload } from 'react-icons/hi'
import { BiSend } from 'react-icons/bi'
import Link from 'next/link'


const Hero = () => {
    return (
        <div className='max-h-screen mx-auto w-full lg:max-w-6xl'>
            <MyParticles
                id='tsparticle'
                // particlesLoaded='particlesLoaded'
                options={particlesConfig}
            />

            <div className='flex justify-start gap-10 px-5 items-center w-full text-center min-h-[90vh] md:px-8'>
                <div className='flex md:w-8/12 flex-col space-y-2 md:space-y-6 justify-center px-4 lg:px-0'>
                    <div className='flex flex-col gap-1 text-center sm:text-start '>
                        <h3 className='text-xl text-white'>Hello, <span className='text-[#02c272]'>I'm</span></h3>
                        <h1 className='font-bold text-2xl lg:text-4xl text-[#02c272]' >Von Carlo R. Ojastro</h1>
                        <h4 className='text-white text-xl'>Full Stack Web Developer</h4>
                    </div>
                    <div className='flex flex-col gap-3 text-center sm:text-start items-center sm:items-start'>
                        <p className=' text-white py-3'>I am a career shifter with entry-level skills in full stack development committed to continual learning and growth, and eager to contribute to innovative projects with creativity and dedication.</p>

                        <div className='flex gap-3'>
                            <ButtonPrimary>{
                                <Link href="#contact">
                                    <span className='flex gap-2   items-center'>
                                        Contact Me
                                        <BiSend className='hidden md:flex text-lg' />
                                    </span>
                                </Link>

                            }</ButtonPrimary>
                            <ButtonSecondary>{
                                <a href='/images/files/Von_Ojastro_Updated_Resume.pdf' id="download" download='Von_Ojastro_Resume' style={{ textDecoration: 'none' }} className=''>
                                    <span className='flex gap-2  items-center'>
                                        Resume
                                        <HiDownload className=' hidden md:flex text-lg' />
                                    </span>
                                </a>
                            }</ButtonSecondary>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero