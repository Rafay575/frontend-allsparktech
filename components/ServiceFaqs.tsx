"use client";
import Image, { StaticImageData } from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // 👈 import motion
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
      <div className="mx-auto container flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Image Section */}
        <motion.div
          className="relative w-[90%] lg:w-[40%] mr-auto"
          initial={{ opacity: 0, x: -100 }} // from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image1}`}
              alt="img"
              width={400}
              height={400}
              className="!w-[100%]"
               loading="lazy"  

               

            />

            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image2}`}
              alt="img"
              width={400}
              height={400}
              className="absolute !w-[50%] right-[-10%] bottom-[-10px] sm:bottom-[-17px] xl:bottom-[-15px]"
               loading="lazy"  

               

            />

            <Image
              src={`${baseURL}/images/services/${serviceFAQs.image3}`}
              alt="img"
              width={400}
              height={400}
              className="absolute top-0 right-0 !w-[18%] animate-spin"
              style={{ animationDuration: "4s" }}
               loading="lazy"  

               

            />
          </div>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="w-full lg:w-[60%] flex flex-col lg:pl-[90px] items-center sm:items-start text-center sm:text-start mt-[20px] lg:mt-0" 
          initial={{ opacity: 0, x: 100 }} // from right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 para font-semibold uppercase tracking-wide color">
            <ArrowLeft className="h-4 w-4" />
            <span>{serviceFAQs.subTitle}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="heading font-bold  text-gray-900">
            {serviceFAQs.title}
          </h2>

          {/* FAQ Accordion */}
          <Accordion
            type="single"
            collapsible
            className="mt-6 space-y-3 text-start w-full"
          >
            {serviceFAQs.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }} // come from bottom
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2, // delay each FAQ item
                }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="para">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="para">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
