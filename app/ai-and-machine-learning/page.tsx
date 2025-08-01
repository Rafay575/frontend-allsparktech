
import AiAndMachineLearning from "@/components/AiAndMachineLearning";

import { baseURL } from "@/API/baseURL";
import axios from "axios";
import  Script from "next/script";

export async function generateMetadata() {
  return {
    title: "AI Development Company | Custom AI & ML Solutions USA",
    description:
      "Partner with a top AI development company for custom solutions. Discover AI platforms, use cases & ML models tailored to your business needs.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/ai-and-machine-learning",
    },
    openGraph: {
      title: "AI Development Company | Custom AI & ML Solutions USA",
      description:
        "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
      url: "https://allsparktechnologies.com/ai-and-machine-learning",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/images/ai-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AI & ML Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Development Company | Custom AI & ML Solutions USA",
      description:
        "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
      images: [
        "https://allsparktechnologies.com/assets/images/ai-og-image.jpg",
      ],
    },
  };
}

async function fetchServiceData() {
  const service = "ai-and-machine-learning";
  try {
    const res = await axios.post(`${baseURL}/service`, { name: service }, { headers: { "Cache-Control": "no-store" } });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}

export default async function Page() {
  const serviceData = await fetchServiceData();
  return (<>
  <AiAndMachineLearning serviceData={serviceData} />
    <Script
            id="w-1"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": "https://allsparktechnologies.com/ai-and-machine-learning#webpage",
                    "url": "https://allsparktechnologies.com/ai-and-machine-learning",
                    "name": "AI Development Company | Custom AI & ML Solutions USA",
                    "description": "Partner with a top AI development company for custom solutions. Discover AI platforms, use cases & ML models tailored to your business needs.",
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@id": "https://allsparktechnologies.com/#website"
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
                    },
                    "sameAs": [
                      "https://www.linkedin.com/company/all-spark-technologies",
                      "https://www.facebook.com/allsparktechnologies.official",
                      "https://www.instagram.com/allspark_technologies/"
                    ]
                  },
                  {
                    "@type": "Service",
                    "@id": "https://allsparktechnologies.com/ai-and-machine-learning#service",
                    "name": "AI & Machine Learning Development Services",
                    "description": "All Spark Technologies is an AI development company building scalable AI platforms, ML models, NLP, and automation across industries. Get secure and intelligent solutions from an experienced artificial intelligence consulting firm.",
                    "provider": {
                      "@id": "https://allsparktechnologies.com/#organization"
                    },
                    "areaServed": {
                      "@type": "Country",
                      "name": "United States"
                    },
                    "serviceType": [
                      "Custom AI Development",
                      "AI & ML Consulting",
                      "AI-Powered Automation",
                      "Natural Language Processing (NLP)",
                      "Computer Vision Systems",
                      "Predictive Analytics",
                      "AI Chatbots & Speech Recognition"
                    ],
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
                    "url": "https://allsparktechnologies.com/ai-and-machine-learning"
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://allsparktechnologies.com/ai-and-machine-learning#faq",
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
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": "https://allsparktechnologies.com/ai-and-machine-learning#breadcrumb",
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
                        "name": "AI & Machine Learning",
                        "item": "https://allsparktechnologies.com/ai-and-machine-learning"
                      }
                    ]
                  }
                ]
              }
              ),
            }}
          />
  </>
);
}
