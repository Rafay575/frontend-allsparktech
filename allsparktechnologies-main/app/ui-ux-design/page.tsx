import UiUxDesign from '@/components/UiUxDesign'

export async function generateMetadata() {
  return {
    title: "UI & UX Design Services | Website Interface Design Experts",
    description:
      "Boost engagement with expert UI/UX design. Explore our design case studies, portfolios, and research-driven methods that power seamless digital experiences.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/ui-ux-design",
    },
    openGraph: {
      title: "UI & UX Design Services | Website Interface Design Experts",
      description:
        "Boost engagement with expert UI/UX design. Explore our design case studies, portfolios, and research-driven methods that power seamless digital experiences.",
      url: "https://allsparktechnologies.com/ui-ux-design",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/ui-ux-design-banner.jpg",
          width: 1200,
          height: 630,
          alt: "UI/UX Design Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "UI & UX Design Services | Website Interface Design Experts",
      description:
        "Boost engagement with expert UI/UX design. Explore our design case studies, portfolios, and research-driven methods that power seamless digital experiences.",
      images: [
        "https://allsparktechnologies.com/assets/ui-ux-design-banner.jpg",
      ],
    },
  };
}


import { baseURL } from "@/API/baseURL";
import axios from "axios";
async function fetchServiceData() {
  const service = "ui-ux-design";
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
  return <UiUxDesign serviceData={serviceData}/>
}
