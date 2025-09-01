import React from 'react'
import Image from 'next/image'
import industry1 from "@/public/images/industry1.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import arrow from "@/public/images/arrow.png"
import { StaticImageData } from "next/image";

interface IndustryItem {
    image: StaticImageData;
    title: string;
    des: string;
    btnText: string;
}

interface ServiceIndustries {
    title: string;
    letters?: string[];
    industries: IndustryItem[];
}
export default function Industries() {
    const serviceIndustries: ServiceIndustries = {
        title: "Industries We Serve",
        letters: ["Serve"],
        industries: [
            {
                image: industry1,
                title: "Healthcare Software Development",
                des: "We build secure, compliant, and scalable healthcare applications integrating medical systems, improving patient management, analytics, and overall outcomes.",
                btnText: "Explore More"
            },
            {
                image: industry1,
                title: "E-commerce Solutions",
                des: "Robust e-commerce platforms with payment integration, scalable infrastructure, and personalized shopping experiences for customers.",
                btnText: "Explore More"
            },
            {
                image: industry1,
                title: "Fintech Applications",
                des: "Secure fintech apps with fraud detection, digital wallets, and real-time transaction analytics for the finance industry.",
                btnText: "Explore More"
            }
        ]
    }
    const renderTitle = (title: string, highlights: string[] = []) => {
        return title.split(" ").map((word, i) => {
            const cleanWord = word.replace(/[^a-zA-Z]/g, "");
            if (highlights.includes(cleanWord)) {
                return (
                    <span key={i} className="text-[#384bff]">
                        {word}{" "}
                    </span>
                );
            }
            return word + " ";
        });
    };


    return (
        <div className='container border my-[50px] lg:my-[80px] py-[50px] lg:py-[80px] px-[30px] bg-[#f3f7fb] rounded-[20px]'>
            <p className='text-[35px] lg:text-[40px] font-[700] text-center'>
                {renderTitle(serviceIndustries.title, serviceIndustries.letters)}
            </p>

            <Carousel className="w-full max-w-4xl mx-auto mt-[40px]">
                <CarouselContent>
                    {serviceIndustries.industries.map((industry, index) => (
                        <CarouselItem key={index} className="flex flex-wrap justify-center gap-[10px]">
                            <div className='w-full md:w-[49%] '>
                                <div className="w-full h-full">
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        className="w-full h-full object-cover rounded-[25px]"
                                    />
                                </div>
                            </div>
                            <div className='w-full md:w-[49%] bg-white rounded-[25px] p-[20px] flex flex-col items-start justify-center'>
                                <h3 className="text-[20px] font-[600] mb-2">{industry.title}</h3>
                                <p className="text-[14px] text-gray-600">{industry.des}</p>
                                <button className='bg-[#384BFF] text-white mt-[20px] flex items-center gap-[10px] py-[7px] px-[25px] text-[15px] rounded-[25px]'>{industry.btnText} <Image src={arrow} alt='img' /></button>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
