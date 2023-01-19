import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import Sidebar from './Sidebar/Sidebar';



const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>

            <div className='fixed top-0 bg-white w-full z-50 drop-shadow '>
                <div className='h-[70px] mx-4 flex items-center justify-between relative lg:mx-10'>

                    <Link href='/home'>
                        <p>Von Ojastro</p>
                    </Link>

                    {/* NavLink large */}
                    <ul className='space-x-8 hidden md:flex'>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>

                    <AiOutlineMenu
                        className={`cursor-pointer relative text-2xl ${navOpen ? 'rotate-0 opacity-0' : 'rotate-180'} duration-300 ease-in-out md:hidden`}
                        onClick={() => setNavOpen(!navOpen)} />


                    <CgClose
                        className={`cursor-pointer absolute right-0 text-2xl  ${!navOpen ? 'rotate-180 opacity-0' : 'rotate-0'} duration-300 ease-in-out md:hidden`}
                        onClick={() => setNavOpen(!navOpen)} />
                </div>
            </div>

            {/* NavLink Mobile */}
            <Sidebar navOpen={navOpen} />

        </>
    )
}

export default Header