
"use client";
import { useQuery } from "@tanstack/react-query";
import { getHomeDataQuery } from "@/utils/queries";
import React from "react";
import Logos from "@/components/Logos";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Script from "next/script";
import { MetaTitle } from "./MetaTitle";
import HomeProcess from "./HomeProcess";
import { StaticImageData } from "next/image";
import HomePage from "./HomePage";
import Marquee from "@/components/Marquee";
export interface HomePageData {
  hero: {
    bg: string;
    topBtn: string;
    topBtnLink: string;
    title: string;
    des: string;
    bottomBtn: string;
    bottomBtnLink: string;
  }[];
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
  titles: string[];
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


export default function Home({ homeData }: { homeData: HomePageData }) {
  const { data } = useQuery({
    ...getHomeDataQuery(),
    initialData: homeData, // 👈 use server data immediately
  });
  const dataToUse = data || homeData;
  return (
    <div className="w-[100vw]  overflow-x-hidden">
      {/* <Navbar /> */}
      <MetaTitle />
      <HomePage hero={dataToUse.hero} />
      <ServicesSection homeServices={dataToUse.homeServices} />
      <AboutSection about={dataToUse.about} />
      <Marquee titles={dataToUse.titles} />
      <HomeProcess homeProcess={dataToUse.process} />
      <FaqSection faq={dataToUse.faq} />
      <ContactSection contactBanner={dataToUse.contactBanner} />
      <TestimonialsSection testimonials={dataToUse.testimonials} />
      <Logos logos={dataToUse.logos} />
      <Footer />

      {dataToUse.script && (
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dataToUse.script),
          }}
        />
      )}
    </div>
  );
}
