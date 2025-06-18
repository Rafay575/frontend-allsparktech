"use client"
import React from "react"
import Image from "next/image"

export default function Logos() {

  const logos = [
    { id: 1, src: "/images/companies/logo-1.png", alt: "AllSpark Logo 1" },
    { id: 2, src: "/images/companies/logo-2.png", alt: "AllSpark Logo 2" },
    { id: 3, src: "/images/companies/logo-3.png", alt: "AllSpark Logo 3" },
    { id: 4, src: "/images/companies/logo-4.png", alt: "AllSpark Logo 4" },
    { id: 5, src: "/images/companies/logo-5.png", alt: "AllSpark Logo 5" },
  ]

  return (
    <section className="py-8 border-b border-gray-400">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4">
        {logos.map((logo) => (
          <div key={logo.id} className="flex h-16 w-auto items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain"

              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  )
}
