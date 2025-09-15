"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { baseURL } from "@/API/baseURL";
import { useRouter } from "next/navigation";


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

export default function ContactSection({homeData}:{homeData: HomePageData}) {
 
   const router = useRouter();

  return (
    <section className="relative pt-16 mb-[-150px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col items-center justify-between rounded-xl bg py-3 px-10 text-white md:flex-row">
          {/* Left Section - Illustration and Text */}
          <div className="flex flex-col items-center md:flex-row md:items-center">
            <Image
              src={`${baseURL}/images/home/${homeData.contactBanner?.img}`}
              alt={homeData.contactBanner?.alt|| "Contact Banner"}
              width={250}
              height={250}
              className="mb-4 md:mb-0 md:mr-6"
              unoptimized
            />

            <div className="text-center md:text-left">
              {/* Contact Label */}
              <div className="mb-2 flex items-center justify-center md:justify-start space-x-4 para font-semibold uppercase tracking-wide">
                <ArrowLeft className="h-4 w-4" />
                <span>{homeData.contactBanner?.subTitle}</span>
                <ArrowRight className="h-4 w-4" />
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl font-bold heading">
                {homeData.contactBanner?.title}
              </h2>
            </div>
          </div>

          {/* Right Section - Call to Action */}
          <div className="mt-6 md:mt-0">
            <Button
              className="rounded-full bg-[#F98600] para hover:bg-opacity-80 text-white  px-10 py-6"
              onClick={() => {
                router.push("/contact");
              }}
            >
              TALK TO A SPECIALIST →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
