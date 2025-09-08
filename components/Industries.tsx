import React from 'react'
import Image, { StaticImageData } from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import arrow from "@/public/images/arrow.png"
import { baseURL } from '@/API/baseURL';

interface IndustryItem {
    image: string | StaticImageData;
    title: string;
    des: string;
    btnText: string;
}

interface ServiceIndustries {
    title: string;
    letters?: string[];
    industries: IndustryItem[];
}
interface ServiceIndustriesProps {
    serviceIndustries: ServiceIndustries;
}
export default function Industries({ serviceIndustries }: ServiceIndustriesProps) {

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
        <div className='container border my-[50px] lg:my-[80px] py-[50px] lg:py-[80px] px-[30px] bg-[#f3f7fb] rounded-[20px]'>
            <p className='text-[29px] lg:text-[35px] 2xl:text-[40px] font-[700] text-center w-full lg:w-[70%] xl:w-[55%] mx-auto'>
                {renderTitle(serviceIndustries.title, serviceIndustries.letters)}
            </p>

            <Carousel className="w-full max-w-4xl mx-auto mt-[40px]">
                <CarouselContent>
                    {serviceIndustries.industries.map((industry, index) => (
                        <CarouselItem key={index} className="flex flex-wrap justify-center gap-[10px]">
                            <div className='w-full md:w-[49%] '>
                                <div className="w-full h-full">
                                    <Image
                                        src={`${baseURL}/images/services/${industry.image}`}
                                        alt={industry.title}
                                        width={400}
                                        height={400}
                                        className="!w-full !h-full object-cover rounded-[25px]"
                                    />
                                </div>
                            </div>
                            <div className='w-full md:w-[49%] bg-white rounded-[25px] p-[20px] flex flex-col items-center sm:items-start justify-center text-center sm:text-start'>
                                <h3 className="text-[20px] font-[600] mb-2">{industry.title}</h3>
                                <p className="text-[14px] text-gray-600">{industry.des}</p>
                                <button className='bg-[#384BFF] text-white mt-[20px] flex items-center gap-[10px] py-[7px] px-[25px] text-[15px] rounded-[25px]'>{industry.btnText} <Image src={arrow} alt='img' /></button>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=' absolute !left-[-30px] lg:!left-[-60px]' />
                <CarouselNext className=' absolute !right-[-30px] lg:!right-[-60px]' />
            </Carousel>
        </div>
    )
}
