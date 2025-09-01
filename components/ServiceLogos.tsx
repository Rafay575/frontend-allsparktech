"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import logo1 from "@/public/images/companies/logo-1.png";
import logo2 from "@/public/images/companies/logo-2.png";
import logo3 from "@/public/images/companies/logo-3.png";
import logo4 from "@/public/images/companies/logo-4.png";
import logo5 from "@/public/images/companies/logo-5.png";

// ✅ Interface
interface serviceLogos {
  logos: StaticImageData[];
}

export default function Logos() {
  const serviceLogos: serviceLogos = {
    logos: [logo1, logo2, logo3, logo4, logo5],
  };

  return (
    <section className="py-8 border-gray-400">
      <div className="mx-auto flex lg:w-[80%] xl:w-[70%] flex-wrap items-center justify-center gap-y-[40px] px-4">
        {serviceLogos.logos.map((logo, index) => (
          <div
            key={index}
            className="flex w-[50%] md:w-[20%] items-center justify-center"
          >
            <Image
              src={logo}
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
