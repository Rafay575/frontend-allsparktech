import React from 'react'
import csdicon1 from "@/public/images/icons/csdicon1.png"
import csdicon2 from "@/public/images/icons/csdicon2.png"
import csdicon3 from "@/public/images/icons/csdicon3.png"
import csdicon4 from "@/public/images/icons/csdicon4.png"
import csdicon5 from "@/public/images/icons/csdicon5.png"
import csdicon6 from "@/public/images/icons/csdicon6.png"
import arrow from "@/public/images/icons/arrow.png"
import Image,{StaticImageData} from 'next/image'

interface Card {
  icon: StaticImageData; 
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
export default function servicesOffering() {
    const serviceOffering:ServiceOffering = {
        title: "Explore Our Core Software Development Offerings ",
        letters: ["Software", "Development"],
        des: "We offer custom software development service in USA, delivering secure, scalable, and innovative solutions tailored to meet unique business requirements.",
        cards: [
            {
                icon: csdicon1,
                heading: "Enterprise Software Development Service",
                des: "Enterprise software services in USA designed to improve operations, security, and scalability for businesses.",
                btnText: "Read more"
            },
            {
                icon: csdicon2,
                heading: "Bespoke Application Development Services",
                des: "Custom application development tailored to unique workflows, boosting efficiency and business growth.",
                btnText: "Read more"

            },
            {
                icon: csdicon3,
                heading: "Digital Product Development Services",
                des: "We design, build, and launch innovative digital products with seamless user experiences.",
                btnText: "Read more"
            },
            {
                icon: csdicon4,
                heading: "System Integration Services",
                des: "Integrating applications, platforms, and cloud solutions into one secure, streamlined ecosystem.",
                btnText: "Read more"
            },
            {
                icon: csdicon5,
                heading: "API Development Services in USA",
                des: "API development in USA ensures seamless communication, secure integration, and efficient data sharing.",
                btnText: "Read more"
            },
            {
                icon: csdicon6,
                heading: "Future-Ready Software Solutions (AI, Cloud, IoT)",
                des: "We create future-ready software using AI, cloud, and IoT for competitive advantage.",
                btnText: "Read more"
            },
        ]
    }
    // ✅ fixed highlight function
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
        <div className='pb-[50px] lg:pb-[80px] container'>
            <div className='text-center h-[100%]'>
                <p className='w-full lg:w-[70%] xl:w-[55%] mx-auto text-[30px] sm:text-[35px] lg:text-[40px] font-[800] '>{renderTitle(serviceOffering.title, serviceOffering.letters)}</p>
                <p className='w-full md:w-[70%] xl:w-[52%] mx-auto text-[15px] md:text-[18px] mt-[15px]'>{serviceOffering.des}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] h-[100%] mt-[40px]'>
                    {serviceOffering.cards.map((card, i) => (
                        <div key={i} className='bg-[#f3f7fb] border border-[#d4dcff] p-[15px] lg:p-[20px] rounded-[10px] text-start min-h-[250px] md:min-h-[350px] flex flex-col items-start' >
                            <Image src={card.icon} alt='icon' className='w-[70px] border border-[#d4dcff] p-[10px] rounded-[5px]' />
                            <p className='text-[27px] font-[700] mt-[20px]'>{card.heading}</p>
                            <p className='my-[10px]'>{card.des}</p>
                            <button className='border py-[10px] px-[30px] rounded-[25px] mt-auto flex items-center gap-[10px] hover:scale-[1.04] duration-300'>{card.btnText}<Image src={arrow} alt='icon' /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
