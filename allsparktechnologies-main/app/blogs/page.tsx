import React from 'react'
import BlogData from "@/components/BlogData"

export async function generateMetadata() {
  return {
    title: "All Spark Tech Blog | Software, AI, Cloud & Marketing Insights",
    description:
      "Explore the All Spark Technologies Blog for expert tips on custom software, AI, cloud solutions, DevOps, and digital marketing to grow your business.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/blogs",
    },
    openGraph: {
      title: "All Spark Tech Blog | Software, AI, Cloud & Marketing Insights",
      description:
        "Explore the All Spark Technologies Blog for expert tips on custom software, AI, cloud solutions, DevOps, and digital marketing to grow your business.",
      url: "https://allsparktechnologies.com/blogs",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://testtest.libererllc.com/images/blogs/blog_1753893232563.png",
          width: 1200,
          height: 630,
          alt: "All Spark Tech Blog Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "All Spark Tech Blog | Software, AI, Cloud & Marketing Insights",
      description:
        "Explore the All Spark Technologies Blog for expert tips on custom software, AI, cloud solutions, DevOps, and digital marketing to grow your business.",
      images: [
        "https://testtest.libererllc.com/images/blogs/blog_1753893232563.png",
      ],
    },
  };
}



export default function page() {
  return (
    <>
      <BlogData />
    </>
  )
}
