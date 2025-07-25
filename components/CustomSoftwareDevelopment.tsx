"use client";
import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import ServicesTabs from "@/components/ServicesTabs";
import Script from "next/script";


export interface serviceData {
  hero: {
    title: string;
    backgroundImage: string;
    mobileBackgroundImage: string;
    breadcrumbs: {
      label: string;
      href: string;
    }[];
    subtitle: string;
  };
  introduction: string;
  services: {
    title: string;
    cards: {
      title: string;
      content: string;
    }[];
  };
  approach: {
    title: string;
    cards: {
      iconColor: string;
      title: string;
      content: string;
    }[];
  };
  faqs: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  whyChoose: {
    title: string;
    stats: {
      id: number;
      label: string;
      value: number;
      suffix: string;
    }[];
  };
  script: any;
  metadata: any;
}

export default function CustomSoftwareDevelopment({ serviceData }: { serviceData: serviceData }) {
  return (
    <>
      <Topnav />
      <Navbar2 />
      <ServicesTabs data={serviceData} />
      {serviceData.script && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Custom Software Development | Bespoke Dev Services NYC",
              "url": "https://allsparktechnologies.com/services/custom-software-development",
              "description": "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
              "publisher": {
                "@type": "Organization",
                "name": "AllSpark Technologies",
                "url": "https://allsparktechnologies.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://allsparktechnologies.com/logo.png"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "638 Knollwood Road",
                  "addressLocality": "Franklin Lakes",
                  "addressRegion": "NJ",
                  "postalCode": "07417",
                  "addressCountry": "US"
                }
              }
            }
            ),
          }}
        />
      )}
      <Footer2 />
    </>
  );
}
