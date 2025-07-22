import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import BlogHeroSection from "@/components/BlogHeroSection";
import { baseURL } from "@/API/baseURL";
import { JSDOM } from "jsdom";
import axios from "axios";
import type { Metadata } from "next";

// ⬅️ ADD THIS LINE!
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { urlName: string } }): Promise<Metadata> {
  try {
     const res = await axios.get(`${baseURL}/blogs/${params.urlName}`);
    const metatitle = res.data.metatitle?.trim();
    const metadescription = res.data.metadescription?.trim();

    return {
      title: metatitle || "AllSpark Technologies",
      description: metadescription || "AllSpark Technologies builds scalable software development solutions...",
    };
  } catch (err) {
    console.error("Metadata fetch failed:", err);
    return {
      title: "AllSpark Technologies",
      description: "AllSpark Technologies builds scalable software development solutions...",
    };
  }
}


export default async function BlogDetailPage({ params }: { params: { urlName: string } }) {
  interface BlogData {
    id: number;
    title: string;
    description: string;
    urlName: string;
    image: string;
    createdAt: string;
    content: string;
  }


  const res = await fetch(`${baseURL}/blogs/${params.urlName}`, {
    cache: "no-store",
  });

  if (!res.ok) return <h1>No detail fetch</h1>;

  const blog: BlogData = await res.json();

  const dom = new JSDOM(blog.content);
  const document = dom.window.document;
  const headings: { id: string; text: string }[] = [];

  ["h1"].forEach((tag) => {
    document.querySelectorAll(tag).forEach((heading) => {
      const text = heading.textContent?.trim() || "";
      if (!text) return;
      const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
      heading.setAttribute("id", id);
      headings.push({ id, text });
    });
  });

  const updatedContent = document.body.innerHTML;

  return (
    <div>
      <Topnav />
      <Navbar2 />
      <BlogHeroSection title={blog.title} backgroundImage={blog.image} />
      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row ">
        <div className="w-full md:w-[75%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[20px] px-[20px] py-[30px]">
          <p className="text-[18px] leading-[32px] text-[#4b5563]">{blog.description}</p>
          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none text-[#1f2937]"
            dangerouslySetInnerHTML={{ __html: updatedContent }}
          />
        </div>
        <div className="w-full md:w-[25%] hidden md:block p-[20px] max-h-[95vh] overflow-y-auto hide-scrollbar md:sticky top-[40px] bottom-[300px] mb-[20px] md:mb-[0px] z-10">
          <p className="text-[21px] font-semibold mt-[10px] mb-[6px] ml-1">Table of Contents</p>
          <hr />
          <div className="flex flex-col gap-[10px] my-[5px]">
            {headings.map((item, index) => (
              <div key={index}>
                <a href={`#${item.id}`} className="text-[14px] text-[#4b5563] hover:underline">
                  {item.text}
                </a>
                <hr className="mt-[7px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
