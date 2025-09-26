"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
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




export default function ServicesSection({homeData}:{homeData: HomePageData}) {

  const displayedServices = Array.isArray(homeData.homeServices?.allServices)
    ? homeData.homeServices.allServices.slice(0, 10)
    : [];

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    hover: { y: -10 },
  };

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
      className="max-w-7xl mx-auto px-4 py-10"
    >
      <div className="mx-auto max-w-7xl text-start">
        {/* Title Section */}
        <div className="mb-2 flex items-center space-x-4 para font-semibold uppercase tracking-wide color">
          <ArrowLeft className="h-4 w-4" />
          <span>{homeData.homeServices?.subTitle}</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="relative">
          <h2 className="mt-3 heading font-bold text-gray-900">
            {homeData.homeServices?.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <AnimatePresence>
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <Link
                href={{
                  pathname: `/${service.id}`,
                }}
                className="w-full h-full"
              >
                <div
                  className="h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${baseURL}/images/home/${service.imageUrl})`,
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white subheading font-semibold">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
