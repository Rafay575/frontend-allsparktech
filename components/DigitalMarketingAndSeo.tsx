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
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://allsparktechnologies.com/digital-marketing-and-seo",
                  "url": "https://allsparktechnologies.com/digital-marketing-and-seo",
                  "name": "Digital Marketing Services | SEO & Content Marketing Experts",
                  "description": "Boost your online presence with All Spark Technologies digital marketing services. SEO, content, PPC, and ecommerce strategies for real business growth.",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://allsparktechnologies.com/#website",
                    "name": "All Spark Technologies"
                  },
                  "breadcrumb": {
                    "@id": "https://allsparktechnologies.com/digital-marketing-and-seo#breadcrumb"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://testtest.libererllc.com/images/service/m5.webp"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://allsparktechnologies.com/digital-marketing-and-seo#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://allsparktechnologies.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Digital Marketing & SEO",
                      "item": "https://allsparktechnologies.com/digital-marketing-and-seo"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "name": "Digital Marketing & SEO Services",
                  "description": "All Spark Technologies offers full-service digital marketing: SEO, content marketing, PPC, ecommerce SEO, social media management, reputation management, and conversion optimization.",
                  "provider": {
                    "@type": "Organization",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://allsparktechnologies.com/images/logo.svg"
                    },
                    "sameAs": [
                      "https://www.linkedin.com/company/all-spark-technologies",
                      "https://www.facebook.com/allsparktechnologies.official"
                    ]
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "serviceType": [
                    "Digital Marketing Services",
                    "SEO and Content Marketing",
                    "Ecommerce SEO",
                    "PPC Advertising",
                    "Local SEO Consulting",
                    "SEO Audit",
                    "Search Engine Optimization Tags",
                    "Conversion Optimization",
                    "Voice Search Optimization",
                    "Chatbot Integration Services"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Marketing Solutions",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "SEO Services",
                          "description": "On-page SEO, link building, technical audits, and local optimization for search engine visibility."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "PPC & Paid Media",
                          "description": "Paid advertising on Google Ads, Amazon, Meta, optimized for ROI and conversion performance."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Content Marketing",
                          "description": "SEO content strategies including blog writing, video content, landing pages, and storytelling for conversions."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Social Media Marketing",
                          "description": "Strategy, management, and paid media for platforms like Facebook, Instagram, and LinkedIn."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Conversion Rate Optimization",
                          "description": "UX improvements, A/B testing, and performance optimization to increase on-site conversions."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Voice Search & AI SEO",
                          "description": "AI-optimized SEO strategies for voice search queries, NLP, chatbot integration, and intelligent search ranking."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why is digital marketing important for businesses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It increases visibility, attracts the right audience, and boosts conversions across multiple channels using SEO, paid media, and content-driven engagement."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does it take to see SEO results?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most businesses see visible results within 3–6 months depending on keyword competition and adherence to best practices like regular audits and optimization tags."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Which is better: SEO or PPC?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "PPC delivers immediate results; SEO delivers lasting value. A hybrid approach ensures both short- and long-term visibility."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I manage digital marketing on my own?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can but without strategy or tools, it’s hard to compete. AST offers expert-managed campaigns, from consulting to full-stack SEO."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer ecommerce digital marketing services?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We specialize in ecommerce SEO, retargeting, and Google Shopping Ads tailored to boost online store conversions."
                      }
                    }
                  ]
                }
              ]
            }
            ),
          }}
        />
      )}
      <Footer2 />
    </>
  );
}
