import Footer2 from '@/components/Footer2'
import Navbar2 from '@/components/Navbar2'
import Topnav from '@/components/Topnav'
import React from 'react'
import demo from "@/public/images/demo2.png"
import demo3 from "@/public/images/demo3.png"
import img3 from "@/public/images/subservice2.png"
import Image from 'next/image'


export default function Hello() {
    const data = [
        {
            title: "Transparent Partnership",
            description:
                "We work closely with you to translate goals into working software, maintaining open lines of communication through every sprint.",
        },
        {
            title: "Iterative Development",
            description:
                "We release working software incrementally, incorporating your feedback along the way to ensure alignment, reduce risk, and respond to shifting goals.",
        },
        {
            title: "Continuous Improvement",
            description:
                "We track, learn, and optimize. Each iteration includes retrospectives and QA insights to improve both product and process.",
        },
        {
            title: "Speed to Market",
            description:
                "Our agile framework accelerates delivery timelines, allowing you to validate solutions faster, seize opportunities sooner, and adapt with confidence.",
        },
    ];
    return (
        <>
            <Topnav />
            <Navbar2 />

            {/* Hero Section  */}
            <section
                className="bg-cover bg-no-repeat h-[70vh]"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${demo.src})`, }}>
                <div className="container flex flex-col justify-center items-center h-full">
                    <p className='text-white text-[30px] lg:text-[40px] font-bold'>Custom Software Development Solutions</p>
                </div>
            </section>

            {/* Title  */}
            <div className="container">
                <div className=" my-[60px]">
                    <p className='text-[30px] lg:text-[40px] w-full lg:w-[65%]'>Tailored technology that suits your unique business needs</p>
                </div>
                <Image src={demo3} className='w-full' alt='img' />
                <div className='my-[60px] w-full lg:w-[65%] text-[#6f798b]'>
                    <p >At DOOR3, we design and build custom software that solves complex challenges, supports growth, and enhances digital experiences. Whether you’re a global enterprise or a growing startup, we bring cross-disciplinary expertise to deliver scalable, secure, and user-centric solutions tailored to your organization.</p>
                    <br />
                    <p>We don’t believe in off-the-shelf thinking. Every custom software engagement begins with understanding your unique needs—from operational requirements to customer expectations—so we can build a product that drives real business value.</p>
                </div>

            </div>

            {/* Section3  */}
            <div className='container flex flex-col lg:flex-row my-[60px]'>
                <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                    <p className='font-bold text-[30px] lg:text-[40px]  lg:leading-[56px]'>Agile by design: Our collaborative approach</p>
                    {data.map((item, index) => (
                        <div key={index} className="  ">
                            <h3 className="font-semibold text-[24px]">{item.title}</h3>
                            <p className="text-[19px] text-[#6f798b]">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className='w-full lg:w-[50%] lg:pl-[20px]'>
                    <Image src={img3} alt='img3' className='w-full mt-[30px] lg:mt-[0px]' />
                </div>
            </div>



            <Footer2 />
        </>
    );
}
