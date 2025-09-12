"use client";
import Image, { StaticImageData } from "next/image";

import dot from "@/public/images/dot.png"
import { baseURL } from "@/API/baseURL";

interface ServiceClient {
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
  image4: string | StaticImageData;
  imageText: string;
  title: string;
  letters?: string[];
  des1: string;
  des2: string;
  lis: string[];
}
interface ServiceClientProps {
  serviceClient: ServiceClient;
}

export default function ServiceClient({serviceClient}:ServiceClientProps) {
    

    const renderTitle = (title: string, highlights: string[] = []) => {
    return title.split(" ").map((word, i, words) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, "");
        const isLastWord = i === words.length - 1;
        if (highlights.some(highlight => highlight.trim() === cleanWord)) {
            return (
                <span key={i} className="text-[#384bff]">
                    {word}{isLastWord ? "" : " "}
                </span>
            );
        }
        return word + (isLastWord ? "" : " ");
    });
};
    return (
        <div className="container py-[30px] lg:py-[50px]  flex flex-wrap items-center justify-between  relative z-[20]">
            {/*Left Text Column */}
            
            <div className="relative w-full sm:w-[80%] lg:w-[45%] mx-auto ml-0 lg:mx-0  md:pl-[0px] p-[10px] ">
                {/* Main Image */}
                <div className="relative  rounded-3xl w-[95%] md:w-[90%] h-auto">
                    <Image
                        src={`${baseURL}/images/services/${serviceClient.image1}`}
                        alt="img"
                        width={400}
                        height={400}
                        className="rounded-3xl !w-full !h-auto"
                        unoptimized
                    />
                </div>

                {/* Overlapping Image */}
                <div className="absolute bottom-[-30px]  right-[0px] lg:right-[-30px] sm:bottom-0 sm:right-0 w-[150px] h-[150px md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px]">
                    <Image
                        src={`${baseURL}/images/services/${serviceClient.image2}`}
                        alt="img"
                        className="object-contain "
                        width={400}
                        height={400}

                    />
                </div>

                {/* Floating Shape */}
                <Image
                    src={`${baseURL}/images/services/${serviceClient.image3}`}
                    alt="img"
                    width={400}
                        height={400}
                    className=" absolute top-0  right-0 !w-[30%] "
                />
                <span className="absolute -bottom-[10px] left-[20px] md:left-[20px]  bg-[#384BFF] text-white flex justify-center items-center gap-[10px] w-[150px] md:w-[190px] px-[10px] md:px-[20px] py-[15px] md:py-[25px]">
                    <Image
                        src={`${baseURL}/images/services/${serviceClient.image4}`}
                        alt="img"
                        width={400}
                        height={400}
                        className="!w-[35px] !h-[35px]"
                    />
                    <p className="text-[13px]">{serviceClient.imageText}</p>
                </span>
            </div>
            {/*  Right Image Column */}
            <div className="w-full lg:w-[50%] lg:pl-[50px]  mt-[50px] lg:mt-0 flex flex-col  items-center sm:items-start text-center sm:text-start">
                <p className="text-[29px] lg:text-[35px] 2xl:text-[40px] font-[700]"> {renderTitle(serviceClient.title, serviceClient.letters)}</p>
                <p className="mt-[20px]">{serviceClient.des1}</p>
                <p className="mt-[10px]">{serviceClient.des2}</p>
                <div className="mt-[20px] text-start">
                    {serviceClient.lis.map((li, i) => (
                        <div key={i} className="flex gap-[10px] items-start">
                            <Image src={dot} alt="dot" className=" relative top-[5px] w-[10px] h-[10px]" />
                            <p className="" key={i}>{li}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    );
}
