// import { notFound } from "next/navigation";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import Footer2 from "@/components/Footer2";
import { baseURL } from "@/API/baseURL";
import type { Metadata } from "next";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import authorimg from "@/public/images/blogs/blogauthor.jpg"
import BlogFaqs from "@/components/BlogFaqs";

// ✅ Metadata SSR
export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    const res = await fetch(`${baseURL}/blogs/${params.urlName}`);
    if (!res.ok) throw new Error("Metadata fetch failed");

    const data = await res.json();
    const metatitle = data.metatitle?.trim();
    const metadescription = data.metadescription?.trim();

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

// ✅ Helper functions
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

// ✅ Page SSR
export default async function BlogDetailPage({ params }: any) {
  interface Faq {
    id: string;
    question: string;
    answer: string;
  }
  interface BlogData {
    id: number;
    title: string;
    description: string;
    urlName: string;
    image: string;
    created_at: string;
    items: any[];
    faqs: Faq[];
  }

  // 🔥 SSR fetch (always fresh)
  const res = await fetch(`${baseURL}/blogs/${params.urlName}`);

  if (!res.ok) return <h1>No detail fetch</h1>;
  const blog: BlogData = await res.json();

  const takenIds = new Set<string>();
  const itemsWithIds = Array.isArray(blog.items)
    ? blog.items.map((it: any) => {
      if (it?.type === "h2" && typeof it.value === "string") {
        const id = makeUnique(slugify(it.value), takenIds);
        return { ...it, id };
      }
      return it;
    })
    : [];

  const toc = itemsWithIds
    .filter((it: any) => it.type === "h2" && it.id)
    .map((it: any) => ({ id: it.id, text: it.value }));

  console.log(blog.items)

  return (
    <div>
      <Topnav />
      <Navbar2 />

      <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col md:flex-row">
        {/* Content */}
        <div className="w-full md:w-[75%] md:border-r md:border-[#dbdbdb] flex flex-col gap-[10px] px-[20px] py-[30px] lg:pr-[60px]">
          <p className="heading font-bold leading-[32px] text-[#111827]">
            {blog.title}
          </p>
          <div className="-mt-4">
            <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
          </div>

          <div className="flex items-center gap-[5px]">
            <MdOutlineDateRange className="text-[20px] text-blue-500" />
            <p className="para text-[#4b5563]">
              {new Date(blog.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <Image
            src={`${baseURL}/images/blogs/${blog.image}`}
            width={400}
            height={400}
            unoptimized
            className="rounded-[10px] !w-[100%]"
            alt="MainImg "
          />

          <p className="para text-[#1f2937]">{blog.description}</p>

          <div className="blogsdata">
            {itemsWithIds.map((item: any, index: number) => (
              <div key={index}>
                {item.type === "h1" && <h1 className="h1 heading">{item.value}</h1>}
                {item.type === "h2" && (
                  <div>
                    <h2 id={item.id} className="h2 scroll-mt-24">
                      {item.value}
                    </h2>
                    <div className="-mt-4">
                      <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                    </div>
                  </div>
                )}
                {item.type === "h3" && <h3 className="h3">{item.value}</h3>}
                {item.type === "p" && (
                  <p
                    className="text-[16px] text-[#4B5563] font-[400] para"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                )}
                {item.type === "strong" && (
                  <strong className="strong text-[#4B5563] font-[400] text-[16px]">
                    {item.value}
                  </strong>
                )}
                {item.type === "ul" && (
                  <ul className="ul">
                    {item.value?.map((li: any, liIndex: number) => (
                      <li key={liIndex} className="text-[#4B5563] font-[500] para">
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
                {item.type === "ol" && (
                  <ol className="ol">
                    {item.value?.map((li: any, liIndex: number) => (
                      <li key={liIndex} className="text-[#4B5563] font-[500] para">
                        {li}
                      </li>
                    ))}
                  </ol>
                )}
                {item.type === "singleimage" && (
                  <Image
                    src={`${baseURL}/images/blogs/${item.value}`}
                    unoptimized
                    alt="img"
                    width={1200}
                    height={2000}
                    className="w-full"
                  />
                )}
                {item.type === "doubleimage" && (
                  <div className="flex flex-col lg:flex-row gap-4">
                    {item.value.map((url: string, index: number) => (
                      <Image
                        key={index}
                        src={`${baseURL}/images/blogs/${url}`}
                        unoptimized
                        alt={`img-${index}`}
                        width={1200}
                        height={2000}
                        className="w-full lg:w-1/2"
                      />
                    ))}
                  </div>
                )}
                {item.type === "tripleimage" && (
                  <div className="flex flex-col lg:flex-row gap-4">
                    {item.value.map((url: string, index: number) => (
                      <Image
                        key={index}
                        src={`${baseURL}/images/blogs/${url}`}
                        unoptimized
                        alt={`img-${index}`}
                        width={1200}
                        height={2000}
                        className="w-full lg:w-1/3"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQs */}
          <BlogFaqs faqs={blog.faqs} />

          {/* Author */}
          <div className="flex gap-[10px] justify-start  items-center">
            <Image
              src={authorimg}
              unoptimized

              alt="author"
              className="w-[50px] h-[50px] object-cover border border-[#384BFF] rounded-full"
            />
            <div>
              <p className="subheading leading-[29px] font-medium border-b-2 border-[#384BFF] relative bottom-[3px]">
                by Admin
              </p>
            </div>
          </div>
        </div>

        {/* TOC */}
        <div className="w-full md:w-[25%] hidden md:block p-[20px] max-h-[95vh] overflow-y-auto hide-scrollbar md:sticky top-[40px] bottom-[300px] mb-[20px] md:mb-[0px] z-10">
          <p className=" font-semibold mt-[10px] mb-[6px] ml-1 subheading">
            Table of Contents
          </p>
          <hr />
          <div className="flex flex-col gap-[10px] my-[5px]">
            {toc.map((h, i) => (
              <div key={i}>
                <a
                  href={`#${h.id}`}
                  className="para text-[#4b5563] hover:text-blue-500 cursor-pointer"
                >
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
