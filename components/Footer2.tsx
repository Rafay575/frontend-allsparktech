// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer2() {
  return (
    <>
      <footer className="bg-[#0D0B52] text-white ">
        {/* Top Bar */}

        <div className="py-8">
          <div className="container ">
            {/* Main container with bright background */}
            <div className="flex flex-col items-center justify-between rounded-xl bg px-6 py-10 shadow-md md:flex-row">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=638+Knollwood+Road,+Franklin+Lakes+NJ+07417"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 flex w-full flex-col items-center text-center md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3 md:text-left"
                aria-label="Open Address in Google Maps"
              >
                {/* Icon Circle */}
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191B4E] border-dotted border-[#191B4E]  border-2 md:mb-0">
                  <MapPin size={20} />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    Address
                  </h3>
                  <p className="text-sm">
                    638 Knollwood Road, Franklin Lakes NJ 07417
                  </p>
                </div>
              </a>

              {/* Vertical divider (visible on md+ screens) */}
              <div className="hidden h-16 w-px bg-gray-300 opacity-25 md:block" />

              {/* SendEmail */}
              <a
                href="mailto:info@allsparktechnologies.com"
                className="mb-6 flex w-full flex-col items-center text-center md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3 md:text-left"
                aria-label="Send email to info@allsparktechnologies.com"
              >
                {/* Icon Circle */}
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191B4E] border-dotted border-[#191B4E] border-2 md:mb-0">
                  <Mail size={20} />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    Send Email
                  </h3>
                  <p className="text-sm">info@allsparktechnologies.com</p>
                </div>
              </a>

              {/* Vertical divider (visible on md+ screens) */}
              <div className="hidden h-16 w-px bg-gray-300 opacity-25 md:block" />

              {/* CallEmergency */}
              <a
                href="tel:+17627777275"
                className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:items-center md:space-x-3 md:text-left"
                aria-label="Call +1(616)308-1863"
              >
                {/* Icon Circle */}
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191B4E] border-dotted border-[#191B4E]  border-2 md:mb-0">
                  <Phone size={20} />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    Call Now
                  </h3>
                  <p className="text-sm">+1(616)308-1863</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl pb-8 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/footer-logo.svg"
              alt="AllSpark Logo"
              width={150}
              height={50}
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              AllSpark Technologies is dedicated to delivering innovative tech
              solutions, focusing on modern web and mobile applications to help
              businesses thrive in a digital-first world.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <Link
                href="https://www.facebook.com/allsparktechnologies.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/allspark_technologies?igsh=aXkzbDMwc2Jvc3g4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/allsparktec"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <FaXTwitter className="h-4 w-4" />
              </Link>
            
              <Link
                href="https://www.linkedin.com/company/all-spark-technologies/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:pl-[60px]">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: "About", href: "/about" },
                { name: "FAQ'S", href: "/#faqs" },
                { name: "Contact", href: "/contact" },
                { name: "Blogs", href: "/blogs" },
              ].map((linkItem, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronsRight className="h-4 w-4 text-white" />
                  <Link href={linkItem.href} className="hover:text-white">
                    {linkItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-4 text-sm">
              {[
                { service: "Custom Software Development", icon: "/images/development-01.svg", query: "custom-software-development" },
                { service: "Website Development", icon: "/images/web-app-development-01.svg", query: "website-development" },
                { service: "Mobile App Development", icon: "/images/web-app-development-01.svg", query: "mobile-app-development" },
                { service: "AI & Machine Learning", icon: "/images/ai-machine-learning-01.svg", query: "ai-and-machine-learning" },
                { service: "Digital Marketing", icon: "/images/digital-marketing-seo-01.svg", query: "digital-marketing" },
              ].map((serviceItem, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronsRight className="h-4 w-4 text-white" />
                  <Link
                    href={{
                      pathname: `/${serviceItem.query}`
                    }}
                    className="flex items-center hover:text-white transition duration-300"
                  >
                    {serviceItem.service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className=" text-end">
            <div className=" space-y-6">
              <h3 className="text-lg text-left font-semibold text-white">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>info@allsparktechnologies.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>+1(616)308-1863</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-gray-400" />
                  <span className="text-start">
                    638 KNOLLWOOD ROAD, FRANKLIN LAKES, NJ, 07417
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-white text-sm">
          <p>
            © All Copyright {new Date().getFullYear()} by AllSpark Technologies
          </p>
          <div className="flex space-x-4">
            <Link href="/termsandconditions" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/privacypolicy" className="hover:underline">
              Privacy Policy
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
