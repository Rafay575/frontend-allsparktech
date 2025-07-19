import EmailMarketing from '@/components/EmailMarketing'


export async function generateMetadata() {
  return {
    title: "Email Marketing Services | Automation, Strategy & Analytics",
    description:
      "Boost ROI with AST's email marketing. Automated emails, ecommerce flows, analytics, and deliverability best practices that drive real business results.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/email-marketing",
    },
    openGraph: {
      title: "Email Marketing Services | Automation, Strategy & Analytics",
      description:
        "Boost ROI with AST's email marketing. Automated emails, ecommerce flows, analytics, and deliverability best practices that drive real business results.",
      url: "https://allsparktechnologies.com/email-marketing",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/email-marketing-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Email Marketing Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Email Marketing Services | Automation, Strategy & Analytics",
      description:
        "Boost ROI with AST's email marketing. Automated emails, ecommerce flows, analytics, and deliverability best practices that drive real business results.",
      images: [
        "https://allsparktechnologies.com/assets/email-marketing-og-image.jpg",
      ],
    },
  };
}


export default function page() {
  return <EmailMarketing/>
}
