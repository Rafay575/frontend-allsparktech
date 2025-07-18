import CloudAndDevopsSolutions from "@/components/CloudAndDevopsSolutions"

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
      canonical: "https://allsparktechnologies.com/cloud-devops-solutions",
    },
    openGraph: {
      title: "Cloud & DevOps Solutions | CI/CD, Migration & Security Experts – AST",
      description:
        "Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
      url: "https://allsparktechnologies.com/cloud-devops-solutions",
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


export default function page() {
  return <CloudAndDevopsSolutions/>
}
