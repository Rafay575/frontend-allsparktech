"use client";
import Link from "next/link";
import React from "react";

interface ServicesContactProps {
  title: string;
  subTitle: string;
}

const ServicesContact: React.FC<ServicesContactProps> = ({ title, subTitle }) => {
  return (
    <section className="py-16 px-[20px] md:px-[90px]">
      <div className="max-w-7xl mx-auto text-center md:px-4">
        {/* Intro Text */}

        {/* Main Title */}
        <h2 className="heading font-bold text-gray-200 mb-2">
          {title}
        </h2>

        <p className="para text-white mb-6">{subTitle}</p>
        {/* Button (still hardcoded) */}
        <Link
          href="/contact"
          className="inline-block bg-white text-[#2B4EFF] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-transparent border border-white hover:text-white  transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default ServicesContact;
