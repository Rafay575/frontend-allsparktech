import { baseURL } from "@/API/baseURL";
import HomeSection from "@/components/HomeSection"

export async function generateMetadata() {
  return {
    title: "AllSpark Technologies | Custom Software Development Company in USA",
    description: "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
    alternates: {
      canonical: "https://allsparktechnologies.com",
    },
    openGraph: {
      title: "AllSpark Technologies | Custom Software Development Company in USA",
      description: "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
      url: "https://allsparktechnologies.com",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AllSpark Technologies",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
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
