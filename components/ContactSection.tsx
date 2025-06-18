"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  return (
    <section className="relative pt-16 mb-[-100px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col items-center justify-between rounded-xl bg-blue-600 py-3 px-10 text-white md:flex-row">
          {/* Left Section - Illustration and Text */}
          <div className="flex flex-col items-center md:flex-row md:items-center">
            <Image
              src="/images/ctaThumb1_1.png"
              alt="Consultation"
              width={250}
              height={250}
              className="mb-4 md:mb-0 md:mr-6"
              unoptimized
            />

            <div className="text-center md:text-left">
              {/* Contact Label */}
              <div className="mb-2 flex items-center justify-center md:justify-start space-x-4 text-sm font-semibold uppercase tracking-wide">
                <ArrowLeft className="h-4 w-4" />
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4" />
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl font-bold md:text-3xl">
                Get a Free Consultation
              </h2>
            </div>
          </div>

          {/* Right Section - Call to Action */}
          <div className="mt-6 md:mt-0">
            <Button
            
              className="rounded-full bg-[#F98600] hover:bg-opacity-80 text-white  px-10 py-6"
              onClick={() => {router.push('/contact')}}
            >
              TALK TO A SPECIALIST →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
