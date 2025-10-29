import UiUxDesign from "@/components/UiUxDesign";


import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "UI UX Design Services in USA for Innovative User Experiences",
  description: "All Spark Technologies creates stunning UI UX designs that improve user experience and boost engagement.",
  alternates: {
    canonical: "https://allsparktechnologies.com/ui-ux-design",
  }
}

export default async function Page() {
  const queryClient = new QueryClient();
  const service = "ui-ux-design";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UiUxDesign service={service} />
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://allsparktechnologies.com/ui-ux-design#service",
            "name": "UI & UX Design",
            "alternateName": "User Interface and User Experience Design Services",
            "serviceType": "UI/UX Design Services",
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
            "description": "Allspark Technologies offers UI & UX design services that create intuitive, visually engaging and user-friendly digital experiences. We help brands stand out and users stay engaged.",
            "termsOfService": "https://allsparktechnologies.com/terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "UI & UX Design Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "User Interface Design",
                    "description": "Craft clean, modern interfaces that align with brand identity and enhance usability."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "User Experience Design",
                    "description": "Develop intuitive flows, engaging interactions and optimized journeys for your users."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Design System Development",
                    "description": "Create scalable design systems and component libraries that support growth and consistency."
                  }
                }
              ]
            },
            "serviceOutput": "Engaging, user-centric digital experiences that reflect your brand and drive conversions.",
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "Brands and companies looking for standout UI/UX design in the US"
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