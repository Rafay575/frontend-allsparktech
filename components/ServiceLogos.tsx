"use client";
import React from "react";
import Image from "next/image";
import { baseURL } from "@/API/baseURL";
import { StaticImageData } from "next/image";

interface serviceLogos {
  logos: (string | StaticImageData)[];
}
interface ServiceLogosProps {
  serviceLogos: serviceLogos;
}
export default function Logos({ serviceLogos }: ServiceLogosProps) {
  

  return (
    <section className="py-8 border-gray-400">
      <div className="mx-auto flex lg:w-[80%] xl:w-[70%] flex-wrap items-center justify-center gap-y-[40px] px-4">
        {serviceLogos.logos.map((logo, index) => (
          <div
            key={index}
            className="flex w-[50%] md:w-[20%] items-center justify-center"
          >
            <Image
              src={`${baseURL}/images/services/${logo}`}
              alt={`logo-${index + 1}`}
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
