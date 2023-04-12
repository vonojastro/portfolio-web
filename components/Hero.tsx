import React from 'react'
import particlesConfig from '../particlesConfig/particles-config'
import MyParticles from '../utils/ParticlesBG'

const Hero = () => {
    return (
        <div className='max-h-screen mx-auto w-full lg:max-w-6xl'>
            <div className='order-last flex justify-center px-5 items-center w-full text-center min-h-screen  md:px-8'>
                <div className='h-2/4'>
                    <MyParticles
                        id='tsparticle'
                        // particlesLoaded='particlesLoaded'
                        options={particlesConfig}
                    />
                </div>

                <div className='flex flex-col space-y-2 md:space-y-5 justify-center px-4 md:px-10 lg:px-0'>
                    <div className='flex flex-col gap-1 text-center sm:text-start '>
                        <h3 className='text-xl text-white'>Hello, <span className='text-[#02c272]'>I'm</span></h3>
                        <h1 className='font-bold text-2xl lg:text-4xl text-[#02c272]' >Von Carlo R. Ojastro</h1>
                        <h4 className='text-white text-xl'>Full Stack Web Developer</h4>
                    </div>
                    <div className='flex flex-col gap-3 text-center sm:text-start items-center sm:items-start'>
                        <p className='md:w-9/12 lg:w-7/12 text-white py-3'>I am a career shifter with entry-level skills in full stack development and a deep passion for coding and building mobile and web applications. Committed to continual learning and growth, and eager to contribute to innovative projects with creativity and dedication.</p>
                        <button className='w-[200px] px-10 py-3 bg-[#02c272] text-white rounded-lg hover:bg-white hover:text-[#02c272] drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] duration-200'>Visit Page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero