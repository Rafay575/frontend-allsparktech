// import { notFound } from "next/navigation";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import { baseURL } from "@/API/baseURL";
import axios from "axios";
import type { Metadata } from "next";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import authorimg from "@/public/images/blogs/blogauthor.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import BlogFaqs from "@/components/BlogFaqs";


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


const slugify = (text: string) =>
  (text || "")
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-") || "section";

const makeUnique = (base: string, taken: Set<string>) => {
  let id = base;
  let n = 2;
  while (taken.has(id)) id = `${base}-${n++}`;
  taken.add(id);
  return id;
};

export default async function BlogDetailPage(props: any) {
  interface Faq {
    id: string,
    question: string;
    answer: string;
  }
  interface content {
    html: string;
  }

  interface BlogData {
    id: number;
    title: string;
    description: string;
    urlName: string;
    image: string;
    created_at: string;
    content: content[];
    items: any;
    faqs: Faq[]
  }

  const { params } = props;

  const res = await fetch(`${baseURL}/blogs/${params.urlName}`);

  if (!res.ok) return <h1>No detail fetch </h1>;

  const blog: BlogData = await res.json();

  const takenIds = new Set<string>();

  // add stable ids to h2 items
  const itemsWithIds = Array.isArray(blog.items)
    ? blog.items.map((it: any) => {
      if (it?.type === "h2" && typeof it.value === "string") {
        const id = makeUnique(slugify(it.value), takenIds);
        return { ...it, id };
      }
      return it;
    })
    : [];

  // build TOC from h2 items only
  const toc = itemsWithIds
    .filter((it: any) => it.type === "h2" && it.id)
    .map((it: any) => ({ id: it.id, text: it.value }));



  // ✅ Update blog.content with new HTML (with ids on headings)

  console.log("Blog :", blog)
  return (
    <div>
      <Topnav />
      <Navbar2 />
      {/* <BlogHeroSection title={blog.title} backgroundImage={blog.image} /> */}

      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row ">

        {/* Content Area */}
        <div className="w-full md:w-[75%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[10px] px-[20px] py-[30px] lg:pr-[60px]">
          {/* Title  */}
          <p className="text-[35px] font-bold leading-[32px] text-[#111827]">
            {blog.title}
          </p>
          <div className="-mt-4">
            <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
          </div>


          {/* Date  */}
          <div className="flex items-center gap-[5px]">
            <MdOutlineDateRange className="text-[20px] text-blue-500" />
            <p className="text-[14px]  text-[#4b5563]">
              {new Date(blog.created_at).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>

          {/* Main Image  */}
          <Image src={`${baseURL}/images/blogs/${blog.image}`} width={400} height={400} className="rounded-[10px] !w-[100%]" alt="MainImg " />

          {/* Description  */}
          <p className="text-[16px] text-[#1f2937]">
            {blog.description}
          </p>


          {/* Items  */}
          <div className="blogsdata">
            {itemsWithIds.map((item: any, index: number) => (
              <div key={index}>
                {item.type === "h1" && <h1 className="h1">{item.value}</h1>}
                {item.type === "h2" &&
                  <div>
                    <h2 id={item.id} className="h2 scroll-mt-24">{item.value}</h2>
                    <div className="-mt-4">
                      <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                    </div>
                  </div>}
                {item.type === "h3" && <h3 className="h3">{item.value}</h3>}

                {item.type === "p" && <p className="text-[16px] text-[#4B5563] font-[400]">{item.value}</p>}
                {item.type === "strong" && <strong className="strong text-[#4B5563] font-[400] text-[16px]">{item.value}</strong>}

                {item.type === "ul" && (
                  <ul className="ul">
                    {item.value?.map((li: any, liIndex: number) => (
                      <li key={liIndex} className="text-[#4B5563] font-[500]">{li}</li>
                    ))}
                  </ul>
                )}

                {item.type === "ol" && (
                  <ol className="ol">
                    {item.value?.map((li: any, liIndex: number) => (
                      <li key={liIndex} className="text-[#4B5563] font-[500]">{li}</li>
                    ))}
                  </ol>
                )}


                {item.type === "table" && (
                  <table className="table !text-[16px] border-collapse border border-gray-400 w-full text-left rounded-[10px] my-[40px]">
                    <thead>
                      <tr>
                        {item.headers?.map((header: string, hIndex: number) => (
                          <th key={hIndex} className="border border-gray-200 px-2 py-1 bg-[#dbe8f9]">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.rows?.map((row: any[], rIndex: number) => (
                        <tr key={rIndex}>
                          {row.map((cell: string, cIndex: number) => (
                            <td key={cIndex} className="border border-gray-200 px-2 py-1 hover:bg-[#eaf2fc] cursor-pointer">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {item.type === "singleimage" && (
                  <Image
                    src={`${baseURL}/images/blogs/${item.value}`}
                    width={800}
                    height={500}
                    className="w-full rounded-[10px] my-4"
                    alt="single image"
                  />
                )}

                {item.type === "doubleimage" && (
                  <div className="grid grid-cols-2 gap-1  my-4">
                    {item.value.map((src: string, idx: number) => (
                      <Image
                        key={idx}
                        src={`${baseURL}/images/blogs/${src}`}
                        width={600}
                        height={400}
                        className="w-full h-[300px]  object-cover rounded-[4px]"
                        alt={`double image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}

                {item.type === "tripleimage" && (
                  <div className="grid grid-cols-3 gap-1 my-4">
                    {item.value.map((src: string, idx: number) => (
                      <Image
                        key={idx}
                        src={`${baseURL}/images/blogs/${src}`}
                        width={400}
                        height={300}
                        className="w-full h-[300px] object-cover  rounded-[4px]"
                        alt={`triple image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}

              </div>
            ))
            }
          </div>




          {/* FAQs  */}
          <BlogFaqs faqs={blog.faqs} />

          {/* Author  */}
          <div className="flex gap-[10px] md:justify-start justify-center">
            <Image src={authorimg} alt="author" className="w-[70px] h-[70px] object-cover border border-[#384BFF] rounded-full  " />
            <div>
              <p className="text-[20px] leading-[29px] font-medium border-b-2 border-[#384BFF] text">by Irfan</p>
              <div className="flex items-center gap-[5px] mt-[5px]">
                <FaLinkedin className="text-[23px]  text-[#384BFF] hover:scale-[1.1] duration-500 cursor-pointer" />
                <FaTwitter className="text-[23px] text-[#384BFF] hover:scale-[1.1] duration-500 cursor-pointer" />
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
            {toc.map((h, i) => (
              <div key={i}>
                <a href={`#${h.id}`} className="text-[14px] text-[#4b5563] hover:text-blue-500 cursor-pointer">
                  {h.text}
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
