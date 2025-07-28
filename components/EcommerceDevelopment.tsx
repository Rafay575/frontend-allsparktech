"use client";
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
                  "@id": "https://allsparktechnologies.com/ecommerce-development",
                  "url": "https://allsparktechnologies.com/ecommerce-development",
                  "name": "Ecommerce Website Development Services | Custom eCommerce Design",
                  "description": "All Spark Technologies offers ecommerce website development services including mobile-first design, SEO optimization, ecommerce security, custom features, and multi-vendor platforms.",
                  "isPartOf": {
                    "@type": "WebSite",
                    "url": "https://allsparktechnologies.com",
                    "name": "All Spark Technologies"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Service",
                  "name": "Ecommerce Website Development Services",
                  "serviceType": [
                    "Ecommerce Website Development",
                    "Ecommerce Website Design",
                    "Custom eCommerce Platforms",
                    "Ecommerce SEO",
                    "Mobile Ecommerce",
                    "Headless Ecommerce",
                    "Multi-Vendor Ecommerce",
                    "Ecommerce Optimization",
                    "Ecommerce Security"
                  ],
                  "description": "Launch and scale your ecommerce business with All Spark Technologies. From custom storefronts to SEO, mobile-first design, security, and CRM integrations. we build ecommerce websites designed to convert.",
                  "provider": {
                    "@type": "Organization",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "url": "https://allsparktechnologies.com/ecommerce-development"
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
                      "name": "Ecommerce Development",
                      "item": "https://allsparktechnologies.com/ecommerce-development"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why should I choose a custom ecommerce website instead of a platform like Shopify or WooCommerce?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A custom ecommerce website offers full control over branding, performance, and security. It supports unique features and lower long-term costs by eliminating recurring fees from third-party platforms."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does it take to develop an ecommerce store?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Platform-based stores take 4–6 weeks, while fully custom ecommerce development projects can range from 3–6 months depending on complexity and integrations."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What factors affect the cost of ecommerce development?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Cost varies based on ecommerce platform choice, required features, custom UI/UX, third-party integrations, and security measures such as PCI compliance."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Will my ecommerce store be mobile-friendly?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. All our ecommerce websites are designed mobile-first, ensuring seamless user experiences, smooth navigation, and fast checkouts across all devices."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I integrate third-party tools like CRM and ERP systems into my ecommerce store?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We integrate ecommerce systems with CRM, ERP, shipping, accounting, and other business tools to ensure a unified and efficient backend."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you ensure security in ecommerce transactions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We implement SSL encryption, PCI-DSS compliance, fraud detection tools, and secure payment gateways to protect your store and build customer trust."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you help optimize my store for better conversions and SEO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our ecommerce development services include experto SEO, UX/UI optimization, conversion rate optimization (CRO), and marketing automation tools to increase traffic and sales."
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
