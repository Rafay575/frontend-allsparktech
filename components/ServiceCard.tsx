import Image from 'next/image'
import React from 'react'
import shape3 from "@/public/images/shape3.png"
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
export default function ServiceCard({ serviceCard }: ServiceCardProps) {

    return (
        <div className='pad'>
            <div className="container flex flex-wrap bg-[#f4f7fb] mar relative overflow-hidden rounded-[10px] border-2 bcolor">
                <div className='w-full lg:w-[50%]  relative p-[20px]  text-white  font-[700] flex items-center justify-center text-center text-center bg '>
                    {/* <Image src={shape4} alt='img' className='absolute w-[100%] h-[100%] lg:w-[1300px] left-0 top-0 z-[10] hidden  ' /> */}
                    {/* <Image src={shape5} alt='img' w className='absolute w-[100%] h-[100%] lg:w-[100%] left-0 top-0 z-[10] block ' /> */}
                    <p className='relative z-[50] text-center heading w-full md:w-[70%] lg:w-full' dangerouslySetInnerHTML={{ __html: serviceCard.title }} ></p>
                </div>
                <div className='w-full py-[20px] overflow-hidden lg:w-[50%] flex items-start md:items-center justify-center lg:justify-start '>
                    <div className="grid grid-cols-2 gap-6 md:gap-10 p-[10px] md:p-[15px] xl:p-[30px] w-[95%] mx-auto">
                        {serviceCard.cards.map((card, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center items-start justify-center sm:justify-start gap-3"
                            >
                                {/* Icon */}
                                <Image
                                    src={`${baseURL}/images/services/${card.icon}`}
                                    alt="icon"
                                    width={60}
                                    height={60}
                                    className="bg-white p-3 w-[50px] md:w-[70px] rounded-xl shadow-sm"
                                />

                                {/* Text */}
                                <div className="text-center sm:text-left">
                                    <p className="heading color font-bold">
                                        {`${card.number}${card.symbol}`}
                                    </p>
                                    <p className="para text-gray-600 leading-snug">
                                        {card.text}
                                    </p>
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
