"use client";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });


import { StaticImageData } from "next/image";

interface hero {
  texts: string[];
    features: string[];
}
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
      title: string;
      des: string;
      image: string | StaticImageData;
      link: string;
      process: {
      heading: string;
      des: string;
      image: string | StaticImageData;
      dir?: string | StaticImageData;
  }[];
  };
  
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



export default function HeroSection({hero}:{hero: hero}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentGridIndex, setCurrentGridIndex] = useState(0);



  // Text change interval
  useEffect(() => {
    if (!hero?.texts) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % hero.texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hero?.texts]);

  // Grid change interval
  const gridPageCount = hero ? Math.ceil(hero.features.length / 2) : 1;
  useEffect(() => {
    if (!hero?.features) return;
    const interval = setInterval(() => {
      setCurrentGridIndex((prev) => (prev + 1) % gridPageCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [hero?.features, gridPageCount]);

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#384BFF]/70" />

      {/* Content */}
      <div className="relative w-full xl:w-3/5 text-center md:text-start z-10">  
          <>
            {/* Animated Headline */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTextIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-2xl font-bold text-white heading !leading-normal"
              >
                {hero?.texts[currentTextIndex]}

              </motion.h2>
            </AnimatePresence>

            {/* Animated Feature Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGridIndex + 2}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-2 mx-auto md:mx-0 gap-6 w-fit mt-5 text-lg text-white"
              >
                {hero?.features
                  .slice(currentGridIndex * 2, currentGridIndex * 2 + 2)
                  .map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-1 text-white" />
                      <span className="subheading">{feature}</span>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* CTA Button */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex + "btn"}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-12 flex justify-center md:justify-start"
              >
                <Link
                  href="/contact"
                  className={`${plusJakartaSans.className} bg-[#F98600] rounded-full px-10 !py-3 text-white para hover:bg-yellow-500`}
                >
                  Get in touch
                </Link>
              </motion.div>
            </AnimatePresence>
          </>
      </div>
    </section>
  );
}
