import Image from 'next/image'
import React from 'react'
import shape3 from "@/public/images/shape3.png"
import shape4 from "@/public/images/shape4.png"
import shape5 from "@/public/images/servicebg2.png"
import { baseURL } from '@/API/baseURL';
import { StaticImageData } from 'next/image';

interface ServiceCardItem {
  icon: string | StaticImageData;
  number: number | string;
  text: string;
  symbol?: string;
}

interface ServiceCardData {
  title: string;
  cards: ServiceCardItem[];
}
interface ServiceCardProps {
  serviceCard: ServiceCardData;
}
export default function ServiceCard({serviceCard}:ServiceCardProps) {
    
    return (
        <div>
            <div className="container flex flex-wrap bg-[#f4f7fb] my-[50px] relative overflow-hidden">
                <div className='w-full lg:w-[45%]  relative p-[20px]  text-white  font-[700] flex items-center justify-center text-center text-center'>
                    <Image src={shape4} alt='img' className='absolute w-[100%] h-[100%] lg:w-[1300px] left-0 top-0 z-[10] hidden  ' />
                    <Image src={shape5} alt='img' className='absolute w-[100%] h-[100%] lg:w-[100%] left-0 top-0 z-[10] block ' />
                    <p className='relative z-[50] text-center text-[25px] lg:text-[25px] xl:text-[27px] 2xl:text-[30px] w-full md:w-[70%] lg:w-full' dangerouslySetInnerHTML={{ __html: serviceCard.title }} ></p>
                </div>
                <div className='w-full py-[20px] overflow-hidden lg:w-[55%] flex items-start md:items-center justify-center lg:justify-start '>
                    <div className='grid grid-cols-2 gap-y-[40px]  mt-[10px] md:mt-[20px] w-[89%] mx-auto '>
                        {serviceCard.cards.map((card, index) => (
                            <div key={index} className='flex items-center justify-center gap-[10px] '>
                                <Image src={`${baseURL}/images/services/${card.icon}`} alt='img' width={600} height={400} className='bg-white p-[10px] !w-[60px] md:!w-[70px] rounded-[10px]' />
                                <div>
                                    <p className='text-[20px] md:text-[25px] xl:text-[30px] text-[#384bff] font-[700]'>{`${card.number}${card.symbol}`}</p>
                                    <p className='text-[10px] md:text-[12px] w-[120px]  relative z-20'>{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image src={shape3} alt='img' className='absolute right-0 bottom-0 z-10 hidden ' />
                </div>
            </div>
        </div>
    )
}
