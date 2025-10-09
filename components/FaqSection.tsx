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
import { motion } from "framer-motion";

interface faq {
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

export default function FaqSection({ faq }: { faq: faq }) {
  // 🔹 Parent (stagger container)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // 🔹 Child (fade-up for each FAQ)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section className="pad" id="faqs">
      <div className="container pt-[3%] flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* ───────── LEFT IMAGE SECTION ───────── */}
        <motion.div
          className="relative w-full lg:w-[43%] mx-auto   "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* main photo */}
          <div className="relative w-full h-auto">
            <Image
              src={`${baseURL}/images/home/${faq.img1}`}
              alt={faq.alt1}
              width={400}
              height={400}
              className="rounded-3xl w-full "
              unoptimized
            />
          </div>

          {/* bottom-right overlay */}
          <div className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-35px] sm:right-[-40px] !w-[40%]">
            <Image
              src={`${baseURL}/images/home/${faq.img2}`}
              alt={faq.alt2}
             className="!w-full "
                width={200}
                height={200}
            />
          </div>

          {/* spinning shape */}
          <Image
            src={`${baseURL}/images/home/${faq.img3}`}
            alt={faq.alt3}
            className="w-[20%] absolute top-0 right-0 animate-spin"
            style={{ animationDuration: "4s" }}
            width={200}
            height={200}
          />
        </motion.div>

        {/* ───────── RIGHT FAQ SECTION ───────── */}
        <motion.div
          className="w-full lg:w-[57%] lg:text-left   lg:pl-[50px] xl:pl-[80px] flex flex-col justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 para font-semibold uppercase tracking-wide color mt-[40px] lg:mt-0 justify-center sm:justify-start text-center sm:text-start">
            <ArrowLeft className="h-4 w-4" />
            <span>{faq.title}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="heading font-bold !leading-relaxed text-gray-900 text-center sm:text-start">
            {faq.subtitle}
          </h2>

          {/* FAQ Accordion with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="para mt-6 space-y-3"
          >
            {faq.faqs.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="para">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="para">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
