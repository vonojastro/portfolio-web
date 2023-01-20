import React from 'react'

const Hero = () => {
    return (
        <div className='min-h-screen mx-auto w-full lg:max-w-6xl'>
            <div className='order-last flex justify-center px-5 items-center w-full text-center min-h-screen  md:px-8'>
                <div className='flex flex-col space-y-5 items-start text-start'>
                    <h1 className='font-bold uppercase text-2xl lg:text-4xl'>Von Carlo R. Ojastro</h1>
                    <p className='md:w-9/12 lg:w-7/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae vel quas ipsum ducimus perspiciatis, id deleniti mollitia consequatur non.</p>
                    <button className='px-10 py-3 bg-white rounded-md drop-shadow-md hover:bg-gray-200'>Visit Page</button>
                </div>
            </div>
        </div>
    )
}

export default Hero