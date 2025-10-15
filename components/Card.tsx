import Link from 'next/link';
import React from 'react'


interface subservice {
  id: number,
  slug: string,
  service: string,
  json: any,
}


export default function Card({ subServices, introduction }: { subServices: subservice[], introduction: string }) {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Intro Paragraph */}
        <div className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed ">
            {introduction}
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
          {subServices?.map((card, index) => (
            <Link href={`${card.slug?`/subservice/${card.slug}`:`#`}`}
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transform transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800 ">
                {card.json.section2.title}
                <div className="-mt-2">
                  <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                </div>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed ">
                <p>
                  {card.json.section2.des.length > 300
                    ? card.json.section2.des.substring(0, 300) + "..."
                    : card.json.section2.des}
                </p>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
