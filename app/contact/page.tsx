import { baseURL } from "@/API/baseURL";
import ContactPageClient from "../../components/ContactPageClient";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getContactDataQuery } from "@/utils/queries";
export async function generateMetadata() {
  return {
    title: "Contact AllSpark Technologies | Custom Software Development & AI Experts",
    description:
      "Call, email, or schedule a consultation with our US-based software development and AI experts.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/contact/",
    },
    openGraph: {
      title: "Contact AllSpark Technologies | Custom Software Development & AI Experts",
      description:
        "Call, email, or schedule a consultation with our US-based software development and AI experts.",
      url: "https://allsparktechnologies.com/contact/",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://testtest.libererllc.com/images/contact/contact_hero_1753895832675.png",
          width: 1200,
          height: 630,
          alt: "Contact AllSpark Technologies",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact AllSpark Technologies | Custom Software Development & AI Experts",
      description:
        "Call, email, or schedule a consultation with our US-based software development and AI experts.",
      images: [
        "https://testtest.libererllc.com/images/contact/contact_hero_1753895832675.png",
      ],
    },
  };
}


async function fetchContactData() {
  const res = await fetch(`${baseURL}/contactdata`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch contact data");
  return res.json();
}

export default async function ContactPage() {
  const queryClient = new QueryClient();
    await queryClient.prefetchQuery(getContactDataQuery());
    const contactData = await fetchContactData();
  return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ContactPageClient contactData={contactData} />;
      </HydrationBoundary>
    );
}
