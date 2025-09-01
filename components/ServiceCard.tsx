import Image, { StaticImageData } from 'next/image'
import React from 'react'
import shape3 from "@/public/images/shape3.png"
import shape4 from "@/public/images/shape4.png"
import icon1 from "@/public/images/serviceicon1.png"
import icon2 from "@/public/images/serviceicon2.png"
import icon3 from "@/public/images/serviceicon3.png"
import icon4 from "@/public/images/serviceicon4.png"

interface ServiceCardItem {
  icon: StaticImageData;
  number: number;
  text: string;
  symbol: string;
}

interface ServiceCardData {
  title: string;
  cards: ServiceCardItem[];
}
export default function ServiceCard() {
    const serviceCard:ServiceCardData={
        title:"10 Years of Experience <br> Delivering Innovative <br> Custom Software <br> Solutions",
        cards : [
        {
            icon: icon1,
            number: 100,
            text: "Developed Custom Solutions",
            symbol: "+"
        },
        {
            icon: icon2,
            number: 3,
            text: "Years Client Engagement",
            symbol: "+"
        },
        {
            icon: icon3,
            number: 70,
            text: "Senior Engineer",
            symbol: "%"
        },
        {
            icon: icon4,
            number: 98,
            text: "Satisfaction Rate",
            symbol: "%"
        }
    ]
    }
    // const cards = [
    //     {
    //         icon: icon1,
    //         number: 100,
    //         text: "Developed Custom Solutions",
    //         symbol: "+"
    //     },
    //     {
    //         icon: icon2,
    //         number: 3,
    //         text: "Years Client Engagement",
    //         symbol: "+"
    //     },
    //     {
    //         icon: icon3,
    //         number: 70,
    //         text: "Senior Engineer",
    //         symbol: "%"
    //     },
    //     {
    //         icon: icon4,
    //         number: 98,
    //         text: "Satisfaction Rate",
    //         symbol: "%"
    //     }
    // ]
    return (
        <div>
            <div className="container flex flex-wrap bg-[#f4f7fb] my-[50px] relative overflow-hidden">
                <div className='w-full lg:w-[45%]  relative h-[450px] lg:h-[320px] xl:h-[373px] pt-[30px] xl:pt-[40px] pl-[30px] xl:pl-[30px] text-[22px] sm:text-[35px] md:text-[45px] lg:text-[25px] xl:text-[35px] 2xl:text-[40px] text-white  font-[700] '>
                    <Image src={shape4} alt='img' className='absolute w-[90%] h-[100%] lg:w-[600px] left-0 top-0 z-[10]' />
                    <p className='relative z-[50] ' dangerouslySetInnerHTML={{ __html: serviceCard.title }} ></p>
                </div>
                <div className='w-full py-[20px] overflow-hidden lg:w-[55%] flex items-start md:items-center justify-center '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[40px] pr-[70px] mt-[10px] md:mt-[20px] w-[90%]'>
                        {serviceCard.cards.map((card, index) => (
                            <div key={index} className='flex items-center gap-[10px] '>
                                <Image src={card.icon} alt='img' className='bg-white p-[10px] w-[60px] md:w-[80px] rounded-[10px]' />
                                <div>
                                    <p className='text-[25px] md:text-[35px] text-[#384bff] font-[700]'>{`${card.number}${card.symbol}`}</p>
                                    <p className='text-[10px] md:text-[12px] w-[120px]'>{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image src={shape3} alt='img' className='absolute right-0 bottom-0' />
                </div>
            </div>
        </div>
    )
}
