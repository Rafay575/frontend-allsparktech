import React from "react";
import MobileAppDevelopment from "@/components/MobileAppDevelopment";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Mobile App Development Company in USA | Android & iOS",
  description: "Create high-performing mobile apps with All Spark Technologies. Trusted app development services in USA.",
  alternates: {
    canonical: "https://allsparktechnologies.com/mobile-app-development",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "mobile-app-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MobileAppDevelopment service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/mobile-app-development#service",
            "name": "Mobile App Development",
            "alternateName": "Custom Mobile Application Development Services",
            "serviceType": "Mobile App Design and Development",
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
            "description": "Allspark Technologies delivers custom mobile app development services for iOS and Android platforms. Our expert team builds fast, secure, and user-friendly mobile applications that drive engagement and growth for businesses in the United States.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile App Development Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iOS App Development",
                    "description": "Design and develop smooth, high-performance iPhone and iPad apps built for Apple’s ecosystem."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Android App Development",
                    "description": "Develop robust Android apps optimized for performance and compatibility across devices."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cross-Platform App Development",
                    "description": "Create mobile apps that work seamlessly on both iOS and Android using modern frameworks like Flutter and React Native."
                  }
                }
              ]
            },
            "serviceOutput": "High-performing mobile applications built for scalability, speed, and user satisfaction.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Companies and startups seeking mobile app design and development in the US"
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