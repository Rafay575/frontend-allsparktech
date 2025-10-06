import { baseURL } from "@/API/baseURL";
import HomeSection from "@/components/HomeSection"
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Custom Software Development Company & AI Solutions | AllSpark Technologies",
    description:
      "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/",
    },
    openGraph: {
      type: "website",
      url: "https://allsparktechnologies.com/",
      title: "Custom Software Development Company & AI Solutions | AllSpark Technologies",
      description:
        "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
      images: [
        {
          url: "https://allsparktechnologies.com/images/logo.svg",
          width: 1200,
          height: 630,
          alt: "AllSpark Technologies Logo",
        },
      ],
      siteName: "AllSpark Technologies",
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Software Development Company & AI Solutions | AllSpark Technologies",
      description:
        "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
      images: [
        "https://allsparktechnologies.com/images/logo.svg",
      ],
    },
  };
}




async function fetchHomeData() {
  const res = await fetch(`${baseURL}/homedata`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch contact data");
  return res.json();
}

export default async function Home() {
const homeData = await fetchHomeData();
  return <HomeSection homeData={homeData}/>
}
