"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

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

export default function TestimonialsSection({ homeData }: { homeData: HomePageData }) {
  const [active, setActive] = useState(0);



  return (    
    <section className="bg-gray-100 pad !pt-[185px]">
      <div className="mx-auto max-w-7xl px-6 mt-8 text-center">
        {/* Section header */}
        <div className="flex items-center justify-center space-x-4 para font-semibold uppercase color">
          <ArrowLeft className="h-4 w-4" />
          <span>{homeData.testimonials.subtitle}</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        <h2 className="mb-20 mt-5 heading font-bold text-gray-900">
          {homeData.testimonials.title}
        </h2>

        {/* Swiper carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="!pb-8"
        >
          {homeData.testimonials.testimonials.map((t, idx) => (
            <SwiperSlide key={t.id}>
              <div
                className={`h-[250px] flex flex-col justify-between rounded-xl p-4 shadow-lg transition-colors duration-300 ${active === idx ? "bg text-white" : "bg-white text-gray-900"
                  }`}
              >
                {/* Stars */}
                <div className="mb-6 mt-3 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-[22px] ${i < t.rating ? "text-yellow-500" : "text-gray-500"}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="para leading-relaxed">{t.text}</p>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                    unoptimized
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="font-semibold subheading">{t.name}</h3>
                    <p
                      className={`para ${active === idx ? "text-blue-200" : "text-gray-500"
                        } `}
                    >
                      {t.role}
                    </p>
                  </div>
                  <Quote
                    className={`ml-auto h-7 w-7 ${active === idx ? "text-blue-200" : "text-gray-300"
                      }`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
