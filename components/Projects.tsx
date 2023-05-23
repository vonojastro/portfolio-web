import Image from 'next/image'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai';
import ButtonPrimary from './utils/ButtonPrimary';
import ButtonSecondary from './utils/ButtonSecondary';

const ProjectSection = () => {
    return (

        <div className='w-full bg-[#171C23]  py-5'>
            <div className=' mx-auto w-full items-center flex flex-col content-center md:flex-row  '>


                {/* carousel */}
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper min-w-full"
                >
                    <SwiperSlide>
                        <div className='lg:max-w-6xl  mx-auto '>
                            <div className='pt-5 flex flex-col gap-2'>
                                <h1 className='text-2xl text-white font-light py-5'>Tales Blog Application</h1>
                                {/* <p className='text-2xl text-[#02c272] font-light pb-5'>Tales Blog Application</p> */}
                                <div className='border-l-[14px] border-r-[14px] border-t-[15px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)]  border-black rounded-t-3xl  h-[200px] bg-white'>

                                </div>
                            </div>
                            <div className=' flex h-[400px] '>
                                <div className='px-5 w-6/12 flex flex-col items-center justify-center '>
                                    <div className='text-start w-full text-white'>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam architecto facere, nemo ex ad expedita natus explicabo. Molestiae quis veritatis repellendus a quas error, cum, provident blanditiis odit aliquam itaque!</p>
                                    </div>
                                    <div className='flex gap-2 pt-5 w-full flex-wrap'>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center'>
                                            <img src='/images/skills/css.webp' alt='' />
                                        </div>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center'>
                                            <img src='/images/skills/css.webp' alt='' />
                                        </div>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center'>
                                            <img src='/images/skills/css.webp' alt='' />
                                        </div>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center'>
                                            <img src='/images/skills/css.webp' alt='' />
                                        </div>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center'>
                                            <img src='/images/skills/css.webp' alt='' />
                                        </div>

                                    </div>
                                    <div className='flex gap-4 justify-start w-full'>
                                        <ButtonPrimary >Live
                                            <AiOutlineGlobal className='text-xl' />
                                        </ButtonPrimary>
                                        <ButtonSecondary >Github
                                            <AiOutlineGithub className='text-2xl' />
                                        </ButtonSecondary>
                                    </div>
                                </div>
                                <div className='w-6/12 flex gap-6  items-center justify-center  px-5'>
                                    <div className='w-[320px] border-4 bg-white rounded-lg border-black drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] h-[190px]'>
                                    </div>
                                    <div className='w-[100px] border-4 bg-white  rounded-2xl border-black drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] h-[200px]'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default ProjectSection