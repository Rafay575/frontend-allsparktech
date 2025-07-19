import AboutClient from "@/components/AboutClient";

export async function generateMetadata() {
  return {
    title: "About AllSpark Technologies | US-Based Software Development & AI Company",
    description:"A trusted software development and AI company in the USA. Discover how our experienced developers deliver innovative, tech-enabled digital solutions.",
    metadataBase: new URL("https://allsparktechnologies.com"),
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title: "About AllSpark Technologies | US-Based Software Development & AI Company",
      description:
        "A trusted software development and AI company in the USA. Discover how our experienced developers deliver innovative, tech-enabled digital solutions.",
      url: "https://allsparktechnologies.com/about",
      type: "website",
      siteName: "AllSpark Technologies",
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
    twitter: {
      card: "summary_large_image",
      title: "About AllSpark Technologies | US-Based Software Development & AI Company",
      description:
        "A trusted software development and AI company in the USA. Discover how our experienced developers deliver innovative, tech-enabled digital solutions.",
      images: ["https://allsparktechnologies.com/assets/og-image.jpg"],
    },
  };
}


export default function AboutPage() {
 return <AboutClient />
}
