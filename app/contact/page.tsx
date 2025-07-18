import ContactPageClient from "../../components/ContactPageClient";

export async function generateMetadata() {
  return {
    title: "Contact AllSpark Technologies | Custom Software Development & AI Experts",
    description:
      "Get in touch with AllSpark Technologies, a US-based software development company. Call, email, or schedule a consultation with our software and AI experts today.",
    alternates: {
      canonical: "https://allsparktechnologies.com/contact",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Contact AllSpark Technologies | Custom Software Development & AI Experts",
      description:
        "Get in touch with AllSpark Technologies, a US-based software development company. Call, email, or schedule a consultation with our software and AI experts today.",
      url: "https://allsparktechnologies.com/contact",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/contact-og.jpg",
          width: 1200,
          height: 630,
          alt: "Contact AllSpark",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact AllSpark Technologies | Custom Software Development & AI Experts",
      description:
        "Get in touch with AllSpark Technologies, a US-based software development company. Call, email, or schedule a consultation with our software and AI experts today.",
      images: ["https://allsparktechnologies.com/assets/contact-og.jpg"],
    },
  };
}


export default function ContactPage() {
  return <ContactPageClient />;
}
