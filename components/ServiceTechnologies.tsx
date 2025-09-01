"use client"
import React, { useState } from 'react'
import react from "@/public/images/icons/react.png"
import angular from "@/public/images/icons/angular.png"
import vue from "@/public/images/icons/vue.png"
import js from "@/public/images/icons/js.png"
import bootstrap from "@/public/images/icons/bootstrap.png"
import Image, { StaticImageData } from 'next/image'

interface Technology {
    name: string;
    Icon: StaticImageData;
}

interface Technologies {
    title: string;
    des: string;
    frontend: Technology[];
    backend: Technology[];
    database: Technology[];
    others: Technology[];
}

export default function ServiceTechnologies() {
    const [select, setSelect] = useState<"frontend" | "backend" | "database" | "others">("frontend");

    const serviceTechnologies: Technologies = {
        title: "Advanced Web and Application Development Technologies",
        des: "At AllSpark Technologies, we use modern frameworks, cloud platforms, and secure programming languages to deliver scalable, user-focused,enterprise-ready web and application development solutions.",
        frontend: [
            { name: "react", Icon: react },
            { name: "angular", Icon: angular },
            { name: "vue", Icon: vue },
            { name: "js", Icon: js },
            { name: "bootstrap", Icon: bootstrap },
            { name: "bootstrap", Icon: bootstrap },
        ],
        backend: [
            { name: "vue", Icon: vue },
            { name: "js", Icon: js },
        ],
        database: [
            { name: "js", Icon: js },
            { name: "js", Icon: js },
        ],
        others: [
            { name: "bootstrap", Icon: bootstrap },
            { name: "bootstrap", Icon: bootstrap },
        ],
    };

    return (
        <div className='bg-[#181965] py-[50px] lg:py-[80px] my-[50px] lg:my-[80px]'>
            <div className="container">
                <div className='text-white text-center'>
                    <p className='w-full lg:w-[70%] xl:w-[55%] mx-auto text-[30px] sm:text-[35px] lg:text-[40px] font-[800]'>
                        {serviceTechnologies.title}
                    </p>
                    <p className='w-full md:w-[70%] xl:w-[52%] mx-auto text-[15px] md:text-[18px] mt-[15px]'>
                        {serviceTechnologies.des}

                    </p>

                    {/* Tabs */}
                    <div className='flex mt-[60px] border-b justify-center lg:justify-start gap-[10px]'>
                        <p onClick={() => setSelect("frontend")}
                            className={`cursor-pointer py-[5px]  px-[7px] md:px-[25px] text-[13px] md:text-[15px] rounded-t-xl duration-300 ${select === "frontend" ? "bg-[#384bff]" : ""}`}>
                            FRONTEND
                        </p>
                        <p onClick={() => setSelect("backend")}
                            className={`cursor-pointer py-[5px] px-[7px] md:px-[25px] text-[13px] md:text-[15px] rounded-t-xl duration-300 ${select === "backend" ? "bg-[#384bff]" : ""}`}>
                            BACKEND
                        </p>
                        <p onClick={() => setSelect("database")}
                            className={`cursor-pointer py-[5px] px-[7px] md:px-[25px] text-[13px] md:text-[15px] rounded-t-xl duration-300 ${select === "database" ? "bg-[#384bff]" : ""}`}>
                            DATABASE
                        </p>
                        <p onClick={() => setSelect("others")}
                            className={`cursor-pointer py-[5px] px-[7px] md:px-[25px] text-[13px] md:text-[15px] rounded-t-xl duration-300 ${select === "others" ? "bg-[#384bff]" : ""}`}>
                            OTHER
                        </p>
                    </div>

                    {/* Tab content */}
                    <div className='mt-[30px] grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6 gap-y-[20px]'>
                        {serviceTechnologies[select].map((tec, index) => (
                            <div key={index} className="flex flex-col items-center border py-[10px] pt-[30px] rounded-[5px] relative mt-[20px]">
                                <Image src={tec.Icon} alt={tec.name} className="w-[60px] h-[60px] bg-[#384bff] p-[10px] rounded-full absolute -top-[50%]" />
                                <p className='mt-2 text-[16px] capitalize'>{tec.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
