import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-blue-600 overflow-x-hidden py-28 text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse justify-between gap-10 px-3 lg:px-6 lg:flex-row">
        <div className="relative w-full mx-auto lg:mx-0  max-w-md">
          {/* ───────── main photo ───────── */}
          <div className="relative overflow-hidden rounded-3xl w-full h-auto">
            <Image
              src="/images/aboutThumb1_1.png"
              alt="Team Working"
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto"
              unoptimized
            />
          </div>

          {/* ───────── bottom-right overlay ───────── */}
          <div className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-35px] sm:right-[-40px] w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
            <Image
              src="/images/aboutThumb1_1-sub-section.png"
              alt="Team Discussion"
              fill
              sizes="100px"
              className="object-contain"
              unoptimized
            />
          </div>

          {/* ───────── spinning shape ───────── */}
          <div
            className="absolute top-0 right-0 w-12 h-12 [@media(min-width:375px)]:w-14 [@media(min-width:375px)]:h-14 [@media(min-width:425px)]:w-16 [@media(min-width:425px)]:h-16  [@media(min-width:768px)]:w-16 [@media(min-width:768px)]:h-16 [@media(min-width:1024px)]:w-20 [@media(min-width:1024px)]:h-20 [@media(min-width:1280px)]:!w-[80px]  [@media(min-width:1280px)]:!h-[80px]  flex
               items-center justify-center rounded-full border-2 border-white
               text-white text-xs uppercase tracking-wide animate-spin"
            style={{ animationDuration: "4s" }}
          >
            <Image
              src="/images/aboutShape2.png"
              alt="Explore More"
              fill
              // sizes="80px"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="w-full max-w-lg mx-auto lg:text-left">
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>ABOUT COMPANY</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <h1 className="text-4xl font-bold !leading-normal sm:text-4xl">
            Innovating the Future with AI &amp; Technology
          </h1>

          <p className="mt-4 text-base text-white/80">
            <span className="mb-5 block">
            At AllSpark Technologies, we believe in the power of innovation to transform ideas into impactful digital products. As a top software development company based in the USA, we specialize in custom software development services, tailored to meet modern business needs.
            </span>
            <span className="mt-5 block">
              Our team of experienced developers, engineers, and AI specialists work collaboratively to deliver enterprise software development solutions that are intelligent, scalable, and user-centric.

            </span>
          </p>
          <div className="flex flex-wrap lg:flex-nowrap space-x-6 mt-10 gap-6 lg:gap-0 justify-center lg:justify-between">
            <div className="flex items-center space-x-3 bg-[#5666ff] lg:w-1/3 p-2 rounded-lg">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb text-blue-600"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="text-white font-semibold">Creative</h6>
                <p className="text-white text-xs">Innovation</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-[#5666ff] lg:w-1/3 p-2 rounded-lg">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="text-white font-semibold">Team </h6>
                <p className="text-white text-xs">Collaboration</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-[#5666ff] lg:w-1/3 p-2 rounded-lg">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe text-blue-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="text-white font-semibold">Sustainable</h6>
                <p className="text-white text-xs">Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



