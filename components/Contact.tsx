import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiSend } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';

import {Triangle } from 'react-loader-spinner'
import axios from 'axios';
import { toast } from 'react-hot-toast';


interface Contact {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [contactInput, setContactInput] = useState<Contact>({
    name: '',
    email: '',
    message: ''
  })

  const [submitLoading, setSubmitLoading] = useState<Boolean>(false)

  const isFormEmpty = Object.keys(contactInput).length === 0;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitLoading(true)
    try {
      const response = await axios.post('/api/contact', contactInput);
      if (response) {
        setSubmitLoading(false)
        setContactInput(prevState => ({
          ...prevState,
          name: '',
          email: '',
          message: ''
        }))

        toast.success(response.data.message)
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Error sending email")
    }

  };

  return (
    <div className='py-10 md:py-[100px] w-full h-[750px] md:h-full'>
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

            <form className='px-5 lg:px-0 flex flex-col gap-4 md:gap-5 items-start w-full' onSubmit={onSubmit}>
              <div className='flex flex-col md:flex-row gap-4 w-full'>
                <input required type='text' placeholder='Name' className='w-full px-3 py-2 md:py-2 rounded-sm outline-none' value={contactInput.name} onChange={(e) => setContactInput({ ...contactInput, name: e.target.value })} />
                <input required type='email' placeholder='Email' className='w-full px-3 py-2 md:py-2 rounded-sm outline-none' value={contactInput.email} onChange={(e) => setContactInput({ ...contactInput, email: e.target.value })} />
              </div>
              <textarea required className='w-full px-3 py-2 md:py-2 rounded-sm h-full min-h-[150px] outline-none' value={contactInput.message} onChange={(e) => setContactInput({ ...contactInput, message: e.target.value })} />
              <button type='submit' className='flex items-center gap-3 border-[#02c272] bg-[#02c272] text-white hover:bg-[#02a360] px-6 py-3 duration-300 ease-in-out rounded-md'>Send Message
              
              {submitLoading ? (
                    <Triangle
                    height="25"
                    width="25"
                    color="#fff"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    // wrapperClassName=""
                    visible={true}
                  />
              ) : (
                <BiSend className='text-xl'/>
              )}
            
              </button>
            </form>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Contact