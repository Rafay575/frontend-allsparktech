"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreValuesSection() {
  return (
    <section className="container pad">
      <motion.div
        className="relative w-[100%]  h-auto"
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
          className="w-full"
           
        />
      </motion.div>
    </section>
  );
}
