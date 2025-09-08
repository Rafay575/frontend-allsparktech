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
    <section className="py-16" id="faqs">
      <div className="mx-auto container px-6 flex flex-col  lg:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-[40%]  ">
          <div className="relative ">

            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image1}`}
              alt='img'
              width={400}
              height={400}
              className="!w-[93%] "
            />

            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image2}`}
              alt="img"
              width={400}
              height={400}
              className="absolute bottom-[-5px] right-[-5px] !w-[45%]"
            />
            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image3}`}
              alt="img"
              width={400}
              height={400}
              className="absolute top-[0px] right-[40px] md:right-[35px] !w-[18%] animate-spin"
              style={{ animationDuration: "4s" }}
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col  items-center sm:items-start text-center sm:text-start">
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>{serviceFAQs.subTitle}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-[29px] lg:text-[35px] 2xl:text-[40px]  font-bold !leading-relaxed text-gray-900">
            {serviceFAQs.title}
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-6 space-y-3 text-start w-full">
            {serviceFAQs.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className=" text-start">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
// bottom-[-40px] sm:bottom-[-80px] md:bottom-[-70px]  lg:bottom-[-37px] xl:bottom-[-40px] right-[-30px] sm:right-[-60px] md:right-[-100px] lg:right-[-50px] xl:right-[-70px]