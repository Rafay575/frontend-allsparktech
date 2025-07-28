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
      <div>
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
                    "@id": "https://allsparktechnologies.com/ai-and-machine-learning/",
                    "url": "https://allsparktechnologies.com/ai-and-machine-learning/",
                    "name": "AI Development Company | Custom AI & ML Solutions USA",
                    "description": "Partner with a top AI development company for custom solutions. Discover AI platforms, use cases & ML models tailored to your business needs.",
                    "inLanguage": "en",
                    "isPartOf": {
                      "@id": "https://allsparktechnologies.com"
                    }
                  },
                  {
                    "@type": "Organization",
                    "@id": "https://allsparktechnologies.com/#organization",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://testtest.libererllc.com/images/service/m1.webp"
                    },
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "638 Knollwood Road",
                      "addressLocality": "Franklin Lakes",
                      "addressRegion": "NJ",
                      "postalCode": "07417",
                      "addressCountry": "US"
                    },
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-616-308-1863",
                      "contactType": "Customer Support",
                      "areaServed": "US"
                    }
                  },
                  {
                    "@type": "Service",
                    "serviceType": [
                      "Custom AI Development",
                      "AI & ML Consulting",
                      "AI-Powered Automation",
                      "Natural Language Processing (NLP)",
                      "Computer Vision Systems",
                      "Predictive Analytics",
                      "AI Chatbots & Speech Recognition"
                    ],
                    "provider": {
                      "@id": "https://allsparktechnologies.com/#organization"
                    },
                    "areaServed": {
                      "@type": "Country",
                      "name": "United States"
                    },
                    "name": "AI & Machine Learning Development Services",
                    "description": "All Spark Technologies is an AI development company building scalable AI platforms, ML models, NLP, and automation across industries. Get secure and intelligent solutions from an experienced artificial intelligence consulting firm.",
                    "keywords": [
                      "artificial intelligence use cases",
                      "artificial intelligence consulting firm",
                      "ai platforms",
                      "uses of ai",
                      "ai development company",
                      "ai in logistics and supply chain",
                      "ai in the business world",
                      "how expensive is ai",
                      "apply machine learning",
                      "types of machine learning models"
                    ],
                    "url": "https://allsparktechnologies.com/ai-and-machine-learning/"
                  },
                  {
                    "@type": "FAQPage",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "Why should businesses invest in AI and machine learning?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "AI unlocks data-driven insights, automates tasks, and enhances productivity. These artificial intelligence use cases drive efficiency and innovation across industries."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How long does it take to develop an AI solution?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "It varies by data complexity and model type. AST provides a tailored roadmap covering types of machine learning models, timelines, and deliverables."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What industries benefit most from AI?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "AI in the business world benefits logistics, healthcare, finance, retail, and more. From AI platforms to chatbots and automation, opportunities are endless."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is AI development expensive?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "How expensive is AI depends on solution complexity. AST offers scalable pricing based on project size, integrations, and support needs."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can AI be added to existing software?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. As a seasoned AI development company, we specialize in seamless integrations that enhance your current platforms."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Do you provide post-launch support?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Absolutely. As a dedicated artificial intelligence consulting firm, we offer full lifecycle support from ideation to deployment and ongoing optimization."
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
      </div>
    </>
  );
}
