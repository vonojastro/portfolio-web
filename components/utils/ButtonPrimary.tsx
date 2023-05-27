import React from 'react'

interface BtnProps {
  children: React.ReactNode;
}
 const ButtonPrimary = ({children} : BtnProps) => {
  return (
    <div className='cursor-pointer flex gap-2 items-center px-3 md:px-10 py-3 mt-6 bg-[#02c272] text-white rounded-lg border-[#02c272] hover:bg-white hover:border-[#02c272] border hover:text-black hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] duration-200'>{children}</div>
  )
}


export default ButtonPrimary

