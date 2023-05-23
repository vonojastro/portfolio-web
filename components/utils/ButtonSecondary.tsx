import React from 'react'

interface BtnProps {
  children: React.ReactNode;
}
 const ButtonSecondary = ({children} : BtnProps) => {
  return (
    <div className='cursor-pointer flex gap-2 items-center px-10 py-3 mt-6 border-white border bg-white text-black rounded-lg hover:bg-[#02c272] hover:border-white hover:text-white hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] duration-200'>{children}</div>
  )
}


export default ButtonSecondary

