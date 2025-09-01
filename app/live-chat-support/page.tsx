import LiveChatSupport from '@/components/LiveChatSupport'

export async function generateMetadata() {
  return {
    title: "Live Chat Support Services | 24/7 AI & Human Chat Solutions",
    description:
      "Enhance engagement with AST’s live chat services—24/7 support, AI chatbots, CRM integration, and ecommerce solutions. Secure, fast, and cost-effective.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/live-chat-support",
    },
    openGraph: {
      title: "Live Chat Support Services | 24/7 AI & Human Chat Solutions",
      description:
        "Enhance engagement with AST’s live chat services—24/7 support, AI chatbots, CRM integration, and ecommerce solutions. Secure, fast, and cost-effective.",
      url: "https://allsparktechnologies.com/live-chat-support",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/live-chat-support-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Live Chat Support Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Live Chat Support Services | 24/7 AI & Human Chat Solutions",
      description:
        "Enhance engagement with AST’s live chat services—24/7 support, AI chatbots, CRM integration, and ecommerce solutions. Secure, fast, and cost-effective.",
      images: [
        "https://allsparktechnologies.com/assets/live-chat-support-og-image.jpg",
      ],
    },
  };
}

import { baseURL } from "@/API/baseURL";
import axios from "axios";
async function fetchServiceData() {
  const service = "live-chat-support";
  try {
    const res = await axios.post(`${baseURL}/service`, { name: service }, { headers: { "Cache-Control": "no-store" } });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}

async function fetchServiceData2() {
  const service = "live-chat-support";
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

  return <LiveChatSupport serviceData={serviceData}  subServices={subServices} />
}