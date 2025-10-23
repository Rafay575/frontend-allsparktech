"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sericon from "@/public/images/sericon.png";
import { motion } from "framer-motion";
import { baseURL } from "@/API/baseURL";
import Autoplay from "embla-carousel-autoplay";
interface IndustryItem {
  image: string | StaticImageData;
  title: string;
  des: string;
  btnText: string;
}

interface ServiceIndustries {
  mainImage: string;
  btnText: string;
  title: string;
  des: string;
  industries: IndustryItem[];
}
interface ServiceIndustriesProps {
  serviceIndustries: ServiceIndustries;
}

export default function Industries({ serviceIndustries }: ServiceIndustriesProps) {
  // Parent animation (controls staggered timing)
  const parentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3, // <---- this makes children appear one by one
      },
    },
  };

  // Child animation (for each card)
  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="container mar pad rounded-[30px] bg">
      {/* Heading + Image Section */}
      <div className="flex">
        <motion.div
          className="w-[91%] lg:w-[40%] mx-auto lg:mx-0 lg:pl-[50px] lg:pr-[20px] flex flex-col justify-center items-center sm:items-start gap-y-[10px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button className="subheading flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[27px] font-[500] mt-[50px] lg:mt-0 hover:scale-[1.02] duration-500 text-white">
            <Image src={sericon} className="w-[25px]" alt="icon"  loading="lazy"  

               
 />
            {serviceIndustries.btnText}
          </button>
          <p className="heading font-[700] text-white leading-[45px] mt-[10px] text-center sm:text-start">
            {serviceIndustries.title}
          </p>
          <p className="para text-white text-center sm:text-start">
            {serviceIndustries.des}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:block lg:w-[60%]"
        >
          <Image src={`${baseURL}/images/services/${serviceIndustries.mainImage}`} width={1400} height={1400} className="w-full" alt="industry"  loading="lazy"  

             
 />
        </motion.div>
      </div>

      {/* Carousel Section */}
      <div className="px-[40px] lg:px-0">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Carousel className="mx-auto mt-[40px] w-[91%]" plugins={[autoplay.current]}
            opts={{
              loop: true, // 👈 Enable looping
            }}
          >
            <CarouselContent>
              {serviceIndustries.industries.map((industry, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex py-[20px]"
                >
                  <motion.div
                    variants={childVariants}
                    className="w-full h-[100%] bg-white rounded-[15px] p-[25px] py-[20px] md:py-[30px] flex flex-col items-center text-center border-2 border-[#384BFF] cards"
                  >
                    <Image src={`${baseURL}/images/services/${industry.image}`} width={400} height={400} className="w-[50%]" alt="icon"  loading="lazy"  

                       
 />
                    <h3 className="subheading font-[600] mb-2 text-center color" >
                      {industry.title}
                    </h3>
                    <p className="para text-gray-600 text-center">{industry.des}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 translate-x-[-135%] bg-white color" />
            <CarouselNext className="absolute right-0 translate-x-[135%] bg-white color" />
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}
