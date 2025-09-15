"use client";
import React from "react";
import Image from "next/image";

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



export default function ServiceCards({ aboutData }: { aboutData: aboutData }) {

  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16  lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="border-2 flex justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center"
          >
            <div className="mb-4 mt-2 text-[#1D4ED8]">
              <Image
                src={`/images/Layer_${i + 1}.svg`}
                alt={`icon ${i + 1}`}
                width={95}
                height={95}
              />
            </div>
            <div className="flex flex-col text-start items-start ml-3">
              <h5 className="mb-2 subheading font-semibold text-gray-800">
                {aboutData.cards?.[i]?.title || "Title"}
              </h5>
              <p className="mb-4 para text-gray-600 leading-relaxed">
                {aboutData.cards?.[i]?.description || "Description"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
