import React, { useState } from 'react'
import Carouseltem from './utils/Carouseltem'
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";


interface Props {
  width?: number,
  height?: number,
  items: React.ReactNode[],
}


const Testimonials = ({ width, height, items }: Props) => {

  const [activeIndex, setActiveIndex] = useState<number>(2)

  // next btn
  const handleNext = () => { setActiveIndex((prev) => prev + 1 < items.length ? prev + 1 : prev) }

  // prev btn
  const handlePrev = () => { setActiveIndex((prev) => prev - 1 >= 0 ? prev - 1 : prev) }

  return (
    <div className='w-full py-[100px] flex flex-col items-center bg-[#171C23] justify-center h-[1000px]'>

      <div className='text-center pb-10'>
        <h1 className='text-2xl text-[#02c272]'>Section title</h1>
        <p className='text-white'>Description</p>
      </div>
      <div className='carousel-container text-center'>
        {activeIndex > 0 && (
          <button onClick={handlePrev} className='carousel-btn-switch carousel-arrow-left
    '>
            <IoIosArrowBack />
          </button>
        )}


        {items.map((item, index) => (
          <Carouseltem key={index} index={index} activeIndex={activeIndex}>
            {item}
          </Carouseltem>
        ))}

        {activeIndex < items.length - 1 && (
          <button onClick={handleNext}>
            <IoIosArrowForward  className='carousel-btn-switch carousel-arrow-right
       ' />
          </button>
        )}

      </div>
    </div>

  )
}

export default Testimonials