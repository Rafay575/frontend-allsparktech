"use client";
import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { baseURL } from "@/API/baseURL";

export interface aboutData {
  heroimg: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  alt1: string;
  alt2: string;
  alt3: string;
  alt4: string;
  subheading: string;
  mainHeading: string;
  split: string;
  paragraphs: string[];
  cards: {
    title: string;
    description: string;
  }[];
  metadata: any;
  script: any;
}

export default function AboutPageComponent({ aboutData }: { aboutData: aboutData }) {


  return (
    <section className="py-10 md:py-16  lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative mb-10 ">
            <Image
              src={`${baseURL}/images/about/${aboutData.img3}`}
              alt={aboutData.alt3}
              width={500}
              unoptimized
              height={500}
              className="absolute top-0 right-0 lg:right-1/4 w-[25%] -z-1"
            />

            <Image
              src={`${baseURL}/images/about/${aboutData.img1}`}
              alt={aboutData.alt1}
              width={800}
              unoptimized
              height={600}
              className="w-full right-0  lg:w-2/3 h-auto z-10"
              style={{ zIndex: 10 }}
            />

            <div className="absolute bottom-0 right-0 lg:right-1/4 sm:right-32 border-4 shadow-md border-white transform translate-y-1/4">
              <Image
                src={`${baseURL}/images/about/${aboutData.img2}`}
                alt={aboutData.alt2}
                width={192}
                unoptimized
                height={192}
                className="w-32 sm:w-48 h-auto"
              />
            </div>

            <div className="flex gap-2 absolute bottom-[-2.5rem] left-4 sm:left-8 bg-blue-600 text-white py-3 px-5">
              <Image
                src={`${baseURL}/${aboutData.img4}`}
                alt={aboutData.alt4}
                width={30}
                unoptimized
                height={30}
              />
              <div>
                <p className="text-base font-bold">
                  10 <span className="text-[10px] font-normal">Years</span>
                </p>
                <p className="text-[10px] font-medium">Of Experience</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
              <ArrowLeft className="h-4 w-4" />
              <span>{aboutData.subheading}</span>
              <ArrowRight className="h-4 w-4" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              {aboutData.mainHeading.split(aboutData.split)[0]}
              <br />
              <span className="text-blue-600">
                {"Through" + aboutData.mainHeading.split(aboutData.split)[1]}
              </span>
            </h2>

            <p className="text-gray-600 mb-6 text-base">{aboutData.paragraphs[0]}</p>
            <p className="text-gray-600 mb-6 text-base">{aboutData.paragraphs[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

