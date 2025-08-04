"use client";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Hero2Section from "@/components/Hero2Section";
import LazyBlogCard from "@/components/LazyBlogCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "@/API/baseURL";
import { useEffect, useState } from "react";
import Script from "next/script";

interface BlogPageData {
  heroimg: string;
  title: string;
  subTitle: string;
}
interface Blog {
  id: any;
  urlName: string;
  title: string;
  description: string;
  image: string;
  content: object;
  created_at?: string;
}
const fetchBlogsdata = async (): Promise<BlogPageData> => {
  const res = await axios.get(`${baseURL}/blogdata`);
  return res.data;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogsdata,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };

    fetchBlogs(); // Don't forget to call the async function
  }, []);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (isError || !data)
    return <div className="text-center py-10">Failed to load blogs.</div>;

  return (
    <div>
      <Topnav />
      <Navbar2 />
      <Hero2Section
        title="Blogs"
        backgroundImage={`${baseURL}/images/blogs/${data.heroimg}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/About" },
        ]}
      />
      <div className="w-[95%] md:w-[80%] mx-auto my-[20px]">
        <div className="mx-auto max-w-7xl text-start mt-[100px]">
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>{data.subTitle}</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="relative">
            <h2 className="mt-3 text-4xl font-semibold text-gray-900">
              {data.title}
            </h2>
          </div>
        </div>

        <div className="my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[15px]">
            {blogs.map((blog) => (
              <LazyBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://allsparktechnologies.com/blogs",
                "url": "https://allsparktechnologies.com/blogs",
                "name": "All Spark Tech Blog | Software, AI, Cloud & Marketing Insights",
                "description": "Explore the All Spark Technologies Blog for expert tips on custom software, AI, cloud solutions, DevOps, and digital marketing to grow your business.",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://allsparktechnologies.com/#website" },
                "breadcrumb": { "@id": "https://allsparktechnologies.com/blogs#breadcrumb" },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://testtest.libererllc.com/images/blogs/blog_1753893232563.png"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://allsparktechnologies.com/#organization",
                "name": "AllSpark Technologies",
                "url": "https://allsparktechnologies.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://allsparktechnologies.com/images/logo.svg"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/all-spark-technologies",
                  "https://www.facebook.com/allsparktechnologies.official",
                  "https://www.instagram.com/allspark_technologies/"
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://allsparktechnologies.com/blogs#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://allsparktechnologies.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blogs",
                    "item": "https://allsparktechnologies.com/blogs"
                  }
                ]
              },
              {
                "@type": "Blog",
                "@id": "https://allsparktechnologies.com/blogs#blog",
                "name": "All Spark Tech Blog",
                "url": "https://allsparktechnologies.com/blogs",
                "description": "Insights and strategies on software development, AI, cloud solutions, DevOps, and digital marketing.",
                "publisher": {
                  "@id": "https://allsparktechnologies.com/#organization"
                },
                "inLanguage": "en-US"
              },
              {
                "@type": "Place",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 41.0164,
                  "longitude": -74.2076
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "638 Knollwood Road",
                  "addressLocality": "Franklin Lakes",
                  "addressRegion": "NJ",
                  "postalCode": "07417",
                  "addressCountry": "US"
                },
                "name": "AllSpark Technologies Office"
              },
              {
                "@type": "WebPage",
                "@id": "https://allsparktechnologies.com/blogs#aiseo",
                "name": "AISEO for Blogs",
                "description": "AI-enhanced SEO for optimized visibility in AI-driven search and discovery engines.",
                "isPartOf": { "@id": "https://allsparktechnologies.com/blogs" }
              },
              {
                "@type": "WebPage",
                "@id": "https://allsparktechnologies.com/blogs#voice",
                "name": "Voice Search Optimization",
                "description": "Optimized blog content designed for smart assistants and voice-first search engines.",
                "isPartOf": { "@id": "https://allsparktechnologies.com/blogs" }
              }
            ]
          }
          ),
        }}
      />
      <Footer2 />
    </div>
  );
}
