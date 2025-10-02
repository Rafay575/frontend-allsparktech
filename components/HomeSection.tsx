"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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


export default function Home({ homeData }: { homeData: HomePageData }) {

  console.log(homeData.homeServices);

  return (
    <>
      <Navbar />
      <MetaTitle />
      <Hero hero={homeData.hero} />
      <Logos logos={homeData.logos} />
      <ServicesSection homeServices={homeData.homeServices} />
      <AboutSection about={homeData.about} />
      <h1 className="my-[20px]">hello</h1>
      <HomeProcess homeProcess={homeData.process}/>
      <FaqSection faq={homeData.faq} />
      <ContactSection contactBanner={homeData.contactBanner} />
      <TestimonialsSection testimonials={homeData.testimonials} />
      <Footer />

      {homeData.script && (
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeData.script),
          }}
        />
      )}
    </>
  );
}
