"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreValuesSection() {
  return (
    <section className="w-full px-10 md:px-0 max-w-7xl mx-auto py-10 md:py-16 lg:py-20">
      <motion.div
        className="relative w-[95%] mx-auto h-auto"
        initial={{ opacity: 0, y: 50 }}          // Hidden and slightly moved down
        whileInView={{ opacity: 1, y: 0 }}       // Fade in and move up
        transition={{ duration: 1, ease: "easeOut" }} // Smooth timing
        viewport={{ once: true, amount: 0.3 }}    // Animate only once when visible
      >
        <Image
          src="/images/about/1.png"
          alt="Core Values Arcs"
          layout="responsive"
          width={1920}
          height={1080}
          unoptimized
        />
      </motion.div>
    </section>
  );
}
