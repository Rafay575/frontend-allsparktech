export const dynamic = "force-dynamic"; // Required because you're using `headers()`

import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import ClientOnlyServicesTabs from "@/components/ClientOnlyServicesTabs"; 
import { headers } from "next/headers";

import {
  contentData1,
  contentData2,
  contentData3,
  contentData4,
  contentData5,
  contentData6,
  contentData7,
  contentData8,
  contentData9,
  contentData10,
} from "@/lib/data";

export async function generateMetadata() {
  const headersList = await headers();
  const referer = headersList.get("referer") || "";
  const url = new URL(referer || "https://allsparktechnologies.com/services");
  const serviceKey = url.searchParams.get("service") as keyof typeof contentMap;

  const contentData = contentMap[serviceKey] || contentData3;

  return {
    title: contentData.metadata?.title,
    description: contentData.metadata?.description,
    robots: {
      index: contentData.metadata?.robots?.index ?? true,
      follow: contentData.metadata?.robots?.follow ?? true,
    },
    alternates: {
      canonical: `${contentData.metadata?.metadataBase?.href ?? ""}${contentData.metadata?.alternates?.canonical ?? ""}`,
    },
    openGraph: {
      title: contentData.metadata?.openGraph?.title,
      description: contentData.metadata?.openGraph?.description,
      url: contentData.metadata?.openGraph?.url,
      type: contentData.metadata?.openGraph?.type,
      siteName: contentData.metadata?.openGraph?.siteName,
      images: contentData.metadata?.openGraph?.images ?? [],
    },
    twitter: {
      card: contentData.metadata?.twitter?.card,
      title: contentData.metadata?.twitter?.title,
      description: contentData.metadata?.twitter?.description,
      images: contentData.metadata?.twitter?.images ?? [],
    },
  };
}

export default function ServicesPage() {
  return (
    <>
      <Topnav />
      <Navbar2 />
      <ClientOnlyServicesTabs />
      <Footer2 />
    </>
  );
}

// ✅ Your contentMap
const contentMap = {
  "custom-software-development": contentData1,
  "web-and-app-development": contentData2,
  "ai-and-machine-learning": contentData3,
  "cloud-and-devops-solutions": contentData4,
  "ui-ux-design": contentData5,
  "ecommerce-development": contentData6,
  "customer-support": contentData7,
  "email-marketing": contentData8,
  "live-chat-support": contentData9,
  "digital-marketing-and-seo": contentData10,
};
