import React from "react";
import EcommerceDevelopment from "@/components/EcommerceDevelopment";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Ecommerce Development Services in USA for Business Growth",
  description: "Grow online sales with All Spark Technologies. Expert ecommerce development services for modern brands.",
  alternates: {
    canonical: "https://allsparktechnologies.com/ecommerce-development",
  }
}

export default async function Page() {
  const queryClient = new QueryClient();
  const service = "ecommerce-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EcommerceDevelopment service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/ecommerce-development#service",
            "name": "Ecommerce Development",
            "alternateName": "Ecommerce Website & Online Store Development Services",
            "serviceType": "Ecommerce Development Services",
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
            "description": "Allspark Technologies offers full-cycle ecommerce development services in the US. We build secure, scalable, and high-performance online stores and digital commerce platforms that drive growth and conversions.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ecommerce Development Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Online Store Development",
                    "description": "Build bespoke ecommerce websites tailored to your brand, product catalog & business strategy."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Platform Migration & Integration",
                    "description": "Migrate your current store to a modern ecommerce platform and integrate systems like CRM, ERP and payment gateways."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Headless & Scalable Ecommerce Architecture",
                    "description": "Design and implement headless-commerce or scalable commerce platforms for flexibility, speed and growth."
                  }
                }
              ]
            },
            "serviceOutput": "A fully functional, optimized ecommerce platform ready for traffic, conversions and long-term growth.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Companies seeking advanced ecommerce development services in the US"
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