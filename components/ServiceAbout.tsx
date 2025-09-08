"use client";
import Image from "next/image";

import rightarrow from "@/public/images/rightarrow.png"
import leftarrow from "@/public/images/leftarrow.png"
import hand from "@/public/images/hand.png"
import overlay1 from "@/public/images/overlay1.png"
import overlay2 from "@/public/images/overlay2.png"
import { baseURL } from "@/API/baseURL";
import { StaticImageData } from 'next/image';


interface Feature {
  icon: string | StaticImageData;
  title: string;
}

interface ServiceAboutData {
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
  subTitle: string;
  title: string;
  des: string;
  features: Feature[];
}
interface ServiceAboutProps {
  serviceAbout: ServiceAboutData;
}

export default function ServiceAbout({ serviceAbout }: ServiceAboutProps) {
      console.log(`${baseURL}/images/services/${serviceAbout.image1}`);
  return (
    <section className="relative bg-blue-600 overflow-hidden py-[50px] lg:py-[80px] text-white relative">
      <div className="mx-auto container flex pt-[60px] lg:pt-[0]  flex-col-reverse justify-between items-center gap-10 px-3 lg:px-6 lg:flex-row relative z-[20]">
        {/* Left Image Column */}
        <div className="relative w-[90%] lg:w-[40%]   mx-auto lg:mx-0 order-2 lg:order-1">
          {/* Main Image */}
          <div className="w-full h-auto relative overflow-hidden rounded-3xl">
            <Image
              src={`${baseURL}/images/services/${serviceAbout.image1}`}
              alt="img"
             width={400} height={400}
              className="!w-full object-cover"
            />
          </div>


          {/* Overlapping Image */}
          <Image
            src={`${baseURL}/images/services/${serviceAbout.image2}`}
            alt="img"
            className="object-contain absolute bottom-[-40px]  right-[-40px] !w-[50%]"
           width={400} height={400}
          />

          {/* Floating Shape */}
          <Image
            src={`${baseURL}/images/services/${serviceAbout.image3}`}
            alt="img"
            width={400} height={400}
            className="object-cover absolute top-0 right-0 !w-[20%] flex items-center justify-center rounded-full border-2 border-white text-white animate-spin" style={{ animationDuration: "4s" }}
          />
        </div>

        {/* Right Text Column */}
        <div className="w-full lg:w-[50%] mx-auto lg:text-left order-1 lg:order-2 text-center sm:text-start pt-[40px] lg:pt-[0px] flex flex-col items-center sm:items-start">
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-white">
            <Image src={leftarrow} alt="img" className=" w-[40px]" />
            <span>{serviceAbout.subTitle}</span>
            <Image src={rightarrow} alt="img" className=" w-[40px]" />
          </div>

          <h2 className="text-[29px] lg:text-[35px] 2xl:text-[40px] font-bold !leading-normal ">
            {serviceAbout.title}
          </h2>

          <p className="mt-4 text-base text-white/80">
            <span className="mb-5 block">{serviceAbout.des}</span>
          </p>

          {/* Features Section */}
          <div className="flex justify-center sm:justify-start flex-wrap xl:flex-nowrap space-x-6 mt-10 gap-2 !lg:gap-[0px] justify-start ">
            {serviceAbout.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center sm:justify-start gap-[10px] bg-[#5666ff] p-2   rounded-lg !ml-0"
              >
                <Image src={`${baseURL}/images/services/${feature.icon}`} alt="img" width={10}
              height={10} className="bg-white p-3 rounded-lg !w-[50px]" />
                <div className="flex flex-col">
                  <h6 className="text-white font-semibold text-[15px] md:text-[12px] xl:text-[15px]">{feature.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image src={hand} alt="img" className="absolute right-0 top-[10px] lg:top-[100px] z-10 w-[100px] md:w-[130px]" />
      <Image src={overlay1} alt="img" className="absolute -left-6 -bottom-9 hidden lg:block" />
      <Image src={overlay2} alt="img" className="absolute right-8 bottom-[30px] hidden lg:block" />
    </section>
  );
}
