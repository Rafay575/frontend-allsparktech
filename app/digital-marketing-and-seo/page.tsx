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
      canonical: "https://allsparktechnologies.com/digital-marketing-and-seo",
    },
    openGraph: {
      title: "Digital Marketing Services | SEO & Content Marketing Experts",
      description:
        "Boost your online presence with All Spark Technologies' digital marketing services. SEO, content, PPC, and ecommerce strategies for real business growth.",
      url: "https://allsparktechnologies.com/digital-marketing-and-seo",
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

import { baseURL } from "@/API/baseURL";
import axios from "axios";
async function fetchServiceData() {
  const service = "digital-marketing-and-seo";
  try {
    const res = await axios.post(`${baseURL}/service`, { name: service }, { headers: { "Cache-Control": "no-store" } });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}

async function fetchServiceData2() {
  const service = "digital-marketing-and-seo";

  try {
    const res = await axios.post(`${baseURL}/getbyservice`, { service: service });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}

export default async function page() {
  const serviceData = await fetchServiceData();
  const subServices = await fetchServiceData2()

  return <DigitalMarketingAndSeo serviceData={serviceData}  subServices={subServices} />
}