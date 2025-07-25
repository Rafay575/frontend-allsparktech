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
                  "@id": "https://allsparktechnologies.com/email-marketing",
                  "url": "https://allsparktechnologies.com/email-marketing",
                  "name": "Email Marketing Services | Automation, Strategy & Analytics",
                  "description": "Boost ROI with AST's email marketing. Automated emails, ecommerce flows, analytics, and deliverability best practices that drive real business results.",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Email Marketing Services",
                  "serviceType": [
                    "Email Marketing",
                    "Email Automation",
                    "Ecommerce Email Campaigns",
                    "Transactional Emails",
                    "Email Strategy",
                    "Newsletter Design",
                    "Email Deliverability",
                    "Mailing Templates",
                    "AI Email Personalization"
                  ],
                  "provider": {
                    "@type": "Organization",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "description": "High-performance email campaigns with automation, analytics, segmentation, ecommerce flows, and mobile-optimized templates by AST.",
                  "url": "https://allsparktechnologies.com/email-marketing"
                },
                {
                  "@type": "BreadcrumbList",
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
                      "name": "Email Marketing",
                      "item": "https://allsparktechnologies.com/email-marketing"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why is email marketing important for businesses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Email marketing in digital marketing offers high ROI, strengthens customer relationships, and drives long-term revenue through targeted, personalized messaging."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What platforms do you support?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We work with Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Marketo, Constant Contact, and SendGrid offering the best mass email service for small businesses and enterprises alike."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I get started with email marketing?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We help you learn how to get an email list using gated content, signup forms, lead magnets, and social lead ads growing a clean, high-intent subscriber base."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can small businesses afford email marketing?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. AST builds affordable, automated email systems that deliver big results—ideal for startups and small businesses."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you measure success in email campaigns?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We monitor open rates, click-through rates, conversions, list growth, and unsubscribe rates. Our insights guide real-time optimizations and strategy adjustments."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you help design the emails too?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Our team builds responsive, branded mailing templates that reflect your voice, deliver your message, and convert readers into customers."
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
