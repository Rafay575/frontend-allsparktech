import { baseURL } from '@/API/baseURL';
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import bg1 from "@/public/images/homeprocessbg1.png"
import bg2 from "@/public/images/homeprocessbg2.png"
import clipVideo from "@/public/images/clipVideo.png"
import clipcircle from "@/public/images/clipcircle.png"
import Link from 'next/link';
import { motion } from "framer-motion";



interface homeProcessData {
    title: string;
    des: string;
    image: string | StaticImageData;
    link: string;
    process: {
        heading: string;
        des: string;
        image: string | StaticImageData;
        dir?: string | StaticImageData;
    }[];
}

interface homeProcessProps {
    homeProcess: homeProcessData;
}

export default function HomeProcess({ homeProcess }: homeProcessProps) {
    // const homeProcess: homeProcessData = {
    //     "title": "Development Process",
    //     "des": "We follow a structured, transparent, and efficient software development process that ensures custom software solutions are delivered with quality, speed, and scalability.",
    //     "image": "clipVideo.png",
    //     "link": "/contact",
    //     "process": [
    //         {
    //             "image": "homeprocess1.png",
    //             "heading": "Planning & Strategy",
    //             "des": "We start by understanding business requirements, defining objectives, and creating a roadmap.",
    //             "dir": "dir1.png"
    //         },
    //         {
    //             "image": "homeprocess2.png",
    //             "heading": "Design & Development",
    //             "des": "Our team designs intuitive UI/UX and builds scalable software using full-stack  software development practices.",
    //             "dir": "dir2.png"
    //         },
    //         {
    //             "image": "homeprocess3.png",
    //             "heading": "Testing & Quality Assurance",
    //             "des": "We perform comprehensive QA including functionality, performance, security, and user testing.",
    //             "dir": "dir3.png"
    //         },
    //         {
    //             "image": "homeprocess4.png",
    //             "heading": "Optimization & Support",
    //             "des": "After deployment, we provide ongoing monitoring, updates, and feature enhancements."
    //         }
    //     ]
    // }

    // console.log("homeProcess :" ,homeProcess)
    return (
        <>
            <div className='pad bg-[#181965]  text-white relative z-[10]' >
                <div className='container homeProcess  text-center pb-[130px] sm:pb-[180px] md:pb-[230px] xl:!pb-[300px]'>
                    <p className='w-full lg:w-[70%] xl:w-[50%] mx-auto heading font-[800] '>{homeProcess.title}</p>
                    <p className='w-full md:w-[70%] xl:w-[52%] mx-auto para mt-[15px]'>{homeProcess.des}</p>
                    <div className="flex flex-wrap mt-[50px] gap-y-[50px]">
                        {homeProcess.process.map((process, index) => (
                            <div key={index} className='flex flex-col items-center  w-[50%] lg:w-[25%] px-[15px] lg:px-[30px] relative'>
                                <Image src={`${baseURL}/images/home/${process.image}`} alt='img1' width={150}
                                    height={10} className='w-[130px]' />
                                {process.dir &&
                                    <Image src={`${baseURL}/images/home/${process.dir}`} width={400} height={400} alt='img1' className='absolute w-[60px] hidden lg:block xl:w-[80px] -right-[10%] top-[12%]' />
                                }
                                <p className='subheading font-[600] mt-[20px] lg:mt-[30px] w-[80%] md:w-[70%] '>{process.heading}</p>
                                <p className='para mt-[5px] lg:mt-[20px]'>{process.des}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Image src={bg1} alt='bg' width={200} height={200} className='w-[40%] absolute bottom-0 right-0' />
                <Image src={bg2} alt='bg' width={200} height={200} className='w-[15%] absolute bottom-0 left-0 hidden lg:block' />
            </div>
            <div
                className='container mt-[-18%] relative z-[20]  '
            >
                <Link href={homeProcess.link} className='container w-full ' >
                    <Image src={`${baseURL}/images/home/${homeProcess.image}`} alt='bg' width={4000} height={4000} className='w-full ' />
                </Link>

                <div
                    className='w-full h-full absolute top-0 left-0  flex justify-center items-center'>
                    <motion.div className='w-[8%] mt-[0.7%]' initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}    >

                        <Image src={clipcircle} alt='bg' width={4000} height={4000} className='w-full' />
                    </motion.div>
                </div>


            </div>


        </>
    )
}