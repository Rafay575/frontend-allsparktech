import { baseURL } from "@/API/baseURL";
import CloudAndDevopsSolutions from "@/components/CloudAndDevopsSolutions"
import axios from "axios";

export async function generateMetadata() {
  return {
    title: "Cloud & DevOps Solutions | CI/CD, Migration & Security Experts – AST",
    description:
      "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/cloud-and-devops-solutions",
    },
    openGraph: {
      title: "Cloud & DevOps Solutions | CI/CD, Migration & Security Experts – AST",
      description:
        "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
      url: "https://allsparktechnologies.com/cloud-and-devops-solutions",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/images/cloud-devops.jpg",
          width: 1200,
          height: 630,
          alt: "Cloud & DevOps Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cloud & DevOps Solutions | CI/CD, Migration & Security Experts – AST",
      description:
        "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
      images: [
        "https://allsparktechnologies.com/assets/images/cloud-devops.jpg",
      ],
    },
  };
}

async function fetchServiceData() {
  const service = "cloud-and-devops-solutions";
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
  return <CloudAndDevopsSolutions serviceData={serviceData}/>
}
