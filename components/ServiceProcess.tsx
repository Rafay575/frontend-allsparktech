import Image, { StaticImageData } from 'next/image'
import React from 'react'
import process1 from "@/public/images/process1.png"
import process2 from "@/public/images/process2.png"
import process3 from "@/public/images/process3.png"
import process4 from "@/public/images/process4.png"
import dir1 from "@/public/images/dir1.png"
import dir2 from "@/public/images/dir2.png"
import dir3 from "@/public/images/dir3.png"

interface ProcessStep {
    image: StaticImageData;
    heading: string;
    des: string;
    dir?: StaticImageData;
}

interface ServiceProgress {
    title: string;
    des: string;
    letters?: [string];
    process: ProcessStep[];
}


export default function ServiceProcess() {
    const serviceProgress: ServiceProgress = {
        title: "Our Proven Custom Software Development Process",
        letters: ["Software"],
        des: "We follow a structured, transparent, and efficient software development process that ensures custom software solutions are delivered with quality, speed, and scalability.",
        process: [
            {
                image: process1,
                heading: "Requirement Study",
                des: "We define goals, features,and functions for custom software development.",
                dir: dir1

            },
            {
                image: process2,
                heading: "UI/UX Design",
                des: "Our software design company creates user-friendly, efficient interfaces.",
                dir: dir2
            },
            {
                image: process3,
                heading: "Development Stage",
                des: "Custom Software Developers build secure, scalable solutions.",
                dir: dir3
            },
            {
                image: process4,
                heading: "Testing & Launch",
                des: "We ensure flawless delivery with quality software development services."
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
        <div className='container serviceprocess  text-center py-[50px] lg:my-[70px]'>
            <p className='w-full lg:w-[70%] xl:w-[55%] mx-auto text-[30px] sm:text-[35px] lg:text-[40px] font-[800] '>{renderTitle(serviceProgress.title, serviceProgress.letters)}</p>
            <p className='w-full md:w-[70%] xl:w-[52%] mx-auto text-[15px] md:text-[18px] mt-[15px]'>{serviceProgress.des}</p>
            <div className="flex flex-wrap mt-[50px] gap-y-[50px]">
                {serviceProgress.process.map((process, index) => (
                    <div key={index} className='flex flex-col items-center  w-[50%] lg:w-[25%] px-[15px] lg:px-[30px] relative'>
                        <Image src={process.image} alt='img1' />
                        {process.dir &&
                            <Image src={process.dir} alt='img1' className='absolute w-[60px] hidden lg:block xl:w-[80px] -right-[10%] top-[12%]' />
                        }
                        <p className='text-[17px] lg:text-[21px] font-[600] mt-[20px] lg:mt-[30px] w-[80%] md:w-[70%] '>{process.heading}</p>
                        <p className='text-[15px] md:text-[17px] mt-[5px] lg:mt-[20px]'>{process.des}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
