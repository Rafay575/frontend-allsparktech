import React from 'react'

import arrow from "@/public/images/icons/arrow.png"
import Image, { StaticImageData } from 'next/image'
import { baseURL } from '@/API/baseURL';

interface Card {
    icon: string | StaticImageData;
    heading: string;
    des: string;
    btnText: string;
}

interface ServiceOffering {
    title: string;
    letters?: string[];
    des: string;
    cards: Card[];
}
interface ServiceOfferingProps {
    serviceOffering: ServiceOffering;
}

export default function servicesOffering({ serviceOffering }: ServiceOfferingProps) {

    // ✅ fixed highlight function
    const renderTitle = (title: string, highlights: string[] = []) => {
        return title.split(" ").map((word, i, words) => {
            const cleanWord = word.replace(/[^a-zA-Z]/g, "");
            const isLastWord = i === words.length - 1;
            if (highlights.some(highlight => highlight.trim() === cleanWord)) {
                return (
                    <span key={i} className="text-[#384bff]">
                        {word}{isLastWord ? "" : " "}
                    </span>
                );
            }
            return word + (isLastWord ? "" : " ");
        });
    };

    return (
        <div className='pb-[50px] lg:pb-[80px] container'>
            <div className='text-center h-[100%]'>
                <p className='w-full lg:w-[70%] xl:w-[55%] mx-auto text-[29px] lg:text-[35px] 2xl:text-[40px] font-[800] '>{renderTitle(serviceOffering.title, serviceOffering.letters)}</p>
                <p className='w-full md:w-[70%] xl:w-[52%] mx-auto text-[15px] md:text-[18px] mt-[15px]'>{serviceOffering.des}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] h-[100%] mt-[40px]'>
                    {serviceOffering.cards.map((card, i) => (
                        <div key={i} className='bg-[#f3f7fb] border border-[#d4dcff] p-[15px] lg:p-[20px] rounded-[10px]  min-h-[250px] md:min-h-[350px] flex flex-col  items-center sm:items-start text-center sm:text-start' >
                            <Image src={`${baseURL}/images/services/${card.icon}`} alt='icon' width={400}
                                height={20} className='!w-[70px] border border-[#d4dcff] p-[10px] rounded-[5px]' />
                            <p className='text-[23px] md:text-[27px] font-[700] mt-[20px]'>{card.heading}</p>
                            <p className='my-[10px] text-[15px] md:text-[18px]'>{card.des}</p>
                            <button className='border border-[#737577] py-[10px] px-[30px] rounded-[25px] mt-auto flex items-center gap-[10px] hover:scale-[1.04] duration-300'>{card.btnText}<Image src={arrow} alt='icon' /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
