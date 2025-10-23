"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  // Animation settings
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 }, // show cards one by one
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="container pad">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="border-2 flex flex-col  items-center sm:items-start border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center rounded-[12px]"
          >
            <Image
              src={`/images/Layer_${i + 1}.svg`}
              alt={`icon ${i + 1}`}
              width={95}
              height={95}
              className="w-[17%] sm:w-[10%] lg:w-[15%] mb-4 mt-2 text-[#1D4ED8] "
               loading="lazy"  

               

            />

            <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-start">
              <h5 className="mb-2 subheading font-semibold text-gray-800">
                {aboutData.cards?.[i]?.title || "Title"}
              </h5>
              <p className="mb-4 para text-gray-600 leading-relaxed ">
                {aboutData.cards?.[i]?.description || "Description"}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
