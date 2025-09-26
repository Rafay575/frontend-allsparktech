"use client"
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { baseURL } from '@/API/baseURL';
import globe from "@/public/globe.png"

interface Technology {
    name: string;
    Icon: string | StaticImageData;
}

interface TechnologyCategory {
    name: string;
    techs: Technology[];
}

interface Technologies {
    title: string;
    des: string;
    technologies: TechnologyCategory[];
}

interface ServiceTechnologiesProps {
    serviceTechnologies?: Technologies;
}

export default function ServiceTechnologies({ serviceTechnologies }: ServiceTechnologiesProps) {
    const [select, setSelect] = useState<string>(serviceTechnologies?.technologies[0]?.name || "Frontend");

    return (
        <div className='bg-[#181965] pad relative '>
            <Image src={globe} alt='globe' width={200} height={200} className='absolute right-0 h-auto object-cover w-auto'/>
            <div className="container pad">
                <div className='text-white text-center'>
                    <p className='w-full lg:w-[70%] xl:w-[55%] mx-auto heading font-[800]'>
                        {serviceTechnologies?.title}
                    </p>
                    <p className='w-full md:w-[70%] xl:w-[52%] mx-auto para mt-[15px]'>
                        {serviceTechnologies?.des}
                    </p>

                    {/* Tabs */}
                    <div className='flex mt-[60px] border-b justify-center lg:justify-start  gap-[10px] '>
                        {serviceTechnologies?.technologies.map((category) => (
                            <p
                                key={category.name}
                                onClick={() => setSelect(category.name)}
                                className={`cursor-pointer py-[5px] px-[7px] flex items-center md:px-[25px] text-[8px] md:text-[15px] rounded-t-xl duration-300 ${select === category.name ? "bg-[#384bff]" : ""}`}
                            >
                                {category.name.toUpperCase()}
                            </p>
                        ))}
                    </div>

                    {/* Tab content */}
                    <div className='mt-[30px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 gap-y-[20px]'>
                        {serviceTechnologies?.technologies
                            .find((category) => category.name === select)
                            ?.techs.map((tec, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center border py-[10px] pt-[30px] rounded-[5px] relative mt-[20px]"
                                >   
                                <div className='w-[60px] h-[60px] bg-[#384bff]  rounded-full translate-y-[-100%] absolute flex items-center justify-center p-[5px]'>
                                     <Image
                                        src={`${baseURL}/images/services/${tec.Icon}`}
                                        alt={tec.name}
                                        width={200}
                                        height={200}
                                        className="!w-[80%] h-[80%] object-contain  "
                                    />
                                </div>
                                   
                                    <p className='mt-2 para capitalize px-[5px]'>{tec.name}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}