import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { loadFull } from 'tsparticles';
import particlesConfig from '../particlesConfig/particles-config';
import MyParticles from './utils/ParticlesBackground';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>
            <div className='w-full z-50 px-4'>
                <div className='h-[70px] mx-auto flex items-center justify-between relative lg:max-w-6xl'>

                    <Link href='/'>
                        <p className='text-white'>Von Ojastro</p>
                    </Link>

                    {/* NavLink large */}
                    <ul className='space-x-3 hidden md:flex'>
                        <li
                            className='navLink'
                        >Projects</li>
                        <li
                            className='navLink'
                        >About</li>
                        <li
                            className='navLink'
                        >Contact</li>
                        <li
                            className='navLink'
                        >Resume</li>
                    </ul>

                    <AiOutlineMenu
                        className={`text-white cursor-pointer relative text-2xl ${navOpen ? 'rotate-0 opacity-0' : 'rotate-180'} duration-300 ease-in-out md:hidden`}
                        onClick={() => setNavOpen(!navOpen)} />


                    <CgClose
                        className={`cursor-pointer absolute right-0 text-2xl  ${!navOpen ? 'rotate-180 opacity-0' : 'rotate-0 text-black'} duration-300 ease-in-out md:hidden`}
                        onClick={() => setNavOpen(!navOpen)} />
                </div>
            </div>

            {/* NavLink Mobile */}
            <ul className={`absolute h-full  z-10  w-full flex flex-col justify-center items-center top-[0] ${navOpen ? 'opacity-100' : 'opacity-0'} duration-300 ease-out py-10 bg-white md:hidden`}>
      
                <li className='sidebarLink'
                    onClick={() => setNavOpen(false)}
                >
                    <Link href='/'>
                        Projects
                    </Link>
                </li>
                <li className='sidebarLink'
                    onClick={() => setNavOpen(false)}
                >
                    <Link href='/'>
                        About
                    </Link>
                </li>
                <li className='sidebarLink'
                    onClick={() => setNavOpen(false)}
                >
                    <Link href='/'>
                        Contact
                    </Link>
                </li>
                <li className='sidebarLink'
                    onClick={() => setNavOpen(false)}
                >
                    <Link href='/'>
                        Resume
                    </Link>
                </li>
            </ul>

        </>
    )
}

export default Header