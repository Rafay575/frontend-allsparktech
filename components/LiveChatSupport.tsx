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
      <h1 className="hidden">Live Chat Support</h1>
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
                  "@id": "https://allsparktechnologies.com/live-chat-support#webpage",
                  "url": "https://allsparktechnologies.com/live-chat-support",
                  "name": "Live Chat Support Services | 24/7 AI & Human Chat Solutions",
                  "description": "Enhance engagement with AST’s live chat services: 24/7 support, AI chatbots, CRM integration, and ecommerce chat. Secure, fast, and cost-effective.",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://allsparktechnologies.com/#website",
                    "name": "All Spark Technologies",
                    "url": "https://allsparktechnologies.com"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://testtest.libererllc.com/images/service/m8.webp"
                  },
                  "breadcrumb": {
                    "@id": "https://allsparktechnologies.com/live-chat-support#breadcrumb"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://allsparktechnologies.com/live-chat-support#breadcrumb",
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
                      "name": "Live Chat Support",
                      "item": "https://allsparktechnologies.com/live-chat-support"
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
                    "url": "https://allsparktechnologies.com/images/logo.svg"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/all-spark-technologies",
                    "https://www.facebook.com/allsparktechnologies.official",
                    "https://www.instagram.com/allspark_technologies/"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://allsparktechnologies.com/live-chat-support#service",
                  "name": "Live Chat Support Services",
                  "description": "24/7 live chat support with AI chatbots and human agents. Ecommerce-ready website chat, CRM integrations, multilingual support, and scalable pricing.",
                  "serviceType": [
                    "Live Chat Support",
                    "24/7 Customer Chat",
                    "AI Chatbot Integration",
                    "CRM Chat Integration",
                    "Real-Time Technical Support",
                    "Ecommerce Live Chat",
                    "Website Chat for Lead Generation",
                    "Multilingual Customer Chat",
                    "Affordable Live Chat Software",
                    "HIPAA, GDPR, PCI DSS Compliant Live Chat"
                  ],
                  "provider": {
                    "@id": "https://allsparktechnologies.com/#organization"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Live Chat Solutions",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "24/7 Human Chat Support",
                          "description": "Real-time human chat agents available round the clock to serve your customers globally."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI-Powered Chatbots",
                          "description": "Automated bots for FAQs, lead qualification, and hybrid chat escalation to live agents."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Ecommerce Chat Support",
                          "description": "Conversion-focused chat features: product suggestions, cart recovery, and refund guidance."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Technical IT Helpdesk Chat",
                          "description": "Live diagnostics, troubleshooting, and remote IT assistance through live chat."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "CRM & Analytics Integration",
                          "description": "Connect chat to HubSpot, Salesforce, Zendesk, Freshdesk and monitor performance KPIs."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://allsparktechnologies.com/live-chat-support#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why is live chat support important for businesses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Live chat provides immediate responses, minimizes wait times, enhances customer experiences, and increases conversion rates improving brand loyalty and satisfaction."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can live chat help with lead generation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. AST’s proactive triggers, CRM sync, and AI profiling turn visitors into leads capturing information and guiding users through personalized chat funnels."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What platforms can your live chat be integrated with?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We integrate with Intercom, Drift, LiveChat, Zendesk Chat, Tidio, and more, depending on your business needs and budget."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is your live chat support scalable for growing businesses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, AST’s live chat service scales from small startups to global enterprises, offering flexible packages and automation."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you ensure chat security and compliance?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our systems use SSL encryption and follow data privacy standards like GDPR, HIPAA, and PCI DSS to ensure safe, compliant communication."
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
