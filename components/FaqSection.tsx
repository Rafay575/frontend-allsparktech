"use client"; // Required for Next.js App Router

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FaqSection() {
  return (
    <section className="py-16" id="faq-section">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-full max-w-md">
          {/* ───────── main photo ───────── */}
          <div className="relative overflow-hidden rounded-3xl w-full h-auto">
            <Image
              src="/images/aboutThumb1_1-2.png"
              alt="Team Working"
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
              unoptimized
            />
          </div>

          {/* ───────── bottom-right overlay ───────── */}
          <div className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-35px] sm:right-[-40px] w-[200px] h-[200px]">
            <Image
              src="/images/aboutThumb1_1-sub-section-2.png"
              alt="Team Discussion"
              fill
              sizes="100px"
              className="object-contain"
              unoptimized
            />
          </div>

          {/* ───────── spinning shape ───────── */}
          <div
             className="absolute top-0 right-0 w-12 h-12 [@media(min-width:375px)]:w-14 [@media(min-width:375px)]:h-14 [@media(min-width:425px)]:w-16 [@media(min-width:425px)]:h-16  [@media(min-width:768px)]:w-16 [@media(min-width:768px)]:h-16 [@media(min-width:1024px)]:w-20 [@media(min-width:1024px)]:h-20 [@media(min-width:1280px)]:!w-[80px]  [@media(min-width:1280px)]:!h-[80px]  flex items-center justify-center rounded-full border-2 border-white text-white text-xs uppercase tracking-wide animate-spin"

            style={{ animationDuration: "4s" }}
          >
            <Image
              src="/images/projectShape1.png"
              alt="Explore More"
              fill
              sizes="80px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        <div className="w-full max-w-lg">
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>FAQ</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold !leading-relaxed text-gray-900">
            Frequently Asked Questions
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger>
               What services does your software house offer?

              </AccordionTrigger>
              <AccordionContent>
               We provide custom software development services, mobile and web app development, AI-powered solutions, UI/UX design, full-stack software development, cloud computing, DevOps, and ongoing tech support. As a full-scale software development agency USA, we cater to businesses from startups to large enterprises.

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
               How long does it take to develop a software product?
              </AccordionTrigger>
              <AccordionContent>
               Timelines depend on scope and complexity. A basic MVP may take 3–6 months, while complex enterprise solutions often take 6–12 months. Our team follows agile practices to deliver efficiently and adapt to your evolving needs. As a seasoned AI development company and SaaS development agency, we accelerate delivery with automation and smart integration.

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
               Do you offer post-launch support and maintenance?
              </AccordionTrigger>
              <AccordionContent> Absolutely. We provide long-term maintenance, regular security patches, cloud infrastructure support, and performance optimization. As a client-focused software development agency USA, we ensure your digital product evolves with your business.

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What industries do you work with?

              </AccordionTrigger>
              <AccordionContent>
                We serve a variety of industries including fintech, healthcare, e-commerce, logistics, real estate, education, and enterprise SaaS. Our clients value our tailored software development solutions that scale with their operations.

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
