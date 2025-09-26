"use client";
import Image, { StaticImageData } from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { baseURL } from "@/API/baseURL";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
  subTitle: string;
  title: string;
  faqs: FAQItem[];
}
interface ServiceFAQsProps {
  serviceFAQs: ServiceFAQs;
}


export default function ServiceFaqs({ serviceFAQs }: ServiceFAQsProps) {



  return (
    <section className="pad" id="faqs">
      <div className="mx-auto container  flex flex-col  lg:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-[90%] lg:w-[45%] mr-auto  ">
          <div className="relative  ">

            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image1}`}
              alt='img'
              width={400}
              height={400}
              className="!w-[100%] "
            />

            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image2}`}
              alt="img"
              width={400}
              height={400}
              className="absolute !w-[50%] right-[-10%]  bottom-[-10px] sm:bottom-[-17px]  xl:bottom-[-15px]"
            />
            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image3}`}
              alt="img"
              width={400}
              height={400}
              className="absolute top-0 right-0 !w-[18%] animate-spin"
              style={{ animationDuration: "4s" }}
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col lg:pl-[50px]  items-center sm:items-start text-center sm:text-start">
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 para font-semibold uppercase tracking-wide color">
            <ArrowLeft className="h-4 w-4" />
            <span>{serviceFAQs.subTitle}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="heading font-bold !leading-relaxed text-gray-900">
            {serviceFAQs.title}
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-6 space-y-3 text-start w-full">
            {serviceFAQs.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="para">{faq.question}</AccordionTrigger>
                <AccordionContent className=" text-start para">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
                                         