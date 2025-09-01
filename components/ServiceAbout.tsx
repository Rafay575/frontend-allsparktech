"use client";
import Image, { StaticImageData } from "next/image";
import img1 from "@/public/images/serviceimg2.png"
import img2 from "@/public/images/serviceimg3.png"
import img3 from "@/public/images/aboutShape2.png"
import icon1 from "@/public/images/serviceicon5.png"
import icon2 from "@/public/images/serviceicon6.png"
import icon3 from "@/public/images/serviceicon7.png"
import rightarrow from "@/public/images/rightarrow.png"
import leftarrow from "@/public/images/leftarrow.png"
import hand from "@/public/images/hand.png"
import overlay1 from "@/public/images/overlay1.png"
import overlay2 from "@/public/images/overlay2.png"


interface Feature {
  icon: StaticImageData;
  title: string;
}

interface Stat {
  number: string;
  text: string;
}

interface ServiceAboutData {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  subTitle: string;
  title: string;
  des: string;
  features: Feature[];
  stats: Stat[];
}


export default function ServiceAbout() {
  const serviceAbout: ServiceAboutData = {
    image1: img1,
    image2: img2,
    image3: img3,
    subTitle: "About Company",
    title: "Future-Ready Custom Software Solutions",
    des: "AllSpark Technologies is a trusted custom software development company in the USA, delivering secure, scalable, and innovative solutions tailored to business needs. Our expert custom software developers help organizations achieve efficiency and growth through next-generation software development services.",
    features: [
      {
        icon: icon1,
        title: "Secure"
      },
      {
        icon: icon2,
        title: "Scalable"
      },
      {
        icon: icon3,
        title: "Agile"
      }
    ],
    stats: [
      {
        number: "500+",
        text: "Projects Done"
      },
      {
        number: "1000+",
        text: "Happy Clients"
      },
      {
        number: "200+",
        text: "Team Members"
      }
    ]
  }



  return (
    <section className="relative bg-blue-600 overflow-hidden py-28 text-white relative">
      <div className="mx-auto container flex flex-col-reverse justify-between items-center gap-10 px-3 lg:px-6 lg:flex-row relative z-[20]">
        {/* Left Image Column */}
        <div className="relative w-[90%] lg:w-[40%]  mx-auto lg:mx-0  ">
          {/* Main Image */}
          <div className="w-full h-auto relative overflow-hidden rounded-3xl">
            <Image
              src={serviceAbout.image1}
              alt="img"
              className="w-full object-cover"
            />
          </div>


          {/* Overlapping Image */}
          <Image
            src={serviceAbout.image2}
            alt="img"
            className="object-contain absolute bottom-[-40px]  right-[-40px] w-[50%]"

          />

          {/* Floating Shape */}
          <Image
            src={serviceAbout.image3}
            alt="img"
            className="object-cover absolute top-0 right-0 w-[20%]    flex items-center justify-center rounded-full border-2 border-white text-white animate-spin" style={{ animationDuration: "4s" }}
          />
        </div>

        {/* Right Text Column */}
        <div className="w-full lg:w-[50%] mx-auto lg:text-left">
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-white">
            <Image src={leftarrow} alt="img" className=" w-[40px]" />
            <span>{serviceAbout.subTitle}</span>
            <Image src={rightarrow} alt="img" className=" w-[40px]" />
          </div>

          <h2 className="text-4xl font-bold !leading-normal sm:text-4xl">
            {serviceAbout.title}
          </h2>

          <p className="mt-4 text-base text-white/80">
            <span className="mb-5 block">{serviceAbout.des}</span>
          </p>

          {/* Features Section */}
          <div className="flex flex-wrap lg:flex-nowrap space-x-6 mt-10 gap-2 !lg:gap-[0px] justify-start ">
            {serviceAbout.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center sm:justify-start gap-[10px] bg-[#5666ff] w-[150px] md:w-[30%]  p-2 rounded-lg !ml-0"
              >
                <Image src={feature.icon} alt="img" className="bg-white p-3 rounded-lg w-[50px]" />
                <div className="flex flex-col">
                  <h6 className="text-white font-semibold text-[15px] md:text-[12px] xl:text-[15px]">{feature.title}</h6>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex mt-[30px] justify-center">
            {serviceAbout.stats.map((stat, index) => (
              <div key={index} className="w-[33%] text-center md:text-start">
                <p className="text-[30px] md:text-[40px] font-[700]">{stat.number}</p>
                <p className="text-[13px] md:text-[15px] font-[600]">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image src={hand} alt="img" className="absolute right-0 top-[100px] z-10 w-[100px] md:w-[130px]" />
      <Image src={overlay1} alt="img" className="absolute -left-6 -bottom-9 hidden lg:block" />
      <Image src={overlay2} alt="img" className="absolute right-8 bottom-[30px] hidden lg:block" />
    </section>
  );
}
