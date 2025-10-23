"use client";
import { baseURL } from "@/API/baseURL";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"; // <-- Import framer motion

interface serviceIndus {
    image1: string | StaticImageData;
    image2: string | StaticImageData;
    image3: string | StaticImageData;
    title: string;
    letters?: string[];
    des1: string;
    des2: string;
}
interface ServiceIndusProps {
    serviceIndus: serviceIndus;
}


export default function ServiceIndus({ serviceIndus }: ServiceIndusProps) {


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
        <div className="container pad flex flex-wrap items-center justify-between relative z-[20]">
            {/* Left Image Column */}
            <motion.div
                initial={{ opacity: 0, x: -80 }} // Start from left
                whileInView={{ opacity: 1, x: 0 }} // Animate to normal
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }} className="w-full lg:w-[50%]  flex flex-col  items-center sm:items-start text-center sm:text-start order-2 mt-[50px] lg:mt-0 lg:order-1">
                <p className="heading font-[700]">{renderTitle(serviceIndus.title, serviceIndus.letters)} </p>
                <p className="mt-[20px] para">{serviceIndus.des1}</p>
                <p className="mt-[10px] para">{serviceIndus.des2}</p>
            </motion.div>

            {/* Right Text Column */}
            <motion.div
                initial={{ opacity: 0, x: 80 }} // Start from right
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="relative w-full lg:w-[45%] mx-auto ml-0 lg:mx-0  md:pr-[0px] p-[20px]  order-1 lg:order-2">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl w-full md:w-[89%] h-auto">
                    <Image
                        src={`${baseURL}/images/services/${serviceIndus.image1}`}
                        alt="img"
                        width={400}
                        height={400}
                        className="rounded-3xl w-full h-auto"
                        loading="lazy"
                        placeholder="blur"
                    />
                </div>

                {/* Overlapping Image */}
                <div className="absolute bottom-[-30px] right-[0px] md:right-[-30px] sm:bottom-0 sm:right-0 w-[150px] h-[150px md:w-[180px] md:h-[180px] xl:w-[220px] xl:h-[220px]">
                    <Image
                        src={`${baseURL}/images/services/${serviceIndus.image2}`}
                        alt="img"
                        sizes="100px"
                        width={400}
                        height={400}
                        className="object-contain "
                        loading="lazy"
                        placeholder="blur"

                    />
                </div>

                {/* Floating Shape */}
                <Image
                    src={`${baseURL}/images/services/${serviceIndus.image3}`}
                    alt="img"
                    width={400}
                    height={400}
                    className=" absolute top-0  right-0 !w-[30%] "
                    loading="lazy"
                    placeholder="blur"
                />
            </motion.div>
        </div>
    );
}



