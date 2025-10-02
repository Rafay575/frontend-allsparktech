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
    <section className="py-8 border-b border-gray-400">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4">
        {logos.map((logo) => (
          <div key={logo.id} className="flex h-16 w-auto items-center">
            <Image
              src={`${baseURL}/images/home/${logo.src}`}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}
