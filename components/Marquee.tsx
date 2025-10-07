"use client";

import Marquee from "react-fast-marquee";
import mul from "@/public/images/mul.png"
import Image from "next/image";

export default function MyMarquee({titles}:{titles:string[]}) {
  return (
    <div className=" py-10">
      <Marquee speed={200} gradient={false} pauseOnHover={true}>
        {titles.map((title,i)=>(
            <span key={i} className="flex items-center gap-[20px]">
                <span className="heading font-[700]">{title}</span>
                <Image src={mul} width={200} height={200} alt="titles" className="heading  mr-[20px] w-[40px]"/>
            </span>
        ))}
      </Marquee>
    </div>
  );
}
