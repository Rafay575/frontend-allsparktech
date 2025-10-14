"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { baseURL } from "@/API/baseURL";

interface homeServices {
  subTitle: string;
  title: string;
  allServices: {
    id: string;
    title: string;
    imageUrl: string;
    alt: string;
  }[];
}




export default function ServicesSection({ homeServices }: { homeServices: homeServices }) {

  const displayedServices = Array.isArray(homeServices?.allServices)
    ? homeServices.allServices.slice(0, 20)
    : [];



  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };


  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="container  pad"
    >
      {/* text Section */}
      <div className="w-full text-start">
        <div className="mb-2 flex items-center justify-center sm:justify-start space-x-4 para font-semibold uppercase tracking-wide color">
          <ArrowLeft className="h-4 w-4" />
          <span>{homeServices?.subTitle}</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="relative">
          <h2 className="mt-3 heading font-bold text-gray-900 text-center sm:text-start">
            {homeServices?.title}
          </h2>
        </div>
      </div>

      {/* Cards */}

      {/* Parent motion.div for stagger animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // 👈 Controls delay between each card
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-[15px]"
      >
        {displayedServices.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{ y: -10 }}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            <Link href={`/${service.id}`} className="w-full h-full">
              <div
                className="h-72 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${baseURL}/images/home/${service.imageUrl})`,
                }}
              ></div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 },
                  },
                }}
                className="absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent"
              >
                <h3 className="text-white subheading font-semibold">
                  {service.title}
                </h3>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>


    </motion.section>
  );
}
