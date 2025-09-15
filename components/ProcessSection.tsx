"use client";
import { PlayCircle } from "lucide-react";


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


export default function ProcessSection({homeData}:{homeData: HomePageData}) {


  return (
    <section className="relative py-28 mt-10">
      <div className="">
        <div className="relative mx-auto max-w-[95%] xl:max-w-6xl">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <video
              src="/images/videos/below_process.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-xl"
            />

            {false && (
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/50">
                <PlayCircle className="h-16 w-16 text-white" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-[-250px] bg-[#0E0E47] pt-80 pb-32 text-white">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-6 md:grid-cols-2 xl:grid-cols-4">
            {homeData.process?.map((step, index) => (
              <div key={index} className="text-start">
                <h2 className="heading font-bold text-gray-400">
                  {step.number}
                </h2>
                <h3 className="mt-2 subheading font-semibold">{step.title}</h3>
                <p className="mt-2 para text-gray-300 ">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
