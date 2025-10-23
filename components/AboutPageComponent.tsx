"use client";
import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
    <section className="pad bg-white">
      <div className="container ">
        <div className="flex flex-col lg:flex-row  items-center ">
          {/* Left Side Animation */}
          <motion.div
            className="relative   w-full lg:w-[42%] "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >

            {/* First Image  */}
            <Image
              src={`${baseURL}/images/about/${aboutData.img1}`}
              alt={aboutData.alt1}
              width={800}
              height={600}
              loading="lazy"
              placeholder="blur"
              className="w-[90%] z-10"
              style={{ zIndex: 10 }}
            />

            {/* Second Image   */}
            <Image
              src={`${baseURL}/images/about/${aboutData.img2}`}
              alt={aboutData.alt2}
              width={192}
              height={192}
              className="w-[40%] absolute bottom-[-5%] right-0  border-4 shadow-md border-white "
              loading="lazy"
              placeholder="blur"
            />

            {/* Third Image  */}
            <Image
              src={`${baseURL}/images/about/${aboutData.img3}`}
              alt={aboutData.alt3}
              height={500}
              width={500}
              loading="lazy"
              placeholder="blur"
              className="absolute top-0 right-0 w-[25%] -z-1"
            />

            <div className="flex gap-2 absolute bottom-[-5%] left-4 sm:left-8 bg-blue-600 text-white py-3 px-5">
              <Image
                src={`${baseURL}/${aboutData.img4}`}
                alt={aboutData.alt4}
                width={30}
                unoptimized
                height={30}
                loading="lazy"
                placeholder="blur"
              />
              <div>
                <p className="text-base font-bold">
                  10 <span className="text-[10px] font-normal">Years</span>
                </p>
                <p className="text-[10px] font-medium">Of Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" w-full lg:w-[58%] lg:pl-[90px] flex flex-col justify-center mt-[70px]  lg:mt-0"
          >
            <div className=" mb-2 flex items-center space-x-4 para font-semibold uppercase tracking-wide color justify-center sm:justify-start  text-center sm:text-start ">
              <ArrowLeft className="h-4 w-4" />
              <span>{aboutData.subheading}</span>
              <ArrowRight className="h-4 w-4" />
            </div>

            <h2 className="heading font-bold text-gray-800 leading-tight mb-4 text-center sm:text-start">
              {aboutData.mainHeading.split(aboutData.split)[0]}
              <br />
              <span className="color">
                {"Through" + aboutData.mainHeading.split(aboutData.split)[1]}
              </span>
            </h2>

            <p className="text-gray-600 mb-6 para  text-center sm:text-start">{aboutData.paragraphs[0]}</p>
            <p className="text-gray-600 mb-6 para  text-center sm:text-start" >{aboutData.paragraphs[1]}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
