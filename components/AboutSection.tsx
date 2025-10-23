"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { baseURL } from "@/API/baseURL";
import { motion } from "framer-motion";


interface about {
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
}

export default function AboutSection({ about }: { about: about }) {



  return (
    <section className="relative bg overflow-x-hidden pad text-white">
      <div className="container flex flex-col-reverse  justify-between gap-10  lg:flex-row" >

        {/* Left Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:w-[43%] mx-auto pr-[15px] lg:pr-0  py-[20px]  flex flex-col justify-center">
          <div className="relative w-full ">


            {/* Main Image */}
            <Image
              src={`${baseURL}/images/home/${about.img1}`}
              alt={about.alt1}
              width={400}
              height={400}
              className=" !w-full "
               loading="lazy" unoptimized

            />

            {/* Overlapping Image */}
            <div className="absolute bottom-[-20px] right-[-20px] sm:bottom-[-35px] sm:right-[-40px] !w-[40%]">
              <Image
                src={`${baseURL}/images/home/${about.img2}`}
                alt={about.alt2}
                className="!w-full "
                width={200}
                height={200}
                 loading="lazy" unoptimized

               

              />
            </div>

            {/* Floating Shape */}
            <Image
              src={`${baseURL}/images/home/${about.img3}`}
              alt={about.alt3}
              className="w-[20%] absolute top-0 right-0 animate-spin"
              style={{ animationDuration: "4s" }}
              width={200}
              height={200}
               loading="lazy" unoptimized

               

            />
          </div>
        </motion.div>

        {/* Right Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[57%] lg:text-left   lg:pl-[50px] xl:pl-[80px] flex flex-col justify-center "
        >
          <div className="mb-2 flex items-center justify-center sm:justify-start space-x-4 para font-semibold uppercase tracking-wide text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>{about.subheading}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          <h2 className="heading font-bold !leading-normal text-center sm:text-start">
            {about.mainHeading}
          </h2>

          <p className="mt-4 para text-white/80 text-center sm:text-start">
            <span className="mb-5 block">{about.paragraphs[0]}</span>
            <span className="mt-5 block">{about.paragraphs[1]}</span>
          </p>

          {/* Features Section */}
          <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-10 justify-center sm:justify-start">
            {about?.features?.map((feature: any, index: number) => (
              <div
                key={index}
                className="w-[160px] lg:w-[180px] flex items-center space-x-2 bg-[#5666ff] p-2 pr-3 rounded-lg"
              >
                <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                  {index === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lightbulb text-blue-600"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  ) : index === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe text-blue-600"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-col">
                  <h6 className="text-white font-semibold para">
                    {feature.title}
                  </h6>
                  <p className="text-white text-[12px]">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
