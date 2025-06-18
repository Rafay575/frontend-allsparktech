"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react"; // or any icon you prefer
import Link from "next/link"; // Make sure you import Link from Next.js

export default function ServicesSection() {

  // Example service data
  const services = [
    { 
       id: "custom-software-development",
      title: "Custom Software Development",
      imageUrl: "/images/home_services/custom-software-development.webp",
    },
    {
       id: "web-and-app-development",
      title: "Web App Development",
      imageUrl: "/images/home_services/web-app-development.webp",
    },
    {
       id: "ai-and-machine-learning",
      title: "AI & Machine Learning",
      imageUrl: "/images/home_services/ai-machine-learning.webp",
    },
    {
       id: "cloud-and-devops-solutions",
      title: "Cloud & DevOps Solutions",
      imageUrl: "/images/home_services/dev-ops.webp",
    },
    {
       id: "ui-ux-design",
      title: "UX/UI Design",
      imageUrl: "/images/home_services/ui-ux-design.webp",
    },
    {
       id: "ecommerce-development",
      title: "Ecommerce Development",
      imageUrl: "/images/home_services/ecommerce-development.webp",
    },
    {
       id: "customer-support",
      title: "Customer Support",
      imageUrl: "/images/home_services/f3.jpg",
    },
    {
       id: "email-marketing",
      title: "Email Marketing",
      imageUrl: "/images/home_services/email-marketing.webp",
    },
    // Additional Services
    {
       id: "live-chat-support",
      title: "Live Chat Support",
      imageUrl: "/images/home_services/f1.jpg",
    },
    {
       id: "digital-marketing-and-seo",
      title: "Digital Marketing & SEO",
      imageUrl: "/images/home_services/digital-marketing-seo.webp",
    },
  ];

  // Show first 4 by default, show all if 'showMore' is true
  const displayedServices =  services.slice(0, 10);

  // Basic animation variants for each card
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    hover: { y: -10 }, // Moves card up on hover
  };

  // Animation variants for the entire section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="max-w-7xl mx-auto px-4 py-10"
    >
      <div className="mx-auto max-w-7xl text-start">
        {/* Title Section */}
        <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
          <ArrowLeft className="h-4 w-4" />
          <span>Our Services</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="relative">
          <h2 className="mt-3 text-4xl font-semibold text-gray-900">
            What We Do Best
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <AnimatePresence>
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <Link
                href={{
                  pathname: "/services",
                  query: { service: service.id },
                }}
                className="w-full h-full"
              >
                {/* Background Image */}
                <div
                  className="h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.imageUrl})`,
                  }}
                ></div>

                {/* Overlay Text */}
                <div className="absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-lg font-semibold">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
