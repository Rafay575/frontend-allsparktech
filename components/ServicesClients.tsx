"use client";
import Image from "next/image";
import img1 from "@/public/images/clientimg1.png"
import img2 from "@/public/images/clientimg2.png"
import img3 from "@/public/images/shape.png"
import dot from "@/public/images/dot.png"
import hugicon from "@/public/images/hugicon.png"
import { StaticImageData } from "next/image";

interface ServiceClient {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
  imageText: string;
  title: string;
  letters?: string[];
  des1: string;
  des2: string;
  lis: string[];
}


export default function ServiceClient() {
    const serviceClient = {
        image1: img1,
        image2: img2,
        image3: img3,
        image4: hugicon,
        imageText: "Quality, Trust, Growth.",
        title: "Why Do Our Clients Love Us?",
        letters: ["Clients"],
        des1: "AllSpark Technologies, a leading USA-based custom software development company in USA, delivers secure, scalable, and innovative solutions for enterprises and growing businesses.",
        des2: "We specialize in enterprise software, web apps, and AI-driven solutions, ensuring projects stay on time and within budget. With over a decade of proven expertise, we design adaptable technology that improves agility, drives growth, and delivers measurable results.",
        lis: ["Recognized for reliable and secure web application development with 5-star client ratings",
            "92% of our customers report complete satisfaction with our services.",
            "A large part of our talented team has been with us for more than 5 years.",
            "Businesses choose us for scalable custom web application development across healthcare, eCommerce, finance, and more"
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
        <div className="container py-[50px] lg:py-[80px]  flex flex-wrap items-center justify-between  relative z-[20]">
            {/*Left Text Column */}
            
            <div className="relative w-full sm:w-[80%] lg:w-[45%] mx-auto lg:mx-0  md:pl-[0px] p-[10px] ">
                {/* Main Image */}
                <div className="relative  rounded-3xl w-[95%] md:w-[90%] h-auto">
                    <Image
                        src={serviceClient.image1}
                        alt="img"
                        width={400}
                        height={400}
                        className="rounded-3xl w-full h-auto"
                        unoptimized
                    />
                </div>

                {/* Overlapping Image */}
                <div className="absolute bottom-[-30px]  right-[0px] lg:right-[-30px] sm:bottom-0 sm:right-0 w-[150px] h-[150px md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px]">
                    <Image
                        src={serviceClient.image2}
                        alt="img"
                        className="object-contain "

                    />
                </div>

                {/* Floating Shape */}
                <Image
                    src={serviceClient.image3}
                    alt="img"
                    className=" absolute top-0  right-0 w-[30%] "
                />
                <span className="absolute -bottom-[10px] left-[20px] md:left-[20px]  bg-[#384BFF] text-white flex justify-center items-center gap-[10px] w-[150px] md:w-[190px] px-[10px] md:px-[20px] py-[15px] md:py-[25px]">
                    <Image
                        src={serviceClient.image4}
                        alt="img"
                        className="w-[35px] h-[35px]"
                    />
                    <p className="text-[13px]">{serviceClient.imageText}</p>
                </span>
            </div>
            {/*  Right Image Column */}
            <div className="w-full lg:w-[50%] lg:pl-[50px]  mt-[50px] lg:mt-0">
                <p className="text-[35px] xl:text-[40px] font-[700]"> {renderTitle(serviceClient.title, serviceClient.letters)}</p>
                <p className="mt-[20px]">{serviceClient.des1}</p>
                <p className="mt-[10px]">{serviceClient.des2}</p>
                <div className="mt-[20px]">
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
