"use client";

import { useState, useEffect } from "react";

import { CheckCircle } from "lucide-react";

import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function HeroSection() {
  const texts = [
    "Trusted Software Development Company",
    "AI Solutions That Drive Innovation and Growth",
    "Full-Stack Development & SaaS Expertise"
  ];

  const features = [
    "Custom Software Solutions",
    "Transparent Collaboration",
    "Scalable AI Tools",
    "Enterprise-Grade Security",
    "End-to-End Delivery",
    "Agile Software Teams",
];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentGridIndex, setCurrentGridIndex] = useState(0);

  // Cycle texts every 5000 ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  // Cycle grid values (2 per page) every 5000 ms
  useEffect(() => {
    const gridInterval = setInterval(() => {
      setCurrentGridIndex((prev) => (prev + 1) % (features.length / 2));
    }, 5000);
    return () => clearInterval(gridInterval);
  }, [features.length]);

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <section
      className="relative col-span-12 overflow-hidden mt-[-20px] max-w-[97%] mx-auto rounded-[50px] h-[90vh] p-8 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-between"
      style={{ zIndex: 1 }}
    >
      {/* Video Background */}
      <video
        src="/images/process.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-[#384BFF]/70" />

      {/* Left Section - Content */}
      <div className="relative w-full  xl:w-3/5 text-center md:text-start z-10" style={{zIndex: 100}}>
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentTextIndex}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl !leading-normal"
          >
            {texts[currentTextIndex]}
          </motion.h1>
        </AnimatePresence>

        {/* Values Grid with 2 per page */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGridIndex + 2}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-2 mx-auto md:mx-0 gap-6 w-fit mt-5 text-lg text-white"
          >
            {features
              .slice(currentGridIndex * 2, currentGridIndex * 2 + 2)
              .map((feature, index) => (
                <div key={index} className="flex items-center ">
                  <CheckCircle className="h-5 w-5 mr-1 text-white" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Button Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mt-12 flex justify-center md:justify-start"
          >
            <Link
              href={"/contact"}
              className={`${plusJakartaSans.className}  bg-[#F98600] rounded-full px-10 !py-3 text-white hover:bg-yellow-500`}
              
            >
              Get in touch
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

   
    </section>
  );
}
