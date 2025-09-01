"use client";
import Image from "next/image";
import img1 from "@/public/images/indusimg1.png"
import img2 from "@/public/images/indusimg2.png"
import img3 from "@/public/images/shape.png"
import { StaticImageData } from "next/image";

interface ServiceAbout {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  title: string;
  letters?: string[];
  des1: string;
  des2: string;
}



export default function ServiceAbout() {
    const serviceAbout:ServiceAbout={
        image1:img1,
        image2:img2,
        image3:img3,
        title:"Industries We Serve in Custom Software Development",
        letters:["Development"],
        des1:"AllSpark Technologies provides custom software development services designed to fit the unique needs of every industry. Our solutions support businesses in healthcare, finance, retail, education, logistics, eCommerce, and technology, ensuring seamless operations and future-ready growth. From enterprise software development to secure web and mobile applications, we build software that solves real problems and integrates with existing systems.",
        des2:"As a leading custom software development company in the USA, AllSpark Technologies delivers secure, enterprise-grade, and scalable software services. Our team of custom software developers ensures your business gains competitive advantage with future-ready solutions"
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
        <div className="container  py-[50px] lg:py-[80px]   flex flex-wrap items-center justify-between relative z-[20]">
            {/* Left Image Column */}
            <div className="w-full lg:w-[50%]  ">
                <p className="text-[35px] xl:text-[40px] font-[700]">{renderTitle(serviceAbout.title, serviceAbout.letters)} </p>
                <p className="mt-[20px]">{serviceAbout.des1}</p>
                <p className="mt-[10px]">{serviceAbout.des2}</p>
            </div>

            {/* Right Text Column */}
            <div className="relative w-full sm:w-[85%] lg:w-[40%] mx-auto lg:mx-0  md:pr-[0px] p-[20px] mt-[30px] lg:mt-0 ">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl w-full md:w-[89%] h-auto">
                    <Image
                        src={serviceAbout.image1}
                        alt="img"
                        width={400}
                        height={400}
                        className="rounded-3xl w-full h-auto"
                        unoptimized
                    />
                </div>

                {/* Overlapping Image */}
                <div className="absolute bottom-[-30px] right-[0px] md:right-[-30px] sm:bottom-0 sm:right-0 w-[150px] h-[150px md:w-[180px] md:h-[180px] xl:w-[220px] xl:h-[220px]">
                    <Image
                        src={serviceAbout.image2}
                        alt="img"
                        sizes="100px"
                        className="object-contain "
                        unoptimized

                    />
                </div>

                {/* Floating Shape */}
                <Image
                    src={serviceAbout.image3}
                    alt="img"
                    className=" absolute top-0  right-0 w-[30%] "
                />
            </div>
        </div>
    );
}
