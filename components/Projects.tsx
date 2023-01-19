import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='h-full mx-auto w-full items-center grid content-center md:grid-cols-2 lg:max-w-6xl'>

            <div className='flex justify-center px-4 items-center w-full text-center h-[400px]  md:px-8'>
                <div className='flex flex-col space-y-5 items-start text-start'>
                    <h1 className='font-bold uppercase'>Von Carlo R. Ojastro</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae vel quas ipsum ducimus perspiciatis, id deleniti mollitia consequatur non.</p>
                    <button className='px-10 py-3 bg-white rounded-md drop-shadow-md hover:bg-gray-200'>Visit Page</button>
                </div>
            </div>

            <div className='flex justify-center px-4 items-center w-full text-center h-[600px]  md:px-8'>
                <>
                    <Image
                        src={require('/images/iphone.png')}
                        alt='ds'
                        width={400}
                        height={400}
                    />
                </>
            </div>




        </div>
    )
}

export default Projects