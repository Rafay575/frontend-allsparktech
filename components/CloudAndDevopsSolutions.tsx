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
                  "@id": "https://allsparktechnologies.com/cloud-devops-solutions",
                  "url": "https://allsparktechnologies.com/cloud-devops-solutions",
                  "name": "Cloud & DevOps Solutions | CI/CD, Migration & Security Experts",
                  "description": "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
                  "inLanguage": "en",
                  "breadcrumb": {
                    "@id": "https://allsparktechnologies.com/cloud-devops-solutions#breadcrumb"
                  },
                  "isPartOf": {
                    "@id": "https://allsparktechnologies.com"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://allsparktechnologies.com/cloud-devops-solutions#breadcrumb",
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
                      "name": "Cloud & DevOps Solutions",
                      "item": "https://allsparktechnologies.com/cloud-devops-solutions"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://allsparktechnologies.com/#organization",
                  "name": "All Spark Technologies",
                  "url": "https://allsparktechnologies.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://testtest.libererllc.com/images/service/m4.webp"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/all-spark-technologies",
                    "https://www.facebook.com/allsparktechnologies.official",
                    "https://www.instagram.com/allspark_technologies/"
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
                    "areaServed": "US"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": [
                    "Cloud Strategy Consulting",
                    "DevOps Consulting",
                    "Cloud Management Software",
                    "CI/CD Pipeline Implementation",
                    "Infrastructure as Code",
                    "Cloud Security Compliance Services"
                  ],
                  "provider": {
                    "@id": "https://allsparktechnologies.com/#organization"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "name": "Cloud & DevOps Solutions",
                  "description": "All Spark Technologies provides cloud and DevOps solutions including CI/CD pipeline code, cloud migration strategy, security services, and agile development environments.",
                  "url": "https://allsparktechnologies.com/cloud-devops-solutions",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "keywords": [
                    "cloud strategy consulting",
                    "CI/CD pipeline code",
                    "DevOps tools",
                    "cloud migration strategy",
                    "infrastructure as code",
                    "cloud security compliance",
                    "DevOps consulting services",
                    "cloud management software"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why should businesses adopt cloud and DevOps solutions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They enhance performance, reduce operational costs, and offer automation. AST implements cloud solutions with CI/CD pipeline code and secure DevOps practices."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What tools are used in your DevOps strategy?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We integrate the latest DevOps tools like Jenkins, Docker, Terraform, and ADO DevOps, ensuring continuous delivery in an agile development environment."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you handle cloud security and compliance?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We use automated audits, encryption, IAM, and meet cloud security compliance standards with our cloud computing security services."
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
