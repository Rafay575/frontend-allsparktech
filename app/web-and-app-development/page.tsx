import WebAndAppDevelopment from '@/components/WebAndAppDevelopment'

export async function generateMetadata() {
  return {
    title: "Top Web & App Development Company | All Spark Technologies",
    description:
      "Build scalable, secure web & mobile apps with top web app development experts. Custom PWAs, SaaS, and startup solutions. Get started today.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/web-and-app-development",
    },
    openGraph: {
      title: "Top Web & App Development Company | All Spark Technologies",
      description:
        "Build scalable, secure web & mobile apps with top web app development experts. Custom PWAs, SaaS, and startup solutions. Get started today.",
      url: "https://allsparktechnologies.com/web-and-app-development",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/webapp-og.jpg",
          width: 1200,
          height: 630,
          alt: "Web & App Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Top Web & App Development Company | All Spark Technologies",
      description:
        "Build scalable, secure web & mobile apps with top web app development experts. Custom PWAs, SaaS, and startup solutions. Get started today.",
      images: [
        "https://allsparktechnologies.com/assets/webapp-og.jpg",
      ],
    },
  };
}

import { baseURL } from "@/API/baseURL";
import axios from "axios";
async function fetchServiceData() {
  const service = "web-and-app-development";
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
  return <WebAndAppDevelopment serviceData={serviceData} />
}
