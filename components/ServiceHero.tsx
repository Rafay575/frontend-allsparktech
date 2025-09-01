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

export default function ServiceHero() {
    const servicehero:HeroData = {
        btnText: "Enterprise Software Solutions",
        btnText2: "GET STARTED",
        btnText3: "Get In Touch",
        title: "Enterprise Software Development Solution",
        description: "Smart interprise software development services in the USA to streamline workflows, enhance security, and drive growth.",
        formSubtitle:"TALK TO US",
        formTitle:"Book a Free Consultation",

    }
    return (
        <div className='newservice  bg-[#384bff] text-white min-h-[680px] relative '>
            <Image src={img1} className='absolute top-0 lg:bottom-0 left-0' alt="heroimg" />
            <Image src={img2} className='absolute bottom-0 right-0' alt="heroimg" />
            <div className="container flex flex-wrap  pb-[40px] lg:pb-0" >
                <div className='w-full lg:w-1/2 '>
                    <button className='  text-[14px] lg:text-[18px] flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[27px] font-[500] mt-[50px] lg:mt-[140px]'><Image src={sericon} className='w-[25px] ' alt='icon' />{servicehero.btnText}</button>
                    <p className='text-[30px] lg:text-[40px] 2xl:text-[55px] font-[700] mt-[20px] w-full md:w-[70%] lg:w-full'>{servicehero.title}</p>
                    <p className='w-full md:w-[80%] lg:w-full mt-[10px]'>{servicehero.description}</p>
                    <button className=' text-[14px] lg:text-[18px] flex items-center gap-[5px] bg-[#F98600] py-[15px] px-[30px] rounded-[27px] font-[500] mt-[30px]'>{servicehero.btnText2} <Image src={arrow} className='w-[15px] lg:w-[25px]' alt='icon' /></button>
                </div>
                <div className='w-full lg:w-1/2  lg:pl-[80px]'>
                    <div className='flex items-center gap-[5px] mt-[60px]'>
                        <Image src={arrowleft} className='w-[35px]' alt='icon'></Image>
                        <p className='text-[15px] font-[500]'>{servicehero.formSubtitle}</p>
                        <Image src={arrowright} className='w-[35px]' alt='icon'></Image>
                    </div>
                    <p className='text-[29px] lg:text-[40px] font-[700] my-[10px]'>{servicehero.formTitle}</p>
                    <div className='flex flex-col items-start gap-[10px]'>
                        <div className='flex gap-[15px] mt-[20px] w-full'>
                            <div className='w-full lg:w-1/2'>
                                <label htmlFor="name">Your Name*</label>
                                <input type="text" placeholder='Your Name' className='mt-[10px] placeholder-white text-white w-full border bg-transparent py-[10px] px-[8px]' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <label htmlFor="name">Your Email*</label>
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
                        <button className='px-[20px] py-[10px] font-[500] bg-white text-black rounded-[25px]'>Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
