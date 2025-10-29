import React from "react";
import Seo from "@/components/Seo";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "SEO Services Providing Agency in USA for Online Growth",
  description: "Rank higher and drive traffic with All Spark Technologies, a trusted SEO services company in USA.",
  alternates: {
    canonical: "https://allsparktechnologies.com/seo",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "seo";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Seo service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/seo#service",
            "name": "SEO Services",
            "alternateName": "Search Engine Optimization & Digital Marketing Services",
            "serviceType": "SEO & Digital Marketing Services",
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
            "description": "Allspark Technologies offers full-spectrum SEO and digital marketing services in the United States. From keyword research and on-page optimization to link building and analytics, we help brands increase organic visibility, drive traffic and convert audience into customers.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO & Digital Marketing Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical SEO Audit",
                    "description": "Comprehensive site audit covering crawlability, speed, indexing, canonicalisation and schema to ensure search-engine readiness."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "On-Page & Content SEO",
                    "description": "Keyword research, meta tags, headings, internal linking and content optimisation tailored for conversions and ranking growth."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Off-Page SEO & Link Building",
                    "description": "Authoritative backlinks, outreach campaigns and digital PR to strengthen your domain authority and organic visibility."
                  }
                }
              ]
            },
            "serviceOutput": "Improved organic search rankings, increased web traffic, higher online visibility and measurable ROI from SEO campaigns.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Companies seeking strategic SEO & digital marketing services in the US"
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