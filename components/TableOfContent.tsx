import React from 'react'

const TableOfContent = () => {
  return (
    <>
         <div className="sticky top-14 p-4 h-screen border-l border-gray-200">
            <h3 className="text-xl font-bold border-b border-gray-700 pb-2 text-gray-800 mb-4">
              Table of Contents
            </h3>
            <div className="space-y-2 text-gray-600 text-sm !divst-none">
              <div className="border-b border-gray-300 pb-2">
                <a href="#our-services" className="hover:text-[#2B4EFF]">
                  Our Services
                </a>
              </div>
              <div className="border-b border-gray-300 pb-2">
                <a href="#our-approach" className="hover:text-[#2B4EFF]">
                  Our Approach
                </a>
              </div>
              <div className="border-b border-gray-300 pb-2">
                <a href="#why-choose-ast" className="hover:text-[#2B4EFF]">
                  Why Choose AST
                </a>
              </div>
              <div className="border-b border-gray-300 pb-2">
                <a href="#faqs" className="hover:text-[#2B4EFF]">
                  FAQs
                </a>
              </div>
              <div className="border-b border-gray-300 pb-2">
                <a href="#contact" className="hover:text-[#2B4EFF]">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
    </>
  )
}

export default TableOfContent