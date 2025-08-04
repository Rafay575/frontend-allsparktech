import EcommerceDevelopment from "@/components/EcommerceDevelopment"


export async function generateMetadata() {
  return {
    title: "Ecommerce Website Development Services | Custom eCommerce Design",
    description:
      "Boost your online sales with All Spark Technologies' ecommerce website development services. Custom design, SEO, mobile optimization, and secure transactions.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical:
        "https://allsparktechnologies.com/ecommerce-development",
    },
    openGraph: {
      title: "Ecommerce Website Development Services | Custom eCommerce Design",
      description:
        "Boost your online sales with All Spark Technologies' ecommerce website development services. Custom design, SEO, mobile optimization, and secure transactions.",
      url: "https://allsparktechnologies.com/ecommerce-development",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/ecommerce-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Ecommerce Website Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ecommerce Website Development Services | Custom eCommerce Design",
      description:
        "Boost your online sales with All Spark Technologies' ecommerce website development services. Custom design, SEO, mobile optimization, and secure transactions.",
      images: [
        "https://allsparktechnologies.com/assets/ecommerce-og-image.jpg",
      ],
    },
  };
}
import { baseURL } from "@/API/baseURL";
import axios from "axios";
async function fetchServiceData() {
  const service = "ecommerce-development";
  try {
    const res = await axios.post(`${baseURL}/service`, { name: service }, { headers: { "Cache-Control": "no-store" } });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}


export default async function page() {
  const serviceData = await fetchServiceData();
  return<EcommerceDevelopment serviceData={serviceData} />
}
