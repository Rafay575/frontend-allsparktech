import React from "react";
import DigitalMarketing from "@/components/DigitalMarketing";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Digital Marketing Services in USA for ROI Driven Results",
  description: "Boost your brand online with All Spark Technologies. Smart digital marketing services for USA businesses.",
  alternates: {
    canonical: "https://allsparktechnologies.com/digital-marketing",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "digital-marketing";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DigitalMarketing service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/digital-marketing#service",
            "name": "Digital Marketing Services",
            "alternateName": "Digital Marketing & Online Growth Services",
            "serviceType": "Digital Marketing Services",
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
            "description": "Allspark Technologies offers full-spectrum digital marketing services in the United States, including SEO, content marketing, social advertising, analytics and growth strategies to increase your online visibility and conversions.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Search Engine Optimisation (SEO)",
                    "description": "Improve your website’s visibility in organic search, optimise content, structure and backlinks."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Paid Social & Search Advertising",
                    "description": "Run targeted ad campaigns across social media and search engines to reach your ideal audience quickly."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Marketing & Analytics",
                    "description": "Create high-quality content and track effectiveness through data and insights to drive long-term growth."
                  }
                }
              ]
            },
            "serviceOutput": "Enhanced online presence, increased traffic, stronger lead generation and measurable ROI from digital efforts.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Businesses and brands looking for strategic digital marketing services in the US"
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