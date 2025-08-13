"use client";

import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Hero2Section from "@/components/Hero2Section";
import Footer2 from "@/components/Footer2";
import Contact from "@/components/Contact";
import Script from "next/script";
import { baseURL } from "@/API/baseURL";

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface ContactPageData {
  heroimg: string;
  title: string;
  description: string;
  methods: ContactMethod[];
  metadata: any; // simplified for flexibility
  script: any;   // simplified for flexibility
}


const ContactPageClient = ({ contactData }: { contactData: ContactPageData }) => {
  return (
    <>
      <Topnav />
      <Navbar2 />
      <Hero2Section
        title="Contact"
        backgroundImage={`${baseURL}/images/contact/${contactData.heroimg}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <Contact pagedata={contactData}/>
      <Footer2 />
      <Script
        id="ldjson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactData.script),
        }}
      />
    </>
  );
};

export default ContactPageClient;
