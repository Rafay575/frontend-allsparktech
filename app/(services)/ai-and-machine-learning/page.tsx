import React from "react";
import AiAndMachineLearning from "@/components/AiAndMachineLearning";
export const dynamic = "force-dynamic";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "AI & Machine Learning Company in USA | All Spark",
  description: "Transform your business with AI & ML services by All Spark Technologies. Smarter, faster, future-ready solutions.",
  alternates: {
    canonical: "https://allsparktechnologies.com/ai-and-machine-learning",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "ai-and-machine-learning";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AiAndMachineLearning service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/ai-and-machine-learning#service",
            "name": "AI & Machine Learning Services",
            "alternateName": "Artificial Intelligence and Machine Learning Solutions",
            "serviceType": "AI & Machine Learning Services",
            "provider": {
              "@type": "Organization",
              "@id": "https://allsparktechnologies.com/#organization",
              "name": "Allspark Technologies",
              "url": "https://allsparktechnologies.com",
              "logo": "https://allsparktechnologies.com/images/footer-logo.svg",
              "sameAs": [
                "https://www.linkedin.com/company/all-spark-technologies",
                "https://www.facebook.com/allsparktechnologies.official",
                "https://www.instagram.com/allspark_technologies/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-616-308-1863",
                "contactType": "Customer Support",
                "areaServed": "US",
                "availableLanguage": "English"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": [
                "Businesses",
                "Startups",
                "Enterprises"
              ]
            },
            "description": "Allspark Technologies provides top-tier AI & machine learning services in the US. We build bespoke AI models, machine learning pipelines, NLP, computer vision and automation to help businesses scale and innovate.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI & ML Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Model Development",
                    "description": "Design and develop tailored AI models based on your unique data and business requirements."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Pipeline & MLOps",
                    "description": "Create end-to-end ML workflows, model training, deployment and monitoring at scale."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "NLP & Computer Vision Solutions",
                    "description": "Deliver natural language processing and computer vision systems to automate tasks and extract insights."
                  }
                }
              ]
            },
            "serviceOutput": "Actionable AI and ML systems that integrate seamlessly into business operations, enhance decision-making and drive growth.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Companies seeking AI and ML capabilities in the US"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://allsparktechnologies.com/contact",
              "availableLanguage": "English"
            }
          }
          ),
        }}
      />
    </HydrationBoundary>
  );
}