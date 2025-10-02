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


interface faq{
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
  }



export default function FaqSection({faq}:{faq: faq}) {
  return (
    <section className="py-16" id="faqs">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-full max-w-md">
          {/* ───────── main photo ───────── */}
          <div className="relative overflow-hidden rounded-3xl w-full h-auto">
            <Image
              src={`${baseURL}/images/home/${faq.img1}`}
              alt={faq.alt1}
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
              unoptimized
            />
          </div>

          {/* ───────── bottom-right overlay ───────── */}
          <div className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-35px] sm:right-[-40px] w-[200px] h-[200px]">
            <Image
              src={`${baseURL}/images/home/${faq.img2}`}
              alt={faq.alt2}
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
              src={`${baseURL}/images/home/${faq.img3}`}
              alt={faq.alt3}
              fill
              sizes="80px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
        <div className="w-full max-w-lg">
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 para font-semibold uppercase tracking-wide color">
            <ArrowLeft className="h-4 w-4" />
            <span>{faq.title}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="heading font-bold !leading-relaxed text-gray-900">
            {faq.subtitle}
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="para mt-6 space-y-3">
            {faq.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="para">{faq.question}</AccordionTrigger>
                <AccordionContent className="para">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
