import React from 'react'
import { StaticImageData } from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,

} from "@/components/ui/carousel"
// import { baseURL } from '@/API/baseURL';
import Link from 'next/link';

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
                    <span key={i} className="color">
                        {word}{isLastWord ? "" : " "}
                    </span>
                );
            }
            return word + (isLastWord ? "" : " ");
        });
    };


    return (
        <div className='container  mar pad   rounded-[20px]'>
            <p className='heading font-[700] text-center w-full lg:w-[70%] xl:w-[55%] mx-auto'>
                {renderTitle(serviceIndustries.title, serviceIndustries.letters)}
            </p>
            <div className='px-[40px] lg:px-0'>
                <Carousel className=" mx-auto mt-[40px] w-full  " >
                    <CarouselContent>
                        {serviceIndustries.industries.map((industry, index) => (
                            <CarouselItem key={index} className=" sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex py-[20px] ">
                                    <div className='w-full h-[100%] bg-white rounded-[15px] p-[25px] py-[20px] md:py-[30px] flex flex-col items-start text-start border-2 border-[#384BFF] cards'>
                                        <h3 className="subheading font-[900] mb-2 text-start  ">{industry.title}</h3>
                                        <p className="para text-gray-600 ">{industry.des}</p>
                                        <Link href={"/contact"} className='mt-auto w-full'>
                                            <button className='bg text-white mt-[20px] flex justify-center items-center gap-[10px] py-[5px] w-full  para rounded-[5px] hover:text-[#384BFF] border border-[#384BFF] hover:bg-transparent'>{industry.btnText}</button>
                                        </Link>
                                    </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='absolute left-0 translate-x-[-135%]' />
                    <CarouselNext className=' absolute right-0 translate-x-[135%]' />
                </Carousel>
            </div>
        </div>
    )
}

// type CarouselApi,


// const [api, setApi] = React.useState<CarouselApi>()
// const [current, setCurrent] = React.useState(0)
// const [count, setCount] = React.useState(0)
// React.useEffect(() => {
//     if (!api) {
//         return
//     }
//     setCount(api.scrollSnapList().length)
//     setCurrent(api.selectedScrollSnap() + 1)
//     api.on("select", () => {
//         setCurrent(api.selectedScrollSnap() + 1)
//     })
// }, [api])


{/* <Carousel className=" mx-auto mt-[40px] w-full px-[40px]" setApi={setApi}></Carousel> */ }

{/* <div className="text-muted-foreground py-2 text-center text-sm">
                    Slide {current} of {count}
                </div> */}