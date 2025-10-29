import { baseURL } from "@/API/baseURL";
import AboutClient from "@/components/AboutClient";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getAboutDataQuery } from "@/utils/queries";

export async function generateMetadata() {
  return {
    title: "About AllSpark Technologies | US-Based Software Development Company",
    description:
      "Meet AllSpark Technologies a trusted software development and AI company in the USA. Learn how we help businesses grow with innovative digital solutions.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/about/",
    },
    openGraph: {
      title: "About AllSpark Technologies | US-Based Software Development Company",
      description:
        "Meet AllSpark Technologies a trusted software development and AI company in the USA. Learn how we help businesses grow with innovative digital solutions.",
      url: "https://allsparktechnologies.com/about/",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://testtest.libererllc.com/images/about/hero.webp",
          width: 1200,
          height: 630,
          alt: "About AllSpark Technologies",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About AllSpark Technologies | US-Based Software Development Company",
      description:
        "Meet AllSpark Technologies a trusted software development and AI company in the USA. Learn how we help businesses grow with innovative digital solutions.",
      images: [
        "https://testtest.libererllc.com/images/about/hero.webp",
      ],
    },
  };
}



async function fetchAboutData() {
  const res = await fetch(`${baseURL}/aboutdata`);
  if (!res.ok) throw new Error("Failed to fetch contact data");
  return res.json();
}

export default async function AboutPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getAboutDataQuery());
    const aboutData = await fetchAboutData();

 return (
     <HydrationBoundary state={dehydrate(queryClient)}>
       <AboutClient aboutData={aboutData}/>
     </HydrationBoundary>
   );
}

