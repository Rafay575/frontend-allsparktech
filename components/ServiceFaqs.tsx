"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import servicefaq1 from "@/public/images/servicefaq1.png"
import servicefaq2 from "@/public/images/servicefaq2.png"
import servicefaq3 from "@/public/images/servicefaq3.png"
import { StaticImageData } from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  subTitle: string;
  title: string;
  faqs: FAQItem[];
}



export default function ServiceFaqs() {
  const serviceFAQs: ServiceFAQs = {
    image1: servicefaq1,
    image2: servicefaq2,
    image3: servicefaq3,
    subTitle: "FAQ",
    title: "Prioritize Your Site's Safety And Security",
    faqs: [
      {
        "question": "Do you provide API integration and system integration?",
        "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
      },
      {
        "question": "Do you offer cloud-based software solutions?",
        "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
      },
      {
        "question": "What technologies do you use for development?",
        "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
      },
      {
        "question": "Do you provide consulting before development?",
        "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
      }
    ]
  }


  return (
    <section className="py-16" id="faqs">
      <div className="mx-auto container px-6 flex flex-col  lg:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-[40%]  ">
          <div  className="relative ">

            <Image
              src={serviceFAQs.image1}
              alt='img'
              className="w-[93%] "
            />

            <Image
              src={serviceFAQs.image2}
              alt="img"
              className="absolute bottom-[-5px] right-[-5px] w-[45%]"
            />
            <Image
              src={serviceFAQs.image3}
              alt="img"
              className="absolute top-[-5px] right-[30px] w-[20%] animate-spin"
              style={{ animationDuration: "4s" }}
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>{serviceFAQs.subTitle}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold !leading-relaxed text-gray-900">
            {serviceFAQs.title}
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {serviceFAQs.faqs.map((faq, index) => (
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
// bottom-[-40px] sm:bottom-[-80px] md:bottom-[-70px]  lg:bottom-[-37px] xl:bottom-[-40px] right-[-30px] sm:right-[-60px] md:right-[-100px] lg:right-[-50px] xl:right-[-70px]