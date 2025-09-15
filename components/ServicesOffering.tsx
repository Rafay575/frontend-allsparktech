import React from 'react'

import Image, { StaticImageData } from 'next/image'
import { baseURL } from '@/API/baseURL';
import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
                    <span key={i} className="color">
                        {word}{isLastWord ? "" : " "}
                    </span>
                );
            }
            return word + (isLastWord ? "" : " ");
        });
    };

    return (
        <div className='pad container'>
            <div className='text-center h-[100%]'>
                <p className='w-full lg:w-[70%] xl:w-[55%] mx-auto heading font-[800] '>{renderTitle(serviceOffering.title, serviceOffering.letters)}</p>
                <p className='w-full md:w-[70%] xl:w-[52%] mx-auto para mt-[15px]'>{serviceOffering.des}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] h-[100%] mt-[40px]'>
                    {serviceOffering.cards.map((card, i) => (
                        <div key={i} className='bg-[#f3f7fb] border border-[#d4dcff] p-[15px] lg:p-[20px] rounded-[10px]  min-h-[250px] md:min-h-[300px] flex flex-col  items-center sm:items-start text-center sm:text-start' >
                            <Image src={`${baseURL}/images/services/${card.icon}`} alt='icon' width={400}
                                height={20} className='!w-[70px] border border-[#d4dcff] p-[10px] rounded-[5px]' />
                            <p className='subheading font-[700] mt-[20px]'>{card.heading}</p>
                            <p className='my-[10px] para'>{card.des}</p>
                            <Link href={"/contact"} className='mt-auto'>
                                <button className='border border-[#737577] group py-[10px] px-[30px] rounded-[25px] mt-auto flex items-center gap-[5px] hover:bg-[#384BFF] duration-300 hover:text-white border hover:border-[#384BFF] para '>{card.btnText}<MdKeyboardDoubleArrowRight className='text-grey-600 para group-hover:text-white'/></button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
