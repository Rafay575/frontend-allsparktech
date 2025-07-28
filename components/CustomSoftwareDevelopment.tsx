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
      
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://allsparktechnologies.com/#organization",
                  "name": "AllSpark Technologies",
                  "url": "https://allsparktechnologies.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://allsparktechnologies.com/images/logo.svg"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/all-spark-technologies",
                    "https://www.facebook.com/allsparktechnologies.official"
                  ],
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
                    "areaServed": "US",
                    "availableLanguage": ["English"]
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://allsparktechnologies.com/custom-software-development#webpage",
                  "url": "https://allsparktechnologies.com/custom-software-development",
                  "name": "Custom Software Development | Bespoke Dev Services NYC",
                  "description": "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
                  "inLanguage": "en",
                  "isPartOf": {
                    "@id": "https://allsparktechnologies.com/#website"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://testtest.libererllc.com/images/service/m3.webp"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": [
                    "Custom Software Development",
                    "Bespoke Software Development",
                    "Enterprise Software Development",
                    "System Integration",
                    "Custom API Development",
                    "Product Development",
                    "Digital Transformation",
                    "Agile Software Development"
                  ],
                  "provider": {
                    "@id": "https://allsparktechnologies.com/#organization"
                  },
                  "audience": {
                    "@type": "Audience",
                    "audienceType": [
                      "Retail Business Owners",
                      "Enterprise IT Managers",
                      "Healthcare Providers",
                      "Fintech Startups",
                      "SaaS Companies"
                    ]
                  },
                  "areaServed": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressCountry": "US"
                    }
                  },
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://allsparktechnologies.com/custom-software-development",
                    "availableLanguage": ["English"]
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "Variable",
                      "priceCurrency": "USD"
                    },
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why should I opt for custom software instead of ready-made solutions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Custom software aligns precisely with your workflows, offering better performance, flexibility, and cost-efficiency over time. AST’s custom development ensures unique features tailored to your business—ideal for industries like finance, retail, healthcare, and more."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does custom software development take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Project timelines vary. A small MVP might take 3–4 months, while enterprise-grade software for retail shops or SaaS platforms may require 6–12 months. AST provides a clear roadmap at the start of every project."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What determines the cost of custom software development?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pricing depends on the tech stack, feature set, integrations, and overall scope. We provide detailed quotes and transparent breakdowns to match your needs and budget."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I modify my software later?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Our solutions are built for evolution. Whether scaling a product or integrating third-party APIs, we ensure flexibility and future-ready architecture."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Will I have control over the development process?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. With AST, you’ll work alongside your dedicated software developer in NYC and participate in every sprint. Our client-first approach ensures complete visibility from design to delivery."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you have software development case studies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we’ve worked across industries. Contact us to request software development case studies related to your domain or technology preference."
                      }
                    }
                  ]
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
                }
              ]
            }
            ),
          }}
        />
    
      <Footer2 />
    </>
  );
}
