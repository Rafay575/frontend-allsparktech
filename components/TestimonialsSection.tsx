"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface testimonials {
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
}

export default function TestimonialsSection({ testimonials }: { testimonials: testimonials }) {
  const [active, setActive] = useState(0);

  // 🔹 Parent animation (staggered children)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // 🔹 Child animation (fade-up)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-100 pad !pt-[185px] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mt-8 text-center">
        {/* Section header animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4 para font-semibold uppercase color">
            <ArrowLeft className="h-4 w-4" />
            <span>{testimonials.subtitle}</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          <h2 className="mt-3 heading font-bold text-gray-900">
            {testimonials.title}
          </h2>
        </motion.div>

        {/* Swiper with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-[30px]"
        >
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
            className="!pb-5"
          >
            {testimonials.testimonials.map((t, idx) => (
              <SwiperSlide key={t.id}>
                <motion.div
                  variants={itemVariants}
                  className={`h-[270px] flex flex-col justify-between rounded-xl p-4 shadow-lg transition-colors duration-300 ${active === idx
                      ? "bg text-white"
                      : "bg-white text-gray-900"
                    }`}
                >
                  {/* Stars */}
                  <div className="mb-6 mt-3 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => {
                      const full = i + 1 <= Math.floor(t.rating);
                      const half = !full && i < t.rating;
                      return full ? (
                        <FaStar key={i} className="text-[22px] text-yellow-500" />
                      ) : half ? (
                        <FaStarHalfAlt key={i} className="text-[22px] text-yellow-500" />
                      ) : (
                        <FaRegStar key={i} className="text-[22px] text-gray-400" />
                      );
                    })}
                  </div>

                  {/* Quote text */}
                  <p className="para leading-relaxed ">{t.text}</p>

                  {/* Author */}
                  <div className="flex items-center mt-auto ">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="mr-4 h-12 w-12 rounded-full object-cover"
                       
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="font-semibold subheading">{t.name}</h3>
                      <p
                        className={`para ${active === idx ? "text-blue-200" : "text-gray-500"
                          }`}
                      >
                        {t.role}
                      </p>
                    </div>
                    <Quote
                      className={`ml-auto h-7 w-7  ${active === idx ? "text-blue-200" : "text-gray-300"
                        }`}
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
