import CustomerSupport from "@/components/CustomerSupport"

export async function generateMetadata() {
  return {
    title: "Customer Support Services | AI Chatbots & Helpdesk Solutions",
    description:
      "Boost customer satisfaction with AST’s support services: live chat, AI chatbots, ecommerce support, CRM integration & more. Multichannel & multilingual.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/customer-support",
    },
    openGraph: {
      title: "Customer Support Services | AI Chatbots & Helpdesk Solutions",
      description:
        "Boost customer satisfaction with AST’s support services: live chat, AI chatbots, ecommerce support, CRM integration & more. Multichannel & multilingual.",
      url: "https://allsparktechnologies.com/customer-support",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/customer-support-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Customer Support Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Customer Support Services | AI Chatbots & Helpdesk Solutions",
      description:
        "Boost customer satisfaction with AST’s support services: live chat, AI chatbots, ecommerce support, CRM integration & more. Multichannel & multilingual.",
      images: [
        "https://allsparktechnologies.com/assets/customer-support-og-image.jpg",
      ],
    },
  };
}


export default function page() {
  return <CustomerSupport/>
}
