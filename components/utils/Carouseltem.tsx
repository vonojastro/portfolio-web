import Image from 'next/image';
import React from 'react'

interface Props {
  children?: React.ReactNode,
  index: number,
  activeIndex: number
}

const Carouseltem = ({ children, index, activeIndex }: Props) => {

  const offset = (index - activeIndex) / 4
  const direction = Math.sign(index - activeIndex);
  const obsOffset = Math.abs(offset)


  const cssTransformPropersties = `
rotateY(calc(${offset} * 50deg))
scaleY(calc(1 + ${obsOffset} * -0.5))
translateX(calc(${direction} * -5rem))
translateZ(calc(${obsOffset} * -35rem))
`;


  const cssOpacity = `
${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}
`
  const cssDisplay = `
${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}
`
  return (
    <div className='carousel-item'
      style={{
        transform: cssTransformPropersties,
        opacity: cssOpacity,
        display: cssDisplay
      }}
    >
      <h1 className=' h-full flex flex-col lg:flex-row  justify-center gap-10 items-center rounded-lg' style={{ backgroundColor: '#171C23', border: '1px solid #02c272' }}>
        <Image src='/images/mapua.webp' width={100} height={100} alt='' className='w-[100px] h-[100px] bg-red-200 rounded-full' />
        <div className='w-7/12 flex flex-col gap-4 text-start text-white'>
          {/* line 1 */}
          <div>
            <h1 className='font-bold text-lg'>Dean Yobhel Nucum</h1>
            <h1 className='text-sm'>Senior Software Engineer</h1>
          </div>

          {/* line 2 */}
          <div className='' style={{fontStyle: 'italic'}}>
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi distinctio"
          </div>
        </div>

      </h1>
    </div>
  )
}

export default Carouseltem