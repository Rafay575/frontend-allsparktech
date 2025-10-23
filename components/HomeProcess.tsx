"use client";

import { baseURL } from "@/API/baseURL";
import Image, { StaticImageData } from "next/image";
import React from "react";
import bg1 from "@/public/images/homeprocessbg1.png";
import bg2 from "@/public/images/homeprocessbg2.png";
import clipcircle from "@/public/images/clipcircle.png";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Suspense } from "react";


interface homeProcessData {
  title: string;
  des: string;
  image: string | StaticImageData;
  link: string;
  process: {
    heading: string;
    des: string;
    image: string | StaticImageData;
    dir?: string | StaticImageData;
  }[];
}

interface homeProcessProps {
  homeProcess: homeProcessData;
}

// 🔹 Parent (stagger animation)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// 🔹 Child (fade-up animation)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomeProcess({ homeProcess }: homeProcessProps) {
  // console.log(`${baseURL}/images/home/${homeProcess.image}`)
  return (
    <>
      <div className="pad bg-[#181965] text-white relative z-[10]">
        <div className="container homeProcess text-center pb-[130px] sm:pb-[180px] md:pb-[230px] xl:!pb-[300px]">
          {/* Heading Animation */}
          <motion.p
            className="w-full lg:w-[70%] xl:w-[50%] mx-auto heading font-[800]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {homeProcess.title}
          </motion.p>

          <motion.p
            className="w-full md:w-[70%] xl:w-[52%] mx-auto para mt-[15px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {homeProcess.des}
          </motion.p>

          {/* Process List Animation */}
          <motion.div
            className="flex flex-wrap mt-[50px] gap-y-[50px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {homeProcess.process.map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center w-[50%] lg:w-[25%] px-[15px] lg:px-[20px] xl:px-[30px] relative"
              >
                <Image
                  src={`${baseURL}/images/home/${process.image}`}
                  alt="img1"
                  width={150}
                  height={10}
                  className="w-[130px]"
                   loading="lazy" unoptimized

               

                />
                {process.dir && (
                  <Image
                    src={`${baseURL}/images/home/${process.dir}`}
                    width={400}
                    height={400}
                    alt="img1"
                    className="absolute w-[60px] hidden xl:block xl:w-[80px] -right-[10%] top-[12%]"
                     loading="lazy" unoptimized

               

                  />
                )}
                <p className="subheading font-[600] mt-[20px] lg:mt-[30px] w-[80%] md:w-[70%]">
                  {process.heading}
                </p>
                <p className="para mt-[5px] lg:mt-[20px] hidden md:block">{process.des}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background images */}
        <Image
          src={bg1}
          alt="bg"
          width={200}
          height={200}
          className="w-[40%] absolute bottom-0 right-0"
        />
        <Image
          src={bg2}
          alt="bg"
          width={200}
          height={200}
          className="w-[15%] absolute bottom-0 left-0 hidden lg:block"
        />
      </div>


      <Dialog >
        <DialogTrigger>
          {/* Bottom Image Section */}
          <div className="w-[100vw]">
            <div className="container mt-[-18%]  2xl:mt-[-13%] relative z-[20]">

              <Image
                src={`${baseURL}/images/home/${homeProcess.image}`}
                alt="bg"
                width={4000}
                height={4000}
                className="w-full cursor-pointer"
                 loading="lazy" unoptimized

               

              />



              <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-30">
                <motion.div
                  className="w-[8%] mt-[0.7%]"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={clipcircle}
                    alt="bg"
                    width={4000}
                    height={4000}
                    className="w-full"
                  />
                </motion.div>
              </div>

            </div>
          </div>

        </DialogTrigger>
        <DialogContent className="w-[95vw] lg:w-[70vw] max-w-[80vw]  p-0" >
          <DialogHeader>
            <Suspense fallback={<p>Loading...</p>}>
              <DialogDescription>

                <video
                  autoPlay
                  src={`/video.mp4`}
                  controls
                  className="!w-full rounded-lg "
                  
                />
              </DialogDescription>
            </Suspense>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
