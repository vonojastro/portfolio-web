import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { loadFull } from "tsparticles";
import particlesConfig from "../particlesConfig/particles-config";
import MyParticles from "./utils/ParticlesBackground";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="w-full z-50 px-4">
        <div className="h-[70px] mx-auto flex items-center justify-between relative lg:max-w-6xl">
          <Link href="/">
            <p className="text-white">Von Ojastro</p>
          </Link>

          {/* NavLink large */}
          <ul className="space-x-3 hidden md:flex items-center">
            <Link href="#projects">
              <li className="navLink">Projects</li>
            </Link>
            <Link href="#qualifications">
              <li className="navLink">Qualifications</li>
            </Link>
            <Link href="#contact">
              <li className="navLink">Contact</li>
            </Link>

            <a
              href="/images/files/Von_Ojastro_Resume_2024.pdf"
              id="download"
              download="Von_Ojastro_Resume"
              style={{ textDecoration: "none" }}
              className=""
            >
              <li className="navLink">Resume</li>
            </a>
            <div className="px-5 flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/von-ojastro-5535831b2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="text-2xl text-white duration-200 ease-in-out hover:text-[#00C271] " />
              </Link>
              <Link
                href="https://github.com/vonojastro?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-2xl text-white duration-200 ease-in-out hover:text-[#00C271] " />
              </Link>
            </div>
          </ul>

          <AiOutlineMenu
            className={`text-white cursor-pointer relative text-2xl ${
              navOpen ? "rotate-0 opacity-0" : "rotate-180"
            } duration-300 ease-in-out md:hidden`}
            onClick={() => setNavOpen(!navOpen)}
          />

          <CgClose
            className={`cursor-pointer absolute right-0 text-2xl  ${
              !navOpen ? "rotate-180 opacity-0" : "rotate-0 text-black"
            } duration-300 ease-in-out md:hidden`}
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>
      </div>

      {/* NavLink Mobile */}
      <ul
        className={`absolute h-full  z-10  w-full flex flex-col justify-center items-center top-[0] ${
          navOpen ? "opacity-100" : "opacity-0"
        } duration-300 ease-out py-10 bg-white md:hidden`}
      >
        <li className="sidebarLink" onClick={() => setNavOpen(false)}>
          <Link href="/">Projects</Link>
        </li>
        <li className="sidebarLink" onClick={() => setNavOpen(false)}>
          <Link href="/">About</Link>
        </li>
        <li className="sidebarLink" onClick={() => setNavOpen(false)}>
          <Link href="/">Contact</Link>
        </li>
        <li className="sidebarLink" onClick={() => setNavOpen(false)}>
          <Link href="/">Resume</Link>
        </li>
        <li className="sidebarLink" onClick={() => setNavOpen(false)}>
          <Link href="https://www.linkedin.com/in/von-ojastro-5535831b2/">
            <AiFillLinkedin />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
