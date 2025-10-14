"use client";

import React from "react";
import Image from "next/image";
import { baseURL } from "@/API/baseURL";
import Marquee from "react-fast-marquee";


interface logos {
  id: number;
  src: string;
  alt: string;
}


export default function Logos({ logos }: { logos: logos[] }) {

  return (
    <section className="py-[50px] ">
      {/* <div className="mx-auto container flex  flex-wrap items-center justify-center lg:justify-between  gap-y-[40px] "> */}
      <Marquee speed={180} gradient={false} pauseOnHover={true}>
        {logos.map((logo) => (
          <div 
          key={logo.id} 
          // className="flex w-[50%] md:w-[20%] items-center justify-center"
          className="flex w-[200px] sm:w-[200px] lg:w-[320px] items-center justify-center"
          >
            <Image
              src={`${baseURL}/images/home/${logo.src}`}
              alt={logo.alt}
              width={150}
              height={50}
              // className="object-contain w-[70%] sm:w-[50%] md:w-[75%]"
              className="object-contain w-[150px] sm:w-[170px] lg:w-[200px] lg:opacity-60 hover:opacity-100 duration-300"
              unoptimized
            />
          </div>
        ))}
      </Marquee>
      {/* </div> */}
    </section>
  );
}
