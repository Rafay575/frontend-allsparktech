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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Web & App Development Company",
                "url": "https://allsparktechnologies.com/web-and-app-development",
                "description": "Build scalable, secure web & mobile apps with top web app development experts. Custom PWAs, SaaS, and startup solutions. Get started today.",
                "inLanguage": "en-US",
                "mainEntity": {
                  "@type": "Service",
                  "name": "Web & App Development",
                  "serviceType": "Custom Web App Development, SaaS Solutions, Enterprise App Development, PWAs, E-commerce Platforms",
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "provider": {
                    "@type": "Organization",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://allsparktechnologies.com/images/logo.svg"
                    },
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-616-308-1863",
                      "contactType": "Customer Service",
                      "areaServed": "US"
                    },
                    "sameAs": [
                      "https://www.linkedin.com/company/all-spark-technologies",
                      "https://www.facebook.com/allsparktechnologies.official",
                      "https://www.instagram.com/allsparktechnologies"
                    ]
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why should I choose a custom web application over a template-based solution?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Custom web applications offer unmatched flexibility, seamless integration, superior performance, security, and long-term scalability tailored to your business."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to develop a web application?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Timelines depend on complexity, design, integrations, and testing. We offer a detailed roadmap outlining each phase and expected duration."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What factors influence the cost of web app development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Key cost factors include the technology stack, number of features, UI/UX complexity, integrations, and security requirements. We provide transparent estimates."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will my web application be mobile-friendly?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All our web apps are responsive and optimized for seamless performance across all devices."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I request features after launch?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Our applications are designed to be scalable, allowing post-launch feature updates and enhancements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you ensure transparency during development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We follow Agile methodology with regular sprint demos, open communication, and milestone tracking to keep you informed."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
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
                    "name": "Services",
                    "item": "https://allsparktechnologies.com/services/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Web & App Development",
                    "item": "https://allsparktechnologies.com/web-and-app-development"
                  }
                ]
              }
            ]
            ),
          }}
        />
      )}
      <Footer2 />
    </>
  );
}
