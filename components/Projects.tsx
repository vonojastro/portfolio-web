import Image from 'next/image'
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Pagination, Navigation } from "swiper";
import { AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai';
import ButtonPrimary from './utils/ButtonPrimary';
import ButtonSecondary from './utils/ButtonSecondary';
import { projects } from '../constants/details';
import Link from 'next/link';

const ProjectSection = () => {
    const [software, setSoftware] = useState('')
    return (

        <div className='w-full bg-[#171C23]   py-5'>
            <div className='text-center py-10'>
                <h1 className='text-2xl text-[#02c272]'>Projects</h1>
                <p className='text-white'>My Works</p>
            </div>
            <div className='px-5 mx-auto w-full items-center flex flex-col content-center md:flex-row  '>

                {/* carousel */}
                <Swiper
                    slidesPerView={1}
                    effect={"fade"}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {projects.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='lg:max-w-6xl  mx-auto bg-[#171C23]'>
                                <div className='p-5 flex flex-col gap-2'>
                                    <h1 className='text-2xl text-white font-light py-5 text-center lg:text-start'>{item.title}</h1>
                                    {/* <p className='text-2xl text-[#02c272] font-light pb-5'>Tales Blog Application</p> */}
                                    <div className='hidden relative md:flex border-l-[14px] border-r-[14px] cursor-pointer overflow-hidden border-t-[15px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)]  border-black rounded-t-3xl  h-[300px] bg-white'>
                                        <img src={item.desktopImg} alt='tales_img' className='absolute top-0 hover:top-[-600%] duration-[8s] ease-in-out' />
                                    </div>
                                </div>
                                <div className='flex flex-col-reverse lg:flex-row h-full py-5 '>
                                    <div className='p-5 w-12/12 lg:w-6/12 flex flex-col items-center justify-center '>
                                        <div className='text-center max-w-[550px] lg:max-w-full lg:text-start w-full text-white'>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className='flex justify-center lg:justify-start gap-2 pt-5 w-full flex-wrap'>
                                            {item.stack && item.stack.map((st, index) => (
                                                <div className='w-[40px] h-[40px] hover:scale-[1.1] duration-200 ease-in-out rounded-full overflow-hidden flex justify-center items-center' onMouseEnter={() => setSoftware(st.software)} key={index}>
                                                    <img src={st.softwareImg} alt='' className='h-full bg-white cursor-pointer' />
                                                </div>
                                            ))}
                                        </div>
                                        <div className='w-full text-center lg:text-start pt-4'>
                                            <p className=' text-white'>{software}</p>
                                        </div>
                                        <div className='flex gap-4 py-3 justify-center lg:justify-start w-full'>
                                            <Link href={item.liveLink} target="_blank" rel="noopener noreferrer">
                                                <ButtonPrimary >Live
                                                    <AiOutlineGlobal className='text-xl' />
                                                </ButtonPrimary>
                                            </Link>
                                            <ButtonSecondary >Github
                                                <AiOutlineGithub className='text-2xl' />
                                            </ButtonSecondary>
                                        </div>
                                    </div>
                                    <div className='w-12/12 lg:w-6/12 flex flex-col md:flex-row gap-6  items-center justify-center  px-5'>
                                        <div className='w-[320px] relative border-4 px-5 bg-white overflow-hidden cursor-pointer rounded-lg border-black drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] h-[200px]'>
                                            <img src={item.desktopImg} alt='tales_img' className='absolute top-0 hover:top-[-200%] left-0 duration-[4s] ease-in-out' />
                                        </div>
                                        <div className='w-[100px] relative overflow-hidden cursor-pointer border-4 bg-white  rounded-2xl border-black drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] h-[200px]'>
                                            <img src={item.mobileImg} alt='tales_img' className='absolute top-0 hover:top-[-200%] left-0 duration-[4s] ease-in-out' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default ProjectSection