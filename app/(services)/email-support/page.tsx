import React from "react";
export const dynamic = "force-dynamic";


import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import EmailSupport from "@/components/EmailSupport";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Email Support Services for Fast and Personalized Responses",
  description: "Fast, friendly, and professional email support services that strengthen your customer trust.",
  alternates: {
    canonical: "https://allsparktechnologies.com/email-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "email-support";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EmailSupport service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/email-support#service",
            "name": "Email Support Services",
            "alternateName": "Email Customer Support & Back-Office Email Handling",
            "serviceType": "Email Support & Technical Email Assistance",
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
            "description": "Allspark Technologies provides dedicated email support services in the United States. Our team handles inbound customer emails, ticketing, response management, and back-office processing to help brands maintain high-quality email-based customer interactions.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Email Support Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 Email Customer Service",
                    "description": "Round-the-clock email support for customers, handling queries, complaints and general communication."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Email Support and Troubleshooting",
                    "description": "Dedicated email support for technical issues, providing guidance and ticket resolution via email."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Email Back-Office Processing & Ticket Management",
                    "description": "Email workflow management, order processing, CRM integration and reporting for email support operations."
                  }
                }
              ]
            },
            "serviceOutput": "Efficient and responsive email-based customer service operations that strengthen brand loyalty and reduce response times.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Brands and companies seeking professional email support services in the US"
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