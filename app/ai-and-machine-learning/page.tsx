import AiAndMachineLearning from "@/components/AiAndMachineLearning"

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
        " Accelerate growth with AST's cloud strategy consulting, CI/CD pipeline code, DevOps tools, and cloud security compliance. Trusted cloud-based provider.",
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


export default function page() {
  return<AiAndMachineLearning/>
}
