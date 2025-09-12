import Image, { StaticImageData } from 'next/image'
import React from 'react'
import arrow from "@/public/images/icons/arrow2.png"
import rightarrow from "@/public/images/rightarrow.png"
import leftarrow from "@/public/images/leftarrow.png"
import contactoverlay from "@/public/images/contactoverlay.png"
import { baseURL } from '@/API/baseURL'
import Link from 'next/link'

interface ServiceBanner {
    image: string | StaticImageData;
    Subtitle: string;
    title: string;
    des: string;
    btnText: string;
}
interface ServiceBannerProps {
    serviceBanner: ServiceBanner;
}
export default function ServicesBanner({ serviceBanner }: ServiceBannerProps) {

    return (
        <div className=' lg:my-[20px] py-[50px] container flex flex-col md:flex-row items-center flex-wrap py-[20px]  px-[30px] lg:px-[40px] rounded-[10px] bg-[#384bff] text-white gap-[30px] relative'>
            <div className='w-full md:w-[22%] relative z-10 flex flex-col  items-center sm:items-start '>
                <Image src={`${baseURL}/images/services/${serviceBanner.image}`} width={200}
                    height={101} alt='img' />
            </div>
            <div className='w-full md:w-[73%]  flex gap-[10px] flex-wrap items-center  relative z-10'>
                <div className='w-full 2xl:w-[74%] flex flex-col  items-center sm:items-start text-center sm:text-start'>
                    <div className="mb-2 flex items-center space-x-4 text-xs font-semibold uppercase tracking-wide text-white">
                        <Image src={leftarrow} alt="img" className=" w-[40px]" />
                        <span>{serviceBanner.Subtitle}</span>
                        <Image src={rightarrow} alt="img" className=" w-[40px]" />
                    </div>
                    <h2 className="text-2xl font-bold !leading-normal sm:text-3xl">
                        {serviceBanner.title}
                    </h2>
                    <p className="mt-4 text-base text-white/80">
                        <span className="mb-5 block">{serviceBanner.des}</span>
                    </p>
                </div>
                <div className='w-full 2xl:w-[24%] flex items-center flex flex-col  items-center sm:items-start text-center sm:text-start'>
                    <Link href={"/contact"}>
                        <button className='bg-white text-black flex items-center gap-[10px] py-[7px] px-[25px] rounded-[25px]'>{serviceBanner.btnText}<Image src={arrow} alt='img' /></button>
                    </Link>
                </div>
            </div>
            <Image src={contactoverlay} alt='contactoverlay' className=' z-[2] absolute right-[30%] bottom-0' />
        </div>
    )
}
