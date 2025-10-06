"use client";

import React from "react";
import Image from "next/image";
import { baseURL } from "@/API/baseURL";


 interface logos{
    id: number;
    src: string;
    alt: string;
 }


export default function Logos({logos}:{logos: logos[]}) {

  return (
    <section className="py-[50px] ">
      <div className="mx-auto container flex  flex-wrap items-center justify-center lg:justify-between  gap-y-[40px] ">
        {logos.map((logo) => (
          <div key={logo.id} className="flex w-[50%] md:w-[20%] items-center justify-center">
            <Image
              src={`${baseURL}/images/home/${logo.src}`}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain w-[70%] sm:w-[50%] md:w-[75%]"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}
