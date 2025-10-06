"use client";
import bg from "@/public/images/home_services/homehero.jpg"

import { Activity,  ArrowRight } from "lucide-react";
import Navbar3 from "./Navbar3";
import Image from "next/image";
export default function HomePage() {
  return (
    <main className="min-h-screen  relative bg-slate-950 text-white antialiased">
      <Navbar3 />
      <div className="absolute inset-0 -z-0">
        <Image
          src={bg}
          alt="Laptop with floating app icons"
          className="object-cover object-center opacity-90 w-full h-full"
          width={2000}
          height={2000}
        />
      </div>
      <div className="  pt-24">
        {/* HERO */}
        <section className=" isolate overflow-hidden">
         

          <div className="container mx-auto px-4">
            <div className="flex min-h-[78vh] items-center">
              <div className="max-w-3xl py-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium ring-1 ring-white ">
                  <Activity className="h-4 w-4" />
                  <span className="text-white/90">
                    Enterprise Software Solutions
                  </span>
                </div>

                {/* Heading */}
                <h1 className="mt-5 text-4xl font-extrabold !leading-[1.3] tracking-[0.01em]  sm:text-5xl md:text-6xl">
                  Enterprise Software
                  <span className="block ">Development Solutions</span>
                </h1>

                {/* Copy */}
                <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
                  Smart enterprise software development services in the USA to
                  streamline workflows, enhance security, and drive growth.
                </p>

                {/* CTAs */}
                <div className="mt-7  flex flex-wrap items-center gap-4">
                  <a
                    href="#services"
                    className="group inline-flex text-base relative  items-center justify-center rounded-full bg-white px-6 py-3 pr-14 text-[#384bff] font-semibold  transition "
                  >
                    Discover More
                    <div className="transition duration-300 border-2 rounded-full border-[#384bff] p-[6px] absolute right-2">
                      <ArrowRight className="h-4 w-4 -rotate-45" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

