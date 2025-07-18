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




export default function Home() {

  return <HomeSection/>
}
