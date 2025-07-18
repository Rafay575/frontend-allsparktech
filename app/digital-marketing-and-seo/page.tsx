import DigitalMarketingAndSeo from "@/components/DigitalMarketingAndSeo"

export async function generateMetadata() {
  return {
    title: "Digital Marketing Services | SEO & Content Marketing Experts",
    description:
      "Boost your online presence with All Spark Technologies' digital marketing services. SEO, content, PPC, and ecommerce strategies for real business growth.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/digital-marketing",
    },
    openGraph: {
      title: "Digital Marketing Services | SEO & Content Marketing Experts",
      description:
        "Boost your online presence with All Spark Technologies' digital marketing services. SEO, content, PPC, and ecommerce strategies for real business growth.",
      url: "https://allsparktechnologies.com/digital-marketing",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/digital-marketing-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Digital Marketing Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Digital Marketing Services | SEO & Content Marketing Experts",
      description:
        "Boost your online presence with All Spark Technologies' digital marketing services. SEO, content, PPC, and ecommerce strategies for real business growth.",
      images: [
        "https://allsparktechnologies.com/assets/digital-marketing-og-image.jpg",
      ],
    },
  };
}

export default function page() {
  return <DigitalMarketingAndSeo/>
}
