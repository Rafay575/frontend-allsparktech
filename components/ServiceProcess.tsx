import { baseURL } from '@/API/baseURL';
import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface ProcessStep {
  image: string | StaticImageData;
  heading: string;
  des: string;
  dir?: string | StaticImageData;
}

interface ServiceProcessData {
  title: string;
  des: string;
  letters?: string[];
  process: ProcessStep[];
}

interface ServiceProcessProps {
  serviceProcess: ServiceProcessData;
}

export default function ServiceProcess({ serviceProcess }: ServiceProcessProps) {
    
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
        <div className='container serviceprocess  text-center pad'>
            <p className='w-full lg:w-[70%] xl:w-[50%] mx-auto heading font-[800] '>{renderTitle(serviceProcess.title, serviceProcess.letters)}</p>
            <p className='w-full md:w-[70%] xl:w-[52%] mx-auto para mt-[15px]'>{serviceProcess.des}</p>
            <div className="flex flex-wrap mt-[50px] gap-y-[50px]">
                {serviceProcess.process.map((process, index) => (
                    <div key={index} className='flex flex-col items-center  w-[50%] lg:w-[25%] px-[15px] lg:px-[30px] relative'>
                        <Image src={`${baseURL}/images/services/${process.image}`} alt='img1' width={150}
              height={10} />
                        {process.dir &&
                            <Image src={`${baseURL}/images/services/${process.dir}`} width={400} height={400} alt='img1' className='absolute w-[60px] hidden lg:block xl:w-[80px] -right-[10%] top-[12%]' />
                        }
                        <p className='subheading font-[600] mt-[20px] lg:mt-[30px] w-[80%] md:w-[70%] '>{process.heading}</p>
                        <p className='para mt-[5px] lg:mt-[20px]'>{process.des}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
