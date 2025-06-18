"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Correct import for App Directory
import HeroSection from "@/components/HeroSection";
import Card from "./Card";
import ServiceAccordion from "./ServiceAccordion";
import ApproachSection from "./ApproachSection";
import WhyChooseSection from "@/components/WhyChooseAST";
import ServicesContact from "./ServicesContact";
import TableOfContent from "./TableOfContent";
import Script from "next/script";
import {
  contentData1,
  contentData2,
  contentData3,
  contentData4,
  contentData5,
  contentData6,
  contentData7,
  contentData8,
  contentData9,
  contentData10,
} from "@/lib/data"; // Import all contentData
import { motion } from "framer-motion"; // Import framer-motion

type ServiceKey =
  | "custom-software-development"
  | "web-and-app-development"
  | "ai-and-machine-learning"
  | "cloud-and-devops-solutions"
  | "ui-ux-design"
  | "ecommerce-development"
  | "customer-support"
  | "email-marketing"
  | "live-chat-support"
  | "digital-marketing-and-seo";

  

export default function ServicesTabs() {
  const [contentData, setContentData] = useState(contentData3); // Default to contentData3
  const [mounted, setMounted] = useState(false); // State to track if mounted on the client
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams(); // Access query params using `useSearchParams`

  useEffect(() => {
    setMounted(true);
    setIsClient(true); // Set isClient to true once mounted
  }, []);

  useEffect(() => {
    if (!mounted || !isClient) return; // Skip logic if not yet mounted or not client

    const service = searchParams.get("service"); // Get the `service` query parameter using `useSearchParams`

    const contentMap: Record<ServiceKey, any> = {
      "custom-software-development": contentData1,
      "web-and-app-development": contentData2,
      "ai-and-machine-learning": contentData3,
      "cloud-and-devops-solutions": contentData4,
      "ui-ux-design": contentData5,
      "ecommerce-development": contentData6,
      "customer-support": contentData7,
      "email-marketing": contentData8,
      "live-chat-support": contentData9,
      "digital-marketing-and-seo": contentData10,
    };

    setContentData(contentMap[service as ServiceKey] || contentData3); // Set the appropriate contentData based on the service query
  }, [searchParams, mounted, isClient]); // Re-run effect when searchParams, mounted or isClient changes

  if (!mounted) return null; // If not mounted, return null
  console.log(contentData.metadata?.metadataBase?.href);

  return (
    <>
      <div>
        <HeroSection
          title={contentData.hero.title}
          backgroundImage={contentData.hero.backgroundImage}
          breadcrumbs={[
            {
              label: contentData.hero.breadcrumbs[0].label,
              href: contentData.hero.breadcrumbs[0].href,
            },
            {
              label: contentData.hero.breadcrumbs[1].label,
              href: contentData.hero.breadcrumbs[1].href,
            },
          ]}
        />
        <div className="w-full container max-w-7xl mx-auto px-4 md:px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Section: On Load Transition */}

          {/* Other Sections: Transition On View */}
          <div className="md:col-span-3">
            <section id="our-services">
              <motion.div
                // className="md:col-span-3"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                layout
              >
                <Card services={contentData.services} />
              </motion.div>
            </section>
            <motion.section
              id="our-approach"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <ApproachSection approach={contentData.approach} />
            </motion.section>

            <motion.section
              id="why-choose-ast"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <WhyChooseSection whyChoose={contentData.whyChoose} />
            </motion.section>

            <motion.section
              id="faqs"
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <ServiceAccordion faqs={contentData.faqs} />
            </motion.section>

            <motion.section
              id="contact"
              className="bg-[#2B4EFF] px-4 py-20 mb-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
            >
              <ServicesContact />
            </motion.section>
          </div>

          {/* Table of Contents: On View Transition */}
          <motion.aside
            className="hidden md:block"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            layout
          >
            <TableOfContent />
          </motion.aside>
          <Script
            id="ldjson"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(contentData.script),
            }}
          />
        </div>
      </div>
    </>
  );
}
