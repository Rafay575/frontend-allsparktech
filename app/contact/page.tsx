import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/HeroSection";
import Footer2 from "@/components/Footer2";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Contact AllSpark Technologies | Custom Software Development & AI Experts",
  description:
    "Get in touch with AllSpark Technologies, a US-based software development company. Call, email, or schedule a consultation with our software and AI experts today.",
  metadataBase: new URL("https://allsparktechnologies.com"),
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title:
      "Contact AllSpark Technologies | Custom Software Development & AI Experts",
    description:
      "Call, email, or schedule a consultation with our US-based software development and AI experts.",
    url: "https://allsparktechnologies.com/contact/",
    type: "website",
    siteName: "AllSpark Technologies",
    images: [
      {
        url: "https://allsparktechnologies.com/assets/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AllSpark",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact AllSpark Technologies | Custom Software Development & AI Experts",
    description:
      "Connect with a US-based software development company. Discuss your project, request a quote, or consult our AI and software experts.",
    images: ["https://allsparktechnologies.com/assets/contact-og.jpg"],
  },
};

const contactpage = () => {
  return (
    <>
      <Topnav />
      <Navbar2 />
      <HeroSection
        title="Contact Us"
        backgroundImage="breadcrum.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <Contact />
      <Footer2 />
      <Script
      id="ldjson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                mainEntity: {
                  "@type": "Organization",
                  name: "AllSpark Technologies",
                  url: "https://allsparktechnologies.com",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-762-777-7275",
                    email: "info@allsparktechnologies.com",
                    contactType: "Customer Support",
                    availableLanguage: "English",
                    areaServed: "US",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "638 Knollwood Road",
                    addressLocality: "Franklin Lakes",
                    addressRegion: "NJ",
                    postalCode: "07417",
                    addressCountry: "USA",
                  },
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default contactpage;
