import React from 'react'
import Accordion from '../utils/Accordion'

const SkillSection = () => {
  return (
    <div className='py-5 w-full bg-[#171C23]'>
      <div className='text-center py-3'>
        <h1 className='text-2xl text-[#02c272]'>Skills</h1>
        <p className='text-white'>My technical skills</p>
      </div>

      <div className='flex justify-center gap-5'>
        <Accordion />
        <Accordion />
        <Accordion /> 
      
      </div>
    </div>
  )
}

export default SkillSection