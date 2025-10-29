import React from "react";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import LiveChatSupport from "@/components/LiveChatSupport";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Live Chat Support Services for Instant and Real-Time Help",
  description: "Engage customers in real time with All Spark Technologies’ live chat support for instant help.",
  alternates: {
    canonical: "https://allsparktechnologies.com/live-chat-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "live-chat-support";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LiveChatSupport service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/live-chat-support#service",
            "name": "Live Chat Support Services",
            "alternateName": "24/7 Live Chat Customer Support",
            "serviceType": "Live Chat & Online Customer Support Services",
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
                "Enterprises",
                "Startups"
              ]
            },
            "description": "Allspark Technologies offers responsive live chat support services in the United States. Our team handles real-time chat, messaging, and online assistance to enhance customer satisfaction, reduce response times and strengthen brand trust.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Live Chat Support Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 Live Chat Customer Service",
                    "description": "Constant live chat availability across web channels to answer customer queries, troubleshooting and purchasing assistance."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Live Chat Technical Support",
                    "description": "Live chat support focused on technical issues and immediate resolution through chat conversations."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Live Chat Lead & Sales Support",
                    "description": "Proactive live chat outreach for lead capture, engagement and conversion during browsing sessions."
                  }
                }
              ]
            },
            "serviceOutput": "Faster response, higher customer engagement and improved conversion through live chat interactions.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Brands and companies looking for live chat support in the US"
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