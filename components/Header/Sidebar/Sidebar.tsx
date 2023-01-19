import Link from 'next/link'
import React from 'react'


type SidebarProps = {
    navOpen: React.ReactNode
}

const Sidebar = ({ navOpen }: SidebarProps) => {
    return (
        <ul className={`absolute h-full opacity-100  z-0 w-full flex flex-col justify-center items-center top-[0] ${navOpen ? 'right-[0px]' : 'right-[-1000px]'} duration-300 ease-in-out space-y-7 py-10 bg-white md:hidden`}>
            <li className='sidebarLink'>
                <Link href='/'>
                    Projects
                </Link>
            </li>
            <li className='sidebarLink'>
                <Link href='/'>
                  About
                </Link>
            </li>
            <li className='sidebarLink'>
                <Link href='/'>
                    Contact
                </Link>
            </li>
            <li className='sidebarLink'>
                <Link href='/'>
                   Resume
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar