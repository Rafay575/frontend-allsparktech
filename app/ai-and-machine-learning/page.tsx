
import AiAndMachineLearning from "@/components/AiAndMachineLearning";

import { baseURL } from "@/API/baseURL";
import axios from "axios";
import  Script from "next/script";

export async function generateMetadata() {
  return {
    title: "AI Development Company | Custom AI & ML Solutions USA",
    description:
      "Partner with a top AI development company for custom solutions. Discover AI platforms, use cases & ML models tailored to your business needs.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/ai-and-machine-learning",
    },
    openGraph: {
      title: "AI Development Company | Custom AI & ML Solutions USA",
      description:
        "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
      url: "https://allsparktechnologies.com/ai-and-machine-learning",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/images/ai-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AI & ML Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Development Company | Custom AI & ML Solutions USA",
      description:
        "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
      images: [
        "https://allsparktechnologies.com/assets/images/ai-og-image.jpg",
      ],
    },
  };
}

async function fetchServiceData() {
  const service = "ai-and-machine-learning";
  try {
    const res = await axios.post(`${baseURL}/service`, { name: service }, { headers: { "Cache-Control": "no-store" } });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}

export default async function Page() {
  const serviceData = await fetchServiceData();
  return (<>
  <AiAndMachineLearning serviceData={serviceData} />
   
  </>
);
}
