"use client";

import Image, { StaticImageData } from "next/image";
import rightarrow from "@/public/images/rightarrow.png";
import leftarrow from "@/public/images/leftarrow.png";
import hand from "@/public/images/hand.png";
import overlay1 from "@/public/images/overlay1.png";
import overlay2 from "@/public/images/overlay2.png";
import { baseURL } from "@/API/baseURL";
import { motion } from "framer-motion";

interface Feature {
  icon: string | StaticImageData;
  title: string;
}

interface ServiceAboutData {
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
  subTitle: string;
  title: string;
  des: string;
  features: Feature[];
}
interface ServiceAboutProps {
  serviceAbout: ServiceAboutData;
}

export default function ServiceAbout({ serviceAbout }: ServiceAboutProps) {
  return (
    <section className="relative bg overflow-hidden pad text-white w-[100vw] overflow-x-hidden">
      <div className="mx-auto container flex  flex-col-reverse justify-between items-center gap-10 px-3 lg:px-6 lg:flex-row relative z-[20] py-[30px]">
        
        {/* Left Image Column */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-[90%] lg:w-[40%] mx-auto lg:mx-0 order-2 lg:order-1"
        >
          <div className="w-full h-auto relative overflow-hidden rounded-3xl">
            <Image
              src={`${baseURL}/images/services/${serviceAbout.image1}`}
              alt="img"
              width={1400}
              height={1400}
              className="!w-full object-cover"
            />
          </div>

          {/* Overlapping Image */}
          <Image
            src={`${baseURL}/images/services/${serviceAbout.image2}`}
            alt="img"
            className="object-contain absolute bottom-[-30px] right-[-30px] !w-[40%]"
            width={400}
            height={400}
          />

          {/* Floating Shape */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 !w-[20%]"
          >
            <Image
              src={`${baseURL}/images/services/${serviceAbout.image3}`}
              alt="img"
              width={400}
              height={400}
              className="object-cover rounded-full border-2 border-white"
            />
          </motion.div>
        </motion.div>

        {/* Right Text Column */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-[50%] mx-auto lg:text-left order-1 lg:order-2 text-center sm:text-start pt-[40px] lg:pt-[0px] flex flex-col items-center sm:items-start"
        >
          <div className="mb-2 flex items-center space-x-4 para font-semibold uppercase text-white">
            <Image src={leftarrow} alt="img" className="w-[40px]" />
            <span>{serviceAbout.subTitle}</span>
            <Image src={rightarrow} alt="img" className="w-[40px]" />
          </div>

          <h2 className="heading font-[700]">{serviceAbout.title}</h2>

          <p className="mt-4 para text-white/80">
            <span className="mb-5 block">{serviceAbout.des}</span>
          </p>

          {/* Features Section */}
          <motion.div
            className="flex justify-center sm:justify-start flex-wrap xl:flex-nowrap  mt-10 gap-2"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.35 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {serviceAbout.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center justify-start gap-[10px] bg-[#5666ff] p-[5px] min-w-[150px] rounded-lg"
              >
                <Image
                  src={`${baseURL}/images/services/${feature.icon}`}
                  alt="img"
                  width={600}
                  height={600}
                  className="bg-white p-2 rounded-lg !w-[50px]"
                />
                <h6 className="text-white font-semibold para">{feature.title}</h6>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Images */}
      <Image src={hand} alt="img" className="hidden lg:block absolute right-0 top-[10px] lg:top-[100px] z-10 w-[100px] md:w-[130px]" />
      <Image src={overlay1} alt="img" className="absolute -left-6 -bottom-9 hidden lg:block" />
      <Image src={overlay2} alt="img" className="absolute right-8 bottom-[30px] hidden lg:block" />
    </section>
  );
}
