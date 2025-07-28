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
                  "@id": "https://allsparktechnologies.com/customer-support",
                  "url": "https://allsparktechnologies.com/customer-support",
                  "name": "Customer Support Services | AI Chatbots & Helpdesk Solutions",
                  "description": "AST provides expert customer support services including AI chatbots, live chat, CRM integration, ecommerce order support, and multilingual helpdesk solutions.",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Service",
                  "name": "Customer Support Services",
                  "serviceType": [
                    "Customer Support",
                    "Customer Care Outsourcing",
                    "Automated Customer Support",
                    "AI Chatbots",
                    "Live Chat Support",
                    "Helpdesk Software",
                    "CRM Integration",
                    "Knowledge Management",
                    "Technical Support"
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
                  "description": "Boost customer satisfaction with AST’s support services: live chat, AI chatbots, ecommerce support, CRM integration & more. Multichannel & multilingual.",
                  "url": "https://allsparktechnologies.com/customer-support"
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
                      "name": "Customer Support",
                      "item": "https://allsparktechnologies.com/customer-support"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why is customer support important for businesses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Excellent support builds brand loyalty, reduces churn, enhances reputation, and drives repeat business critical for sustainable growth."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can AI-powered chatbots improve customer support?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They offer fast, 24/7 assistance, manage routine tasks, and escalate complex issues to human agents, ensuring a smooth, responsive service experience."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What industries benefit from your support services?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We serve ecommerce, tech, healthcare, finance, and hospitality sectors with tailored, scalable support solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you measure support performance?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We track First Response Time, CSAT, Net Promoter Score, and resolution time, optimizing continuously with customer feedback and performance metrics."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can customer support be outsourced without losing quality?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our trained support agents and CRM-integrated systems deliver high-quality service while cutting operational costs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer multilingual support?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We offer multilingual customer support services to help global businesses serve diverse audiences effectively."
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
