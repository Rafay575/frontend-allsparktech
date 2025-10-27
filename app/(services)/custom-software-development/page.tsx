import React from "react";
import CustomSoftwareDevelopment from "@/components/CustomSoftwareDevelopment";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom Software Development Company in USA",
  description: "Build powerful custom software with All Spark Technologies. Top development services in USA for smart business growth.",
  alternates: {
    canonical: "https://allsparktechnologies.com/custom-software-development",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "custom-software-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));
  console.log("hello")

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CustomSoftwareDevelopment service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/custom-software-development#service",
            "name": "Custom Software Development",
            "alternateName": "Tailored Software Solutions for Businesses",
            "serviceType": "Custom Software Development Services",
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
            "areaServed": [
              {
                "@type": "Country",
                "name": "United States"
              }
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": [
                "Businesses",
                "Startups",
                "Enterprises"
              ]
            },
            "description": "Allspark Technologies provides custom software development services designed to meet unique business goals. We help companies create secure, scalable, and high-performing software that supports digital transformation and growth.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom Software Development Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Software Development",
                    "description": "Design and development of large-scale enterprise systems for better integration and productivity."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Software Modernization",
                    "description": "Upgrade legacy applications with modern frameworks and cloud-native solutions."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "API Integration",
                    "description": "Seamless connection of third-party APIs and internal systems to improve workflow automation."
                  }
                }
              ]
            },
            "serviceOutput": "High-performance, scalable, and customized software applications built to client requirements.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Companies looking for tailored software solutions"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://allsparktechnologies.com/contact",
              "availableLanguage": "English"
            }
          }),
        }}
      />
    </HydrationBoundary>
  );
}

