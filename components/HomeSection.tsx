
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
    initialData: homeData,
  });
  const dataToUse = data || homeData;
  console.log("script :", dataToUse.script)
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
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://allsparktechnologies.com/#organization",
                    "name": "AllSpark Technologies",
                    "url": "https://allsparktechnologies.com",
                    "logo": "https://allsparktechnologies.com/logo.png",
                    "sameAs": [
                      "https://www.linkedin.com/company/allspark-technologies",
                      "https://www.facebook.com/allsparktechnologies"
                    ],
                    "description": "AllSpark Technologies is a leading software development company and AI development agency in the USA, offering custom software, cloud, DevOps, and full-stack solutions.",
                    "foundingDate": "2010",
                    "address": {
                      "@type": "PostalAddress",
                      "addressCountry": "US"
                    }
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://allsparktechnologies.com/#website",
                    "url": "https://allsparktechnologies.com",
                    "name": "AllSpark Technologies",
                    "publisher": {
                      "@id": "https://allsparktechnologies.com/#organization"
                    },
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "https://allsparktechnologies.com/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  },
                  {
                    "@type": "WebPage",
                    "@id": "https://allsparktechnologies.com/#webpage",
                    "url": "https://allsparktechnologies.com",
                    "name": "Custom Software Development Company & AI Solutions | AllSpark Technologies",
                    "description": "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@id": "https://allsparktechnologies.com/#website"
                    },
                    "about": {
                      "@id": "https://allsparktechnologies.com/#organization"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "What services does your software house offer?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "We provide custom software development services, mobile and web app development, AI-powered solutions, UI/UX design, full-stack software development, cloud computing, DevOps, and ongoing support. As a software development agency USA, we serve startups to enterprises."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How long does it take to develop a software product?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Timelines vary by project complexity. A basic MVP may take 3–6 months, while enterprise software may take 6–12 months. As an AI development company and SaaS development agency, we use agile processes to ensure rapid delivery."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Do you offer post-launch support and maintenance?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. We provide maintenance, updates, performance optimization, and security patches post-deployment. Our software development solutions are designed for long-term success."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What industries do you work with?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "We work across fintech, healthcare, logistics, real estate, e-commerce, education, and enterprise SaaS. We deliver tailored solutions for scalable digital growth."
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }),
        }}
      />
    </div>
  );
}
