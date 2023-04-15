import React from 'react'

interface Props{
  children?: React.ReactNode,
  index: number,
  activeIndex: number
}

const Carouseltem = ({children, index, activeIndex} : Props) => {

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
      <h1 className=' h-full flex justify-center items-center rounded-lg' style={{backgroundColor: 'red', border:'1px solid black'}}>

hello
      </h1>
    </div>
  )
}

export default Carouseltem