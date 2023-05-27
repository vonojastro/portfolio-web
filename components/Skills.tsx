import React, { useState } from 'react'
import Accordion from './utils/Accordion'
import { HiOutlineCode } from 'react-icons/hi';
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { HiOutlineColorSwatch } from "@react-icons/all-files/hi/HiOutlineColorSwatch";
import { AiOutlineDatabase } from "@react-icons/all-files/ai/AiOutlineDatabase";
import Image from 'next/image';

interface Info {
  software: string,
  image: string,
  description: string,
}

interface Props {
  frontendSkills: Info[];
  backendSkills: Info[];
  designSkills: Info[];
}


const SkillSection = ({ frontendSkills, backendSkills, designSkills }: Props) => {
  const [show, setShow] = useState(1)
  const [skillDetails, setSkillDetails] = useState({
    title: '',
    description: ''
  })

  return (
    <div className='py-10 md:py-[50px] w-full bg-[#171C23] min-h-[650px]'>
      <div className='text-center pb-10'>
        <h1 className='text-2xl text-[#02c272]'>Skills</h1>
        <p className='text-white'>My technical skills</p>
      </div>
      <div className='px-8 lg:max-w-6xl mx-auto '>
        <div className='flex justify-between gap-2 '>

          <div onClick={() => setShow(1)} className={`${show === 1 ? 'bg-[#202730]' : ''} hover:bg-[#1e242b] px-3 py-5 rounded-t-lg w-5/12 duration-100 all ease-in-out`}>
            <Accordion>
              <HiOutlineCode className='text-[#02c272] hidden md:block' />
              <h1 className='text-white'>Frontend</h1>
              {/* <MdKeyboardArrowDown className='text-[#02c272]' /> */}
            </Accordion>
          </div>

          <div onClick={() => setShow(2)} className={`${show === 2 ? 'bg-[#202730]' : ''} hover:bg-[#1e242b] px-3 py-5 rounded-t-lg w-5/12 duration-100 all ease-in-out`}>
            <Accordion>
              <AiOutlineDatabase className='text-[#02c272] hidden md:block' />
              <h1 className='text-white'>Backend</h1>
              {/* <MdKeyboardArrowDown className='text-[#02c272]' /> */}
            </Accordion>
          </div>

          <div onClick={() => setShow(3)} className={`${show === 3 ? 'bg-[#202730]' : ''} hover:bg-[#1e242b] px-3 py-5 rounded-t-lg w-5/12 duration-100 all ease-in-out`}>
            <Accordion>
              <HiOutlineColorSwatch className='text-[#02c272] hidden md:block' />
              <h1 className='text-white'>Design</h1>
              {/* <MdKeyboardArrowDown className='text-[#02c272]' /> */}
            </Accordion>
          </div>
        </div>

        <div className='bg-[#202730] pb-5 flex flex-col items-center'>
          <div className='flex flex-wrap gap-6 md:gap-6 justify-center items-center rounded-b-lg p-10 md:p-12'>
            {show === 1 ? frontendSkills.map((item, index) => (
              <div key={index}>
                <Image src={item.image} onMouseEnter={() => setSkillDetails({ title: item.software, description: item.description })} alt='' width={100} height={100} className='border-[1px] cursor-pointer border-white hover:scale-[1.1] hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.15)] duration-200  bg-white w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full object-cover truncate' />
              </div>
            )) : show === 2 ? backendSkills.map((item, index) => (
              <div key={index}>
                <Image src={item.image} onMouseEnter={() => setSkillDetails({ title: item.software, description: item.description })} alt='' width={100} height={100} className='border-[1px] cursor-pointer border-white hover:scale-[1.1] hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.15)] duration-200  bg-white w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full object-cover truncate' />
              </div>
            )) : designSkills.map((item, index) => (
              <div key={index}>
                <Image src={item.image} onMouseEnter={() => setSkillDetails({ title: item.software, description: item.description })} alt='' width={100} height={100} className='border-[1px] cursor-pointer border-white  hover:scale-[1.1] hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.15)] duration-200 bg-white w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full object-cover truncate' />
              </div>
            ))}


          </div>
          {skillDetails.title && (
            <p className='lg:max-w-[950px] md:max-w-[600px] p-5  text-white'><span className=' text-[#02c272]'>{skillDetails.title} </span> - {skillDetails.description}</p>
          )}
        </div>

      </div>

    </div>
  )
}

export default SkillSection