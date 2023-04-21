import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const Accordion = ({ children }: Props) => {
  return (
    <div className='  w-full flex justify-center items-center gap-3 cursor-pointer h-4 rounded-md '>
      {children}
    </div>
  )
}

export default Accordion