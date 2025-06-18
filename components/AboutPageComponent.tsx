import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function AboutPageComponent() {
  return (
    <section className="py-10 md:py-16  lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 2-column grid: images left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Images) */}
          <div className="relative mb-10 ">
            {/* Background Shape (Positioned behind other images) */}
            <Image
              src="/images/shape.png"
              alt="Decorative shape"
              width={500} // Set an appropriate width
              unoptimized
              height={500} // Set an appropriate height to maintain aspect ratio
              className="absolute top-0 right-0 lg:right-1/4 w-[25%] -z-1"
            />

            {/* Main Image (people in a meeting) */}
            <Image
              src="/images/aboutusimageoffice.webp"
              alt="Team Meeting"
              width={800} // Set an appropriate width
              unoptimized
              height={600} // Set an appropriate height to maintain aspect ratio
              className="w-full right-0  lg:w-2/3 h-auto z-10"
              style={{ zIndex: 10 }}
            />

            {/* Second Image (VR headset), absolutely positioned below/overlap */}
            <div className="absolute bottom-0 right-0 lg:right-1/4 sm:right-32 border-4 shadow-md border-white transform translate-y-1/4">
              <Image
                src="/images/about-maskgroup-image.png"
                alt="VR Headset"
                width={192} // Set an appropriate width
                unoptimized
                height={192} // Set an appropriate height to maintain aspect ratio
                className="w-32 sm:w-48 h-auto"
              />
            </div>

            {/* "10 Years of Experience" Badge */}
            <div className="flex gap-2 absolute bottom-[-2.5rem] left-4 sm:left-8 bg-blue-600 text-white py-3 px-5">
              <Image
                src="/images/layer_4.svg"
                alt="Clock Icon"
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

          {/* Right Column (Text Content) */}
          <div>
            {/* Subheading */}

            <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
              <ArrowLeft className="h-4 w-4" />
              <span>About All Spark Technologies</span>
              <ArrowRight className="h-4 w-4" />
            </div>
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
               We Drive Business Growth 
              <br />
              <span className="text-blue-600">Through Technology</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 mb-6 text-base">
             
Founded in 2010 by a team of passionate technologists and software experts, AllSpark Technologies began as a mission to empower businesses through innovation. Over the years, we’ve grown into a trusted software development team and software company with AI expertise, committed to solving real-world problems with real-world impact.
            </p>

            <p className="text-gray-600 mb-6 text-base">
             
From building large-scale cloud systems to delivering custom software solutions, we help companies across industries automate, scale, and transform. Today, AllSpark is recognized as a leading software development and AI company, offering tech-enabled services in the USA with a strong focus on performance, security, and scalability.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
