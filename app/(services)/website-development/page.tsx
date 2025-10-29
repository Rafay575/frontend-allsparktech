import React from "react";
import WebDevelopment from "@/components/WebDevelopment";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "High-Performance Website Development Services in USA",
  description: "All Spark Technologies offers expert website development services in USA to boost your online presence and sales.",
  alternates: {
    canonical: "https://allsparktechnologies.com/website-development",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "website-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WebDevelopment service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/website-development#service",
            "name": "Website Development",
            "alternateName": "Professional Web Development Services",
            "serviceType": "Website Design and Development Services",
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
              },
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": [
                "Businesses",
                "Startups",
                "Enterprises"
              ]
            },
            "description": "Allspark Technologies offers professional website development services to help businesses build high-performing, responsive, and SEO-friendly websites. We turn your brand vision into a smooth, modern, and engaging online experience.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Development Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Website Design",
                    "description": "Create unique website layouts tailored to brand identity and user experience goals."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ecommerce Website Development",
                    "description": "Build secure and scalable online stores with smooth checkout and product management features."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CMS Website Development",
                    "description": "Develop flexible content management systems with WordPress, Shopify, or custom frameworks."
                  }
                }
              ]
            },
            "serviceOutput": "Fully responsive and user-friendly websites that enhance engagement, visibility, and conversions.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Companies and individuals looking for website design and development solutions"
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