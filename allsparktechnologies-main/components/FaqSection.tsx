"use client"; // Required for Next.js App Router

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { baseURL } from "@/API/baseURL";


export interface HomePageData {
  hero: {
    texts: string[];
    features: string[];
  };
  logos: {
    id: number;
    src: string;
    alt: string;
  }[];
  homeServices: {
    subTitle: string;
    title: string;
    allServices: {
      id: string;
      title: string;
      imageUrl: string;
      alt: string;
    }[];
  };
  about: {
    img1: string;
    img2: string;
    img3: string;
    alt1: string;
    alt2: string;
    alt3: string;
    subheading: string;
    mainHeading: string;
    paragraphs: string[];
    features: {
      title: string;
      subtitle: string;
    }[];
  };
  process: {
    number: string;
    title: string;
    description: string;
  }[];
  faq: {
    img1: string;
    img2: string;
    img3: string;
    alt1: string;
    alt2: string;
    alt3: string;
    subtitle: string;
    title: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  contactBanner: {
    img: string;
    alt: string;
    subTitle: string;
    title: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonials: {
      id: number;
      name: string;
      role: string;
      text: string;
      image: string;
      rating: number;
    }[];
  };
  metadata: any;
  script: any;
}


export default function FaqSection({homeData}:{homeData: HomePageData}) {
  return (
    <section className="py-16" id="faq-section">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-full max-w-md">
          {/* ───────── main photo ───────── */}
          <div className="relative overflow-hidden rounded-3xl w-full h-auto">
            <Image
              src={`${baseURL}/images/home/${homeData.faq.img1}`}
              alt={homeData.faq.alt1}
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
              unoptimized
            />
          </div>

          {/* ───────── bottom-right overlay ───────── */}
          <div className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-35px] sm:right-[-40px] w-[200px] h-[200px]">
            <Image
              src={`${baseURL}/images/home/${homeData.faq.img2}`}
              alt={homeData.faq.alt2}
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
              src={`${baseURL}/images/home/${homeData.faq.img3}`}
              alt={homeData.faq.alt3}
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
            <span>{homeData.faq.title}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold !leading-relaxed text-gray-900">
            {homeData.faq.subtitle}
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {homeData.faq.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
