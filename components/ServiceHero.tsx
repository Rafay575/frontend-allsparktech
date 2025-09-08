import Image from 'next/image'
import React from 'react'
import img1 from "@/public/images/serviceshape1.png"
import img2 from "@/public/images/serviceshape2.png"
import sericon from "@/public/images/sericon.png"
import arrow from "@/public/images/arrow.png"
import arrowleft from "@/public/images/leftarrow.png"
import arrowright from "@/public/images/rightarrow.png"
interface HeroData {
    btnText: string;
    btnText2: string;
    btnText3: string;
    title: string;
    description: string;
    formSubtitle: string;
    formTitle: string;
}
interface ServiceHeroProps {
    serviceHero: HeroData;
}
export default function ServiceHero({ serviceHero }: ServiceHeroProps) {
    return (
        <div className='newservice  bg-[#384bff] text-white min-h-[680px] relative '>
            <Image src={img1} className='absolute top-0 lg:bottom-0 left-0' alt="heroimg" />
            <Image src={img2} className='absolute bottom-0 right-0 z-[0]' alt="heroimg" />
            <div className="container flex flex-wrap lg:items-center justify-center  pb-[40px] lg:pb-0" >
                <div className='w-full lg:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-start '>
                    <button className='  text-[14px] lg:text-[18px] flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[27px] font-[500] mt-[50px] lg:mt-0  '><Image src={sericon} className='w-[25px] ' alt='icon' />{serviceHero.btnText}</button>
                    <p className='text-[30px] lg:text-[40px] 2xl:text-[50px] font-[700] mt-[20px] w-full md:w-[70%] lg:w-full'>{serviceHero.title}</p>
                    <p className='w-full md:w-[80%] lg:w-full mt-[10px]'>{serviceHero.description}</p>
                    <button className=' text-[14px] lg:text-[18px] flex items-center gap-[5px] bg-[#F98600] py-[15px] px-[30px] rounded-[27px] font-[500] mt-[30px]'>{serviceHero.btnText2} <Image src={arrow} className='w-[15px] lg:w-[25px]' alt='icon' /></button>
                </div>
                <div className='w-full lg:w-1/2  lg:pl-[80px] flex flex-col items-center sm:items-start'>
                    <div className='flex items-center gap-[5px] mt-[60px]'>
                        <Image src={arrowleft} className='w-[35px]' alt='icon'></Image>
                        <p className='text-[15px] font-[500] text-center sm:text-start'>{serviceHero.formSubtitle}</p>
                        <Image src={arrowright} className='w-[35px]' alt='icon'></Image>
                    </div>
                    <p className='text-[29px] lg:text-[40px] font-[700] my-[10px] text-center sm:text-start'>{serviceHero.formTitle}</p>
                    <div className='w-full flex flex-col items-center sm:items-start gap-[10px] relative z-[20]'>
                        <div className='flex gap-[15px] mt-[20px] w-full relative z-[20]'>
                            <div className='w-full lg:w-1/2'>
                                <label htmlFor="name" className='!text-start'>Your Name*</label>
                                <input type="text" placeholder='Your Name' className='mt-[10px] placeholder-white text-white w-full border bg-transparent py-[10px] px-[8px] ' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <label htmlFor="name"  className='!text-start'>Your Email*</label>
                                <input type="email" placeholder='Your Email' className='mt-[10px] placeholder-white text-white w-full border bg-transparent py-[10px] px-[8px]' />
                            </div>
                        </div>
                        <div className='w-full '>
                            <label htmlFor="name">Your Phone*</label>
                            <input type="number" placeholder='Your Phone' className='mt-[10px] placeholder-white text-white w-full border bg-transparent py-[10px] px-[8px]' />
                        </div>
                        <div className='w-full '>
                            <label htmlFor="name">Your Message*</label>
                            <textarea placeholder='Enter Message' className='mt-[10px] min-h-[150px] placeholder-white text-white w-full border bg-transparent py-[10px] px-[8px]'></textarea>
                        </div>
                        <button className='px-[20px] py-[10px] font-[500] bg-white text-black rounded-[25px] text-center'>{serviceHero.btnText3}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
