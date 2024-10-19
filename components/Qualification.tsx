import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';


interface Info {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

interface Props {
  work: Info[];
  education: Info[];
}

const Qualification = ({ education, work }: Props) => {
  const [isEducation, setIsEducation] = useState<boolean>(false)

  return (
    <div className='py-10 md:py-[100px] w-full' id="qualifications">
      <div className='lg:max-w-6xl mx-auto'>
        <div className='flex flex-col gap-2 items-center pb-10'>
          <h1 className='text-2xl text-[#02c272]'>Qualifications</h1>
          <p className='text-white'>My Personal Journey</p>
        </div>

        <div className='flex gap-5 justify-center'>
          <h1 onClick={() => setIsEducation(true)} className={`text-md cursor-pointer duration-300 all ease-in-out ${isEducation ? 'text-[#02c272] text-lg' : 'text-white'}`}>Education</h1>
          <h1 onClick={() => setIsEducation(false)} className={`text-md cursor-pointer duration-300 all ease-in-out ${!isEducation ? 'text-[#02c272] text-lg' : 'text-white'}`}>Work</h1>
        </div>

        <div className='flex px-10 justify-start md:pl-[180px] lg:pl-0 lg:justify-center gap-5'>
          {/* time line */}

          <div className={`h-[450px] w-[2px] bg-[#02c272] flex flex-col justify-between my-[100px] `}>
            {isEducation && education.map((info: Info, index) => (
              <div key={index}>
                {index % 2 === 0 &&
                  <>
                    {/* dot */}
                    <div className='w-4 h-4 rounded-lg bg-[#02c272] translate-x-[-7px] relative'>
                      <div className='absolute flex gap-5 flex-row-reverse lg:flex-row  justify-end items-center lg:left-[-450px] right-[-220px] md:right-[-450px]  text-white text-start w-[200px] lg:text-end top-[-30px] md:w-[420px]'>
                        <div>
                          <h1 className='text-[#02c272]'>{info.first}</h1>
                          <p>{info.second}</p>
                          <p>{info.third}</p>
                        </div>
                        {info.fifth ? <Image src={info.fifth} alt='' width={100} height={100} className='hidden md:block bg-blue-200 w-[60px] h-[60px] rounded-full object-cover truncate' />
                          :
                          <CircularProgress />
                        }                      </div>
                    </div>
                  </>
                }
                {index % 2 !== 0 &&
                  <>
                    {/* dot */}
                    <div className='w-4 h-4 rounded-lg bg-[#02c272] translate-x-[-7px] relative'>
                      <div className='absolute flex gap-5 items-center justify-start right-[-220px] md:right-[-450px] text-white text-start top-[-30px] w-[200px] md:w-[420px]'>
                        {info.fifth ? <Image src={info.fifth} alt='' width={100} height={100} className='hidden md:block bg-blue-200 w-[60px] h-[60px] rounded-full object-cover truncate' />
                          :
                          <CircularProgress />
                        }                        <div>
                          <h1 className='text-[#02c272]'>{info.first}</h1>
                          <p>{info.second}</p>
                          <p>{info.third}</p>
                        </div>
                      </div>
                    </div>
                  </>
                }
              </div>
            ))}

            {!isEducation && work.map((info: Info, index) => (
              <div key={index}>
                {index % 2 === 0 &&
                  <>
                    {/* dot */}
                    <div className='w-4 h-4 rounded-lg bg-[#02c272] translate-x-[-7px] relative'>
                      <div className='absolute flex gap-5 flex-row-reverse lg:flex-row  justify-end items-center lg:left-[-450px] right-[-220px] md:right-[-450px]  text-white text-start w-[200px] lg:text-end top-[-30px] md:w-[400px]'>
                        <div>
                          <h1 className='text-[#02c272]'>{info.first}</h1>
                          <p>{info.second}</p>
                          <p>{info.third}</p>
                        </div>
                        {info.fifth ? <Image src={info.fifth} alt='' width={100} height={100} className='hidden md:block bg-blue-200 w-[60px] h-[60px] rounded-full object-cover truncate' />
                          :
                          <CircularProgress />
                        }                      </div>
                    </div>
                  </>
                }
                {index % 2 !== 0 &&
                  <>
                    {/* dot */}
                    <div className='w-4 h-4 rounded-lg bg-[#02c272] translate-x-[-7px] relative'>
                      <div className='absolute flex gap-5 items-center justify-start right-[-220px] md:right-[-450px] text-white text-start top-[-30px] w-[200px] md:w-[400px]'>
                        {info.fifth ? <Image src={info.fifth} alt='' width={100} height={100} className='hidden md:block bg-blue-200 w-[60px] h-[60px] rounded-full object-cover truncate' />
                          :
                          <CircularProgress />
                        }

                        <div>
                          <h1 className='text-[#02c272]'>{info.first}</h1>
                          <p>{info.second}</p>
                          <p>{info.third}</p>
                        </div>
                      </div>
                    </div>
                  </>
                }
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification