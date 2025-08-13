"use client";

import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Hero2Section from "@/components/Hero2Section";
import Footer2 from "@/components/Footer2";
import ServiceCards from "@/components/ServiceCards";
import AboutPageComponent from "@/components/AboutPageComponent";
import CoreValuesSemiCircle from "@/components/CoreValuesSemiCircle";
import React, { Suspense } from "react";
import { baseURL } from "@/API/baseURL";
import Script from "next/script";

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


const AboutClient = ({ aboutData }: { aboutData: aboutData }) => {
 

  return (
    <>
      <Topnav />
      <Navbar2 />
      <Hero2Section
        title="About"
        backgroundImage={`${baseURL}/images/about/${aboutData.heroimg}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/About" },
        ]}
      />
      <ServiceCards aboutData={aboutData}/>
      <Suspense fallback={<div>Loading About Page...</div>}>
        <AboutPageComponent aboutData={aboutData}/>
      </Suspense>
      <CoreValuesSemiCircle />
      {aboutData?.script && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutData.script),
          }}
        />
      )}
      <Footer2 />
    </>
  );
};

export default AboutClient;
