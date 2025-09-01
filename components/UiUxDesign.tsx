"use client";
import React from "react";
// Components
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

export interface subservices{
  id:number,
  slug:string,
  service:string,
  json:any,
}

interface ServicesTabsComponentProps {
  serviceData: serviceData;
  subServices: subservices[];
}


export default function CustomSoftwareDevelopment({serviceData,subServices}:ServicesTabsComponentProps) {

  return (
    <>
      <Topnav />
      <Navbar2 />
      <h1 className="hidden">UI/UX Design</h1>
      <ServicesTabs data={serviceData}  subServices={subServices}  />
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
                  "@id": "https://allsparktechnologies.com/ui-ux-design#webpage",
                  "url": "https://allsparktechnologies.com/ui-ux-design",
                  "name": "UI/UX Design Services | Website Interface Design Experts",
                  "description": "Boost engagement with expert UI/UX design. Explore our design case studies, portfolios, and research-driven methods that power seamless digital experiences.",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://allsparktechnologies.com/#website"
                  },
                  "breadcrumb": {
                    "@id": "https://allsparktechnologies.com/ui-ux-design#breadcrumb"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://testtest.libererllc.com/images/service/m9.webp"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://allsparktechnologies.com/#website",
                  "url": "https://allsparktechnologies.com",
                  "name": "All Spark Technologies",
                  "publisher": {
                    "@id": "https://allsparktechnologies.com/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://allsparktechnologies.com/#organization",
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
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "638 Knollwood Road",
                    "addressLocality": "Franklin Lakes",
                    "addressRegion": "NJ",
                    "postalCode": "07417",
                    "addressCountry": "US"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/allsparktechnologies",
                    "https://www.facebook.com/allsparktechnologies.official",
                    "https://www.instagram.com/allspark_technologies/"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://allsparktechnologies.com/ui-ux-design#service",
                  "name": "UI/UX Design Services",
                  "url": "https://allsparktechnologies.com/ui-ux-design",
                  "description": "All Spark Technologies offers UI/UX design services including UX research, UI design, prototyping, and usability audits. Enhance digital experience with our expert solutions.",
                  "provider": {
                    "@id": "https://allsparktechnologies.com/#organization"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "serviceType": "User Experience & User Interface Design",
                  "category": "UI/UX Design",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "UI/UX Design Solutions",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "User Experience (UX) Design",
                          "description": "User-centered design including research, personas, and usability testing."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "User Interface (UI) Design",
                          "description": "Modern, pixel-perfect interface design based on brand identity and UI inspiration."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Web & Mobile App Design",
                          "description": "Cross-platform, responsive UI/UX for websites, PWAs, and mobile applications."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Wireframing & Prototyping",
                          "description": "Interactive wireframes and high-fidelity prototypes to visualize functionality."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Design Systems & Branding",
                          "description": "Reusable components, scalable UI assets, and brand-aligned styling guides."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Usability Testing & UX Audits",
                          "description": "Comprehensive performance, behavior analysis, and accessibility audits."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://allsparktechnologies.com/ui-ux-design#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://allsparktechnologies.com/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "UI/UX Design",
                      "item": "https://allsparktechnologies.com/ui-ux-design"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why is UI/UX design important for my business?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A well-designed UI/UX experience boosts user engagement and retention, enabling users to easily navigate and convert."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does the UI/UX design process take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The timeline depends on the project's complexity. Typically, it ranges from 4 to 12 weeks based on scope and iteration rounds."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you redesign an existing website or app?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we specialize in redesigning websites and apps to improve usability, performance, and aesthetics through proven design methodologies."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What industries do you specialize in for UI/UX design?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We serve SaaS, healthcare, fintech, ecommerce, and more, providing solutions tailored to each sector’s user behavior and interface needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide design systems for long-term scalability?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we build modular, reusable design systems with style guides, component libraries, and scalable branding strategies."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you ensure design aligns with brand identity?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We work closely with your team, referencing brand materials, UI inspiration sources, and applying consistency through design systems."
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
