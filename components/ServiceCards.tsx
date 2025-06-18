import React from "react";
import Image from "next/image";

export default function ServiceCards() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16  lg:pt-20">
      {/* Container with three columns on md+ screens, single column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image
              src={"/images/Layer_1.svg"}
              alt="icon 1"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
              Highly Expert Team
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              Our trusted software development team includes experienced software developers in the USA who bring deep industry knowledge and innovation. As a client-focused software development team, we tailor each solution to your business’s unique needs for measurable results.
            </p>
            {/* Button */}
          </div>
        </div>
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image
              src={"/images/Layer_2.svg"}
              alt="icon 1"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
              24/7 Customer Services
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
           As a full-service technology partner, we offer 24/7 customer support to ensure your operations run smoothly. Our client-centric approach makes us a leading digital solutions provider in the USA, committed to seamless, ongoing assistance.

            </p>
            {/* Button */}
          </div>
        </div>
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image
              src={"/images/Layer_3.svg"}
              alt="icon 1"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
              Competitive Pricing
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
            We combine premium quality with competitive pricing. As a US-based software development company, we deliver top-tier results that align with your goals and budget—making us a value-driven, custom software solutions provider.
            </p>
            {/* Button */}
          </div>
        </div>

        {/* Card 2 */}
      </div>
    </div>
  );
}
