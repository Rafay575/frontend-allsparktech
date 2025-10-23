"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import dot from "@/public/images/dot.png";
import { baseURL } from "@/API/baseURL";

interface ServiceClient {
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
  image4: string | StaticImageData;
  imageText: string;
  title: string;
  letters?: string[];
  des1: string;
  des2: string;
  lis: string[];
}

interface ServiceClientProps {
  serviceClient: ServiceClient;
}

export default function ServiceClient({ serviceClient }: ServiceClientProps) {
  // Highlighted title words
  const renderTitle = (title: string, highlights: string[] = []) => {
    return title.split(" ").map((word, i, words) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, "");
      const isLastWord = i === words.length - 1;
      if (highlights.some((highlight) => highlight.trim() === cleanWord)) {
        return (
          <span key={i} className="color">
            {word}
            {isLastWord ? "" : " "}
          </span>
        );
      }
      return word + (isLastWord ? "" : " ");
    });
  };

  return (
    <div className="container pad flex flex-wrap items-center justify-between relative z-[20]">

      {/* left Text Column */}
      <motion.div
        className="w-full lg:w-[58%] lg:pr-[90px] mt-[50px] lg:mt-0 flex flex-col items-center sm:items-start text-center sm:text-start order-2 lg:order-1"
        initial={{ opacity: 0, x: 100 }} // from right
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="heading font-[700]">
          {renderTitle(serviceClient.title, serviceClient.letters)}
        </p>
        <p className="mt-[20px] para">{serviceClient.des1}</p>
        <p className="mt-[10px] para">{serviceClient.des2}</p>

        <div
          className="mt-[20px] text-center sm:text-start">
          {serviceClient.lis.map((li, i) => (
            <div key={i} className="flex gap-[10px] items-start">
              <Image
                src={dot}
                alt="dot"
                className="relative top-[5px] w-[10px] h-[10px]"

              />
              <p className="para">{li}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* right Image Column */}
      <motion.div
        className="relative w-full lg:w-[42%] mx-auto ml-0 lg:mx-0 md:pl-[0px] p-[10px] order-1 lg:order-2"
        initial={{ opacity: 0, x: -100 }} // from left
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Main Image */}
        <div className="relative rounded-3xl w-[95%] md:w-[90%] h-auto">
          <Image
            src={`${baseURL}/images/services/${serviceClient.image1}`}
            alt="img"
            width={400}
            height={400}
            className="rounded-3xl !w-full !h-auto"
            loading="lazy"
            placeholder="blur"
          />
        </div>

        {/* Overlapping Image */}
        <div className="absolute bottom-[-30px] right-[0px] lg:right-[-30px] sm:bottom-[-10px] sm:right-0 w-[150px] md:w-[180px] xl:w-[200px]">
          <Image
            src={`${baseURL}/images/services/${serviceClient.image2}`}
            alt="img"
            className="object-contain"
            width={400}
            height={400}
            loading="lazy"
            placeholder="blur"
          />
        </div>

        {/* Floating Shape */}
        <Image
          src={`${baseURL}/images/services/${serviceClient.image3}`}
          alt="img"
          width={400}
          height={400}
          className="absolute top-0 right-0 !w-[30%]"
          loading="lazy"
          placeholder="blur"
        />

        {/* Floating Tag */}
        <span className="absolute -bottom-[10px] left-[20px] md:left-[20px] bg text-white flex justify-center items-center gap-[10px] w-[150px] md:w-[190px] px-[10px] md:px-[20px] py-[15px] md:py-[25px] rounded-[10px]">
          <Image
            src={`${baseURL}/images/services/${serviceClient.image4}`}
            alt="icon"
            width={400}
            height={400}
            className="!w-[35px] !h-[35px]"
            loading="lazy"
            placeholder="blur"
          />
          <p className="para">{serviceClient.imageText}</p>
        </span>
      </motion.div>


    </div>
  );
}
