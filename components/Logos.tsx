"use client";

import React from "react";
import Image from "next/image";
import { baseURL } from "@/API/baseURL";

export interface HomePageData {
  hero: {
    texts: string[];
    features: string[];
  };
  logos: {
    id: number;
    src: string;
    alt: string;
  }[];
  homeServices: {
    subTitle: string;
    title: string;
    allServices: {
      id: string;
      title: string;
      imageUrl: string;
      alt: string;
    }[];
  };
  about: {
    img1: string;
    img2: string;
    img3: string;
    alt1: string;
    alt2: string;
    alt3: string;
    subheading: string;
    mainHeading: string;
    paragraphs: string[];
    features: {
      title: string;
      subtitle: string;
    }[];
  };
  process: {
    number: string;
    title: string;
    description: string;
  }[];
  faq: {
    img1: string;
    img2: string;
    img3: string;
    alt1: string;
    alt2: string;
    alt3: string;
    subtitle: string;
    title: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  contactBanner: {
    img: string;
    alt: string;
    subTitle: string;
    title: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonials: {
      id: number;
      name: string;
      role: string;
      text: string;
      image: string;
      rating: number;
    }[];
  };
  metadata: any;
  script: any;
}



export default function Logos({homeData}:{homeData: HomePageData}) {

  return (
    <section className="py-8 border-b border-gray-400">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4">
        {homeData.logos?.map((logo) => (
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
