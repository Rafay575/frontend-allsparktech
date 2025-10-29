import React from "react";;
import TaxiSupport from "@/components/TaxiSupport";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Taxi Support Services for Efficient Ride Management.",
  description: "End-to-end taxi support solutions to manage rides, drivers, and customers with ease.",
  alternates: {
    canonical: "https://allsparktechnologies.com/taxi-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "taxi-support";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TaxiSupport service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "@id": "https://allsparktechnologies.com/taxi-support#service",
            "name": "Taxi Support Services",
            "alternateName": "Professional Taxi Booking & Driver Coordination Support",
            "serviceType": "Taxi Support & Fleet Assistance Services",
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
                "Taxi Companies",
                "Fleet Operators",
                "Transport Businesses"
              ]
            },
            "description": "Allspark Technologies delivers dedicated taxi support services including bookings, driver coordination, and real-time customer assistance to help fleets operate smoothly and improve passenger satisfaction.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Taxi Support Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Booking & Dispatch Support",
                    "description": "Manage ride bookings and dispatch vehicles efficiently for better coverage and fewer missed rides."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Driver Communication & Coordination",
                    "description": "Real-time driver support to ensure timely pick-ups, cancellations handling and smoother fleet operations."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Customer Query & Complaint Handling",
                    "description": "24/7 support for passenger inquiries, feedback and dispute resolution to uphold service reliability."
                  }
                }
              ]
            },
            "serviceOutput": "Streamlined fleet operations and improved rider experience through managed taxi support services.",
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