// import { notFound } from "next/navigation";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import { baseURL } from "@/API/baseURL";
import { JSDOM } from "jsdom";
import axios from "axios";
import type { Metadata } from "next";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import authorimg from "@/public/images/blogs/blogauthor.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




export async function generateMetadata(props: any): Promise<Metadata> {
  try {
    const { params } = props;
    const res = await axios.get(`${baseURL}/blogs/${params.urlName}`);
    const metatitle = res.data.metatitle?.trim();
    const metadescription = res.data.metadescription?.trim();

    const defaultMeta: Metadata = {
      title: "AllSpark Technologies",
      description:
        "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
    };

    return {
      title: metatitle || defaultMeta.title,
      description: metadescription || defaultMeta.description,
    };
  } catch (err) {
    console.error("Metadata fetch failed:", err);
    return {
      title: "AllSpark Technologies",
      description:
        "AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA",
    };
  }
}

export default async function BlogDetailPage(props: any) {
  interface BlogData {
    id: number;
    title: string;
    description: string;
    urlName: string;
    image: string;
    created_at: string;
    content: string;
  }

  const { params } = props;

  const res = await fetch(`${baseURL}/blogs/${params.urlName}`);

  if (!res.ok) return <h1>No detail fetch </h1>;

  const blog: BlogData = await res.json();

  // ✅ Parse content and extract headings
  const dom = new JSDOM(blog.content);
  const document = dom.window.document;
  const headings: { id: string; text: string }[] = [];

  ["h2"].forEach((tag) => {
    document.querySelectorAll(tag).forEach((heading) => {
      const text = heading.textContent?.trim() || "";
      if (!text) return; // ✅ Skip empty headings

      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

      heading.setAttribute("id", id);
      headings.push({ id, text });
    });
  });

  // ✅ Update blog.content with new HTML (with ids on headings)
  const updatedContent = document.body.innerHTML;
  console.log("Blog :", blog)
  return (
    <div>
      <Topnav />
      <Navbar2 />
      {/* <BlogHeroSection title={blog.title} backgroundImage={blog.image} /> */}

      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row ">

        {/* Content Area */}
        <div className="w-full md:w-[75%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[10px] px-[20px] py-[30px]">
          {/* Title  */}
          <p className="text-[35px] font-bold leading-[32px] text-[#111827]">
            {blog.title}
          </p>

        
          {/* Date  */}
          <div className="flex items-center gap-[5px]">
            <MdOutlineDateRange className="text-[20px] text-[#384BFF]" />
            <p className="text-[14px]  text-[#4b5563]">
              {new Date(blog.created_at).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>

          {/* Main Image  */}
          <img src={`${baseURL}/images/blogs/${blog.image}`} className="rounded-[10px] !w-[100%]" alt="MainImg " />
          
          {/* Description  */}
          <p className="text-[15px] text-[#1f2937]">
            {blog.description}
          </p>
          <div
            style={{}}
            className=" blogcontent text-[15px] text-[#1f2937]"
            dangerouslySetInnerHTML={{ __html: updatedContent }}
          />
          
           {/* Author  */}
          <div className="flex gap-[10px]">
            <Image src={authorimg} alt="author" className="w-[70px] h-[70px] object-cover border border-[#384BFF] rounded-full  " />
            <div>
              <p className="text-[20px] leading-[29px] font-medium border-b-2 border-[#384BFF] text">by Irfan</p>
              <div className="flex items-center gap-[5px] mt-[5px]">
                <FaLinkedin className="text-[23px]  text-[#384BFF] hover:scale-[1.1] duration-500 cursor-pointer"/>
                <FaTwitter className="text-[23px] text-[#384BFF] hover:scale-[1.1] duration-500 cursor-pointer"/>
              </div>
            </div>
          </div>

        </div>

        {/* Table of Contents Area */}
        <div className="w-full md:w-[25%] hidden md:block p-[20px]  max-h-[95vh] overflow-y-auto hide-scrollbar md:sticky top-[40px] bottom-[300px] mb-[20px] md:mb-[0px] z-10">
          <p className="text-[21px] font-semibold mt-[10px] mb-[6px] ml-1">
            Table of Contents
          </p>
          <hr />
          <div className="flex flex-col gap-[10px] my-[5px]">
            {headings.map((item, index) => (
              <div key={index}>
                <a
                  href={`#${item.id}`}
                  className="text-[14px] text-[#4b5563] hover:underline"
                >
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
export async function generateStaticParams() {
  const res = await fetch(`${baseURL}/blogs`);
  const blogs = await res.json();

  return blogs.map((blog: { urlName: string }) => ({
    urlName: blog.urlName,
  }));
}
