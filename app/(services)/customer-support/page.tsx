import React from "react";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import CustomerSupport from "@/components/CustomerSupport";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Customer Support Services for Reliable and Human-Centered Care",
  description: "Reliable 24/7 customer support services from All Spark Technologies to keep your customers happy.",
  alternates: {
    canonical: "https://allsparktechnologies.com/customer-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "customer-support";
  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CustomerSupport service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/customer-support#service",
            "name": "Customer Support Services",
            "alternateName": "Technical & Customer Support Outsourcing Services",
            "serviceType": "Customer Support & Tech-Enabled Services",
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
            "description": "Allspark Technologies offers comprehensive customer support and tech-enabled services in the US. Our team ensures customer satisfaction, live chat, email & phone support, outsourcing BPO services to enhance your brand experience.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Customer Support & BPO Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 Multichannel Customer Support",
                    "description": "Live chat, email, and phone support around the clock to handle your customer inquiries and issues."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Support & Helpdesk Services",
                    "description": "Tier-1 and Tier-2 technical support services to resolve customer issues quickly and efficiently."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Outsourced BPO & Back-Office Support",
                    "description": "Off-shore and near-shore back-office operations, data entry, order processing and customer communications."
                  }
                }
              ]
            },
            "serviceOutput": "Optimised customer experience and efficient resolution workflows that build brand loyalty and reduce operational costs.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Brands and companies looking for scalable customer support solutions in the US"
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