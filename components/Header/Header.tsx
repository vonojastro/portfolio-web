import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';



const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>

            <div className='fixed top-0 bg-white w-full  drop-shadow '>
                <div className='h-[70px] mx-4 flex items-center justify-between relative z-50 lg:mx-10'>

                    <Link href='/home'>
                        <p>Von Ojastro</p>
                    </Link>

                    {/* NavLink large */}
                    <ul className='space-x-5 hidden lg:flex'>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>

                    {/* NavLink Mobile */}
                  
                            <AiOutlineMenu
                                className={`cursor-pointer relative text-2xl ${navOpen ? 'rotate-0 opacity-0' : 'rotate-180'} duration-300 ease-in-out lg:hidden`}
                                onClick={() => setNavOpen(!navOpen)} />

                 
                                <CgClose
                                    className={`cursor-pointer absolute right-0 text-2xl  ${!navOpen ? 'rotate-180 opacity-0' : 'rotate-0'} duration-300 ease-in-out lg:hidden`}
                                    onClick={() => setNavOpen(!navOpen)} />


                </div>



            </div>

     

            <ul className={`absolute h-full opacity-100 z-[-5] w-full flex border gray flex-col justify-center items-center top-[0] ${navOpen ? 'right-[0px]' : 'right-[-1000px]'} duration-300 ease-in-out space-y-12 py-10 bg-white md:w-5/12 lg:hidden`}>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>


        </>
    )
}

export default Header