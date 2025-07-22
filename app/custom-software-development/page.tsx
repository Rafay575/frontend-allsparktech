import CustomSoftwareDevelopment from"@/components/CustomSoftwareDevelopment"


export async function generateMetadata() {
  return {
    title: "Custom Software Development | Bespoke Dev Services NYC",
    description: "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
    alternates: {
      canonical: "https://allsparktechnologies.com/custom-software-development",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Custom Software Development | Bespoke Dev Services NYC",
      description: "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
      url: "https://allsparktechnologies.com/custom-software-development",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/images/custom-software-og.jpg",
          width: 1200,
          height: 630,
          alt: "Custom Software Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Software Development | Bespoke Dev Services NYC",
      description: "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
      images: [
        "https://allsparktechnologies.com/assets/images/custom-software-og.jpg",
      ],
    },
  };
}


import { baseURL } from "@/API/baseURL";
import axios from "axios";
async function fetchServiceData() {
  const service = "custom-software-development";
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
  return <CustomSoftwareDevelopment serviceData={serviceData} />
}
