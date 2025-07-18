import CustomSoftwareDevelopment from"@/components/CustomSoftwareDevelopment"


export async function generateMetadata() {
  return {
    title: "Custom Software Development | Bespoke Dev Services NYC",
    description: "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
    alternates: {
      canonical: "https://allsparktechnologies.com/custom-software-development",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Custom Software Development | Bespoke Dev Services NYC",
      description: "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
      url: "https://allsparktechnologies.com/custom-software-development",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://allsparktechnologies.com/assets/images/custom-software-og.jpg",
          width: 1200,
          height: 630,
          alt: "Custom Software Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Software Development | Bespoke Dev Services NYC",
      description: "Custom software solutions tailored to your business. Trusted bespoke development company in NYC delivering scalable, high-performance applications.",
      images: [
        "https://allsparktechnologies.com/assets/images/custom-software-og.jpg",
      ],
    },
  };
}
export default function page() {
  return <CustomSoftwareDevelopment/>
}
