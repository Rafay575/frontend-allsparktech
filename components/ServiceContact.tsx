import React from 'react'
import Image, { StaticImageData } from 'next/image'
import arrowleft from "@/public/images/leftarrow.png"
import arrowright from "@/public/images/rightarrow.png"
import { baseURL } from '@/API/baseURL';

interface ServiceContact {
    image: string | StaticImageData;
    subTitle: string;
    title: string;
    btnText: string;
}
interface ServiceContactProps {
    serviceContact: ServiceContact;
}
export default function ServiceContact({ serviceContact }: ServiceContactProps) {

    return (
        <div className="container flex  flex-wrap bg-[#384bff] min-h-[680px] pb-[40px] lg:pb-0 my-[50px] lg:my-[80px]"  >
            <div className='w-full lg:w-1/2 relative hidden lg:block '>
                <Image src={`${baseURL}/images/services/${serviceContact.image}`} alt='img' width={400}
                    height={400} className='absolute bottom-0 !w-[80%]  left-[50px] z-[3]' />
            </div>
            <div className='w-full lg:w-1/2 text-white '>
                <div className='w-[90%] mx-auto lg:mx-0 flex flex-col items-center sm:items-start '>
                    <div className='flex items-center gap-[5px] mt-[60px]'>
                        <Image src={arrowleft} className='w-[35px]' alt='icon'></Image>
                        <p className='text-[15px] font-[500] text-center sm:text-start'>{serviceContact.subTitle}</p>
                        <Image src={arrowright} className='w-[35px]' alt='icon'></Image>
                    </div>
                    <p className='text-[25px] lg:text-[30px] xl:text-[35px] font-[700] my-[10px] text-center sm:text-start'>{serviceContact.title}</p>
                    <div className='flex flex-col items-center sm:items-start gap-[10px] mb-[20px]'>
                        <div className='flex gap-[15px] mt-[20px] w-full'>
                            <div className='w-full lg:w-1/2'>
                                <label htmlFor="name" className='text-start'>Your Name*</label>
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
                        <button className='px-[20px] py-[10px] font-[500] bg-white text-black rounded-[25px] '>{serviceContact.btnText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
