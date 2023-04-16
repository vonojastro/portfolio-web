import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';

const Contact = () => {
  const [contactInput, setContactInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  const onSubmit = () => {

  }

  return (
    <div className='py-10 md:py-[100px] w-full'>
      <div className='lg:max-w-6xl mx-auto'>
        <div className='flex flex-col gap-2 items-center pb-10'>
          <h1 className='text-2xl text-[#02c272]'>Contact Me</h1>
          <p className='text-white'>Get in Touch</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-[400px]'>
          <div className='flex flex-col items-center  px-5 justify-center'>

            <div className='flex flex-col items-start gap-5 '>
              <div className='flex items-center justify-center gap-5'>
                <BsTelephone className='text-2xl text-[#02c272]' />
                <div>
                  <h1 className='font-bold text-lg text-[#02c272]'>Call me</h1>
                  <p className='text-white'>09284504220</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-5'>
                <HiOutlineMailOpen className='text-2xl text-[#02c272]' />
                <div>
                  <h1 className='font-bold text-lg text-[#02c272]'>Email</h1>
                  <p className='text-white'>vonojastro@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-5'>
                <ImLocation2 className='text-2xl text-[#02c272]' />
                <div>
                  <h1 className='font-bold text-lg text-[#02c272]'>Location</h1>
                  <p className='text-white'>Lucena City</p>
                </div>
              </div>
            </div>

          </div>
          <div className='flex flex-col items-center justify-center px-5'>

            <form className='flex flex-col gap-4 md:gap-5 items-start w-full' onClick={onSubmit}>
              <div className='flex flex-col md:flex-row gap-4 w-full'>
                <input type='text' placeholder='Name' className='w-full px-5 py-2 md:py-1 rounded-sm' onChange={(e) => setContactInput({ ...contactInput, name: e.target.value })} />
                <input type='email' placeholder='Email' className='w-full px-5 py-2 md:py-1 rounded-sm' onChange={(e) => setContactInput({ ...contactInput, email: e.target.value })} />
              </div>
              <textarea className='w-full px-5 py-2 md:py-1 rounded-sm h-full min-h-[150px]' onChange={(e) => setContactInput({ ...contactInput, message: e.target.value })} />
              <button className='border-[#02c272] bg-[#02c272] text-white hover:text-[#02c272] hover:bg-white px-10 py-3 duration-300 ease-in-out rounded-md'>Send Message</button>
            </form>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Contact