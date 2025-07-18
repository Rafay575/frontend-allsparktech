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
        "https://allsparktechnologies.com/ecommerce-website-development",
    },
    openGraph: {
      title: "Ecommerce Website Development Services | Custom eCommerce Design",
      description:
        "Boost your online sales with All Spark Technologies' ecommerce website development services. Custom design, SEO, mobile optimization, and secure transactions.",
      url: "https://allsparktechnologies.com/ecommerce-website-development",
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

export default function page() {
  return<EcommerceDevelopment/>
}
