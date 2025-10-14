"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { baseURL } from "@/API/baseURL";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion"; // 👈 Import Framer Motion

interface Card {
  icon: string | StaticImageData;
  heading: string;
  des: string;
  btnText: string;
  link?: string;
}

interface ServiceOffering {
  title: string;
  letters?: string[];
  des: string;
  cards: Card[];
}

interface ServiceOfferingProps {
  serviceOffering: ServiceOffering;
}

export default function ServicesOffering({ serviceOffering }: ServiceOfferingProps) {
  // ✅ Highlighted text logic
  const renderTitle = (title: string, highlights: string[] = []) => {
    return title.split(" ").map((word, i, words) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, "");
      const isLastWord = i === words.length - 1;
      if (highlights.some((highlight) => highlight.trim() === cleanWord)) {
        return (
          <span key={i} className="color">
            {word}
            {isLastWord ? "" : " "}
          </span>
        );
      }
      return word + (isLastWord ? "" : " ");
    });
  };

  return (
    <div className="pad container">
      <div className="text-center h-[100%]">
        {/* Heading Animation */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[70%] xl:w-[55%] mx-auto heading font-[800]"
        >
          {renderTitle(serviceOffering.title, serviceOffering.letters)}
        </motion.p>

        {/* Description Animation */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-[70%] xl:w-[52%] mx-auto para mt-[15px]"
        >
          {serviceOffering.des}
        </motion.p>

        {/* Cards Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] h-[100%] mt-[40px]">
          {serviceOffering.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`bg-[#f3f7fb] border border-[#d4dcff] p-[15px] lg:p-[20px] rounded-[10px] min-h-[250px] ${card.link? ` min-h-[250px] md:min-h-[300px]`:`min-h-[210px] md:min-h-[240px]`} md:min-h-[300px] flex flex-col items-center sm:items-start text-center sm:text-start`}
            >
              <Image
                src={`${baseURL}/images/services/${card.icon}`}
                alt="icon"
                width={400}
                height={20}
                className="!w-[70px] !h-[70px] object-contain border border-[#d4dcff] p-[10px] rounded-[5px]"
              />
              <p className="subheading font-[700] mt-[20px]">{card.heading}</p>
              <p className="my-[10px] para">{card.des}</p>

              {card.link &&
                <Link
                  href={`${card.link ? `/subservice/${card.link}` : `/contact`}`}
                  className="mt-auto"
                >
                  <button className="border border-[#737577] group py-[10px] px-[30px] rounded-[25px] mt-auto flex items-center gap-[5px] hover:bg-[#384BFF] duration-300 hover:text-white hover:border-[#384BFF] para">
                    {card.btnText}
                    <MdKeyboardDoubleArrowRight className="text-grey-600 para group-hover:text-white" />
                  </button>
                </Link>
              }
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
