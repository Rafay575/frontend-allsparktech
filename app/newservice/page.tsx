import Footer2 from '@/components/Footer2'
import Industries from '@/components/Industries'
import Navbar2 from '@/components/Navbar2'
import ServiceAbout from '@/components/ServiceAbout'
import ServiceCard from '@/components/ServiceCard'
import ServiceContact from '@/components/ServiceContact'
import ServiceFaqs from '@/components/ServiceFaqs'
import ServiceHero from '@/components/ServiceHero'
import Logos from '@/components/ServiceLogos'
import ServiceProcess from '@/components/ServiceProcess'
import ServicesBanner from '@/components/ServicesBanner'
import ServicesClients from '@/components/ServicesClients'
import ServicesIndus from '@/components/ServicesIndus'
import ServicesOffering from '@/components/ServicesOffering'
import ServiceTechnologies from '@/components/ServiceTechnologies'
import logo1 from "@/public/images/companies/logo-1.png";
import logo2 from "@/public/images/companies/logo-2.png";
import logo3 from "@/public/images/companies/logo-3.png";
import logo4 from "@/public/images/companies/logo-4.png";
import logo5 from "@/public/images/companies/logo-5.png";
import icon1 from "@/public/images/serviceicon1.png"
import icon2 from "@/public/images/serviceicon2.png"
import icon3 from "@/public/images/serviceicon3.png"
import icon4 from "@/public/images/serviceicon4.png"
import img1 from "@/public/images/serviceimg2.png"
import img2 from "@/public/images/serviceimg3.png"
import img3 from "@/public/images/aboutShape2.png"
import icon11 from "@/public/images/serviceicon5.png"
import icon22 from "@/public/images/serviceicon6.png"
import icon33 from "@/public/images/serviceicon7.png"
import process1 from "@/public/images/process1.png"
import process2 from "@/public/images/process2.png"
import process3 from "@/public/images/process3.png"
import process4 from "@/public/images/process4.png"
import dir1 from "@/public/images/dir1.png"
import dir2 from "@/public/images/dir2.png"
import dir3 from "@/public/images/dir3.png"
import react from "@/public/images/icons/react.png"
import angular from "@/public/images/icons/angular.png"
import vue from "@/public/images/icons/vue.png"
import js from "@/public/images/icons/js.png"
import bootstrap from "@/public/images/icons/bootstrap.png"
import csdicon1 from "@/public/images/icons/csdicon1.png"
import csdicon2 from "@/public/images/icons/csdicon2.png"
import csdicon3 from "@/public/images/icons/csdicon3.png"
import csdicon4 from "@/public/images/icons/csdicon4.png"
import csdicon5 from "@/public/images/icons/csdicon5.png"
import csdicon6 from "@/public/images/icons/csdicon6.png"
import img from "@/public/images/ctaThumb1_1.png"
import img4 from "@/public/images/indusimg1.png"
import img5 from "@/public/images/indusimg2.png"
import img6 from "@/public/images/shape.png"
import img7 from "@/public/images/clientimg1.png"
import img8 from "@/public/images/clientimg2.png"
import img9 from "@/public/images/shape.png"
import hugicon from "@/public/images/hugicon.png"
import industry1 from "@/public/images/industry1.png"
import servicefaq1 from "@/public/images/servicefaq1.png"
import servicefaq2 from "@/public/images/servicefaq2.png"
import servicefaq3 from "@/public/images/servicefaq3.png"
import man from "@/public/images/man.png"

import React from 'react'

export default function page() {
    const servicePageData = {
        serviceHero: {
            btnText: "Enterprise Software Solutions",
            btnText2: "GET STARTED",
            btnText3: "Get In Touch",
            title: "Enterprise Software Development Solution",
            description: "Smart interprise software development services in the USA to streamline workflows, enhance security, and drive growth.",
            formSubtitle: "TALK TO US",
            formTitle: "Book a Free Consultation",
        },
        serviceLogos: {
            logos: [logo1, logo2, logo3, logo4, logo5],
        },
        serviceCard: {
            title: "10 Years of Experience <br> Delivering Innovative <br> Custom Software <br> Solutions",
            cards: [
                {
                    icon: icon1,
                    number: 100,
                    text: "Developed Custom Solutions",
                    symbol: "+"
                },
                {
                    icon: icon2,
                    number: 3,
                    text: "Years Client Engagement",
                    symbol: "+"
                },
                {
                    icon: icon3,
                    number: 70,
                    text: "Senior Engineer",
                    symbol: "%"
                },
                {
                    icon: icon4,
                    number: 98,
                    text: "Satisfaction Rate",
                    symbol: "%"
                }
            ]
        },
        serviceAbout: {
            image1: img1,
            image2: img2,
            image3: img3,
            subTitle: "About Company",
            title: "Future-Ready Custom Software Solutions",
            des: "AllSpark Technologies is a trusted custom software development company in the USA, delivering secure, scalable, and innovative solutions tailored to business needs. Our expert custom software developers help organizations achieve efficiency and growth through next-generation software development services.",
            features: [
                {
                    icon: icon11,
                    title: "Secure"
                },
                {
                    icon: icon22,
                    title: "Scalable"
                },
                {
                    icon: icon33,
                    title: "Agile"
                }
            ],
            stats: [
                {
                    number: "500+",
                    text: "Projects Done"
                },
                {
                    number: "1000+",
                    text: "Happy Clients"
                },
                {
                    number: "200+",
                    text: "Team Members"
                }
            ]
        },
        serviceProcess: {
            title: "Our Proven Custom Software Development Process",
            letters: ["Software"],
            des: "We follow a structured, transparent, and efficient software development process that ensures custom software solutions are delivered with quality, speed, and scalability.",
            process: [
                {
                    image: process1,
                    heading: "Requirement Study",
                    des: "We define goals, features,and functions for custom software development.",
                    dir: dir1

                },
                {
                    image: process2,
                    heading: "UI/UX Design",
                    des: "Our software design company creates user-friendly, efficient interfaces.",
                    dir: dir2
                },
                {
                    image: process3,
                    heading: "Development Stage",
                    des: "Custom Software Developers build secure, scalable solutions.",
                    dir: dir3
                },
                {
                    image: process4,
                    heading: "Testing & Launch",
                    des: "We ensure flawless delivery with quality software development services."
                }
            ]
        },
        serviceTechnologies: {
            title: "Advanced Web and Application Development Technologies",
            des: "At AllSpark Technologies, we use modern frameworks, cloud platforms, and secure programming languages to deliver scalable, user-focused,enterprise-ready web and application development solutions.",
            frontend: [
                { name: "react", Icon: react },
                { name: "angular", Icon: angular },
                { name: "vue", Icon: vue },
                { name: "js", Icon: js },
                { name: "bootstrap", Icon: bootstrap },
                { name: "bootstrap", Icon: bootstrap },
            ],
            backend: [
                { name: "vue", Icon: vue },
                { name: "js", Icon: js },
            ],
            database: [
                { name: "js", Icon: js },
                { name: "js", Icon: js },
            ],
            others: [
                { name: "bootstrap", Icon: bootstrap },
                { name: "bootstrap", Icon: bootstrap },
            ],
        },
        serviceOffering: {
            title: "Explore Our Core Software Development Offerings ",
            letters: ["Software", "Development"],
            des: "We offer custom software development service in USA, delivering secure, scalable, and innovative solutions tailored to meet unique business requirements.",
            cards: [
                {
                    icon: csdicon1,
                    heading: "Enterprise Software Development Service",
                    des: "Enterprise software services in USA designed to improve operations, security, and scalability for businesses.",
                    btnText: "Read more"
                },
                {
                    icon: csdicon2,
                    heading: "Bespoke Application Development Services",
                    des: "Custom application development tailored to unique workflows, boosting efficiency and business growth.",
                    btnText: "Read more"

                },
                {
                    icon: csdicon3,
                    heading: "Digital Product Development Services",
                    des: "We design, build, and launch innovative digital products with seamless user experiences.",
                    btnText: "Read more"
                },
                {
                    icon: csdicon4,
                    heading: "System Integration Services",
                    des: "Integrating applications, platforms, and cloud solutions into one secure, streamlined ecosystem.",
                    btnText: "Read more"
                },
                {
                    icon: csdicon5,
                    heading: "API Development Services in USA",
                    des: "API development in USA ensures seamless communication, secure integration, and efficient data sharing.",
                    btnText: "Read more"
                },
                {
                    icon: csdicon6,
                    heading: "Future-Ready Software Solutions (AI, Cloud, IoT)",
                    des: "We create future-ready software using AI, cloud, and IoT for competitive advantage.",
                    btnText: "Read more"
                },
            ]
        },
        serviceBanner: {
            image: img,
            Subtitle: "About Company",
            title: "Start Your Software Development Journey Today",
            des: "Partner with AllSpark Technologies for secure, scalable, custom web development solutions that drive long-term business growth.",
            btnText: "Talk To Specialist"
        },
        serviceIndus: {
            image1: img4,
            image2: img5,
            image3: img6,
            title: "Industries We Serve in Custom Software Development",
            letters: ["Development"],
            des1: "AllSpark Technologies provides custom software development services designed to fit the unique needs of every industry. Our solutions support businesses in healthcare, finance, retail, education, logistics, eCommerce, and technology, ensuring seamless operations and future-ready growth. From enterprise software development to secure web and mobile applications, we build software that solves real problems and integrates with existing systems.",
            des2: "As a leading custom software development company in the USA, AllSpark Technologies delivers secure, enterprise-grade, and scalable software services. Our team of custom software developers ensures your business gains competitive advantage with future-ready solutions"
        },
        serviceIndustries: {
            title: "Industries We Serve",
            letters: ["Serve"],
            industries: [
                {
                    image: industry1,
                    title: "Healthcare Software Development",
                    des: "We build secure, compliant, and scalable healthcare applications integrating medical systems, improving patient management, analytics, and overall outcomes.",
                    btnText: "Explore More"
                },
                {
                    image: industry1,
                    title: "E-commerce Solutions",
                    des: "Robust e-commerce platforms with payment integration, scalable infrastructure, and personalized shopping experiences for customers.",
                    btnText: "Explore More"
                },
                {
                    image: industry1,
                    title: "Fintech Applications",
                    des: "Secure fintech apps with fraud detection, digital wallets, and real-time transaction analytics for the finance industry.",
                    btnText: "Explore More"
                }
            ]
        },
        serviceClient: {
            image1: img7,
            image2: img8,
            image3: img9,
            image4: hugicon,
            imageText: "Quality, Trust, Growth.",
            title: "Why Do Our Clients Love Us?",
            letters: ["Clients"],
            des1: "AllSpark Technologies, a leading USA-based custom software development company in USA, delivers secure, scalable, and innovative solutions for enterprises and growing businesses.",
            des2: "We specialize in enterprise software, web apps, and AI-driven solutions, ensuring projects stay on time and within budget. With over a decade of proven expertise, we design adaptable technology that improves agility, drives growth, and delivers measurable results.",
            lis: ["Recognized for reliable and secure web application development with 5-star client ratings",
                "92% of our customers report complete satisfaction with our services.",
                "A large part of our talented team has been with us for more than 5 years.",
                "Businesses choose us for scalable custom web application development across healthcare, eCommerce, finance, and more"
            ]
        },
        serviceFAQs: {
            image1: servicefaq1,
            image2: servicefaq2,
            image3: servicefaq3,
            subTitle: "FAQ",
            title: "Prioritize Your Site's Safety And Security",
            faqs: [
                {
                    "question": "Do you provide API integration and system integration?",
                    "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
                },
                {
                    "question": "Do you offer cloud-based software solutions?",
                    "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
                },
                {
                    "question": "What technologies do you use for development?",
                    "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
                },
                {
                    "question": "Do you provide consulting before development?",
                    "answer": "Our custom software developers use Java, .NET, Node.js, React, and other advanced platforms for secure applications."
                }
            ]
        },
        serviceContact: {
            image: man,
            subTitle: "TALK TO US",
            title: "Let’s Build Your Custom Software Solution",
            btnText: "Get In Touch"
        }

    }
    return (
        <>
            <Navbar2 />
            <ServiceHero serviceHero={servicePageData.serviceHero} />
            <Logos serviceLogos={servicePageData.serviceLogos} />
            <ServiceCard serviceCard={servicePageData.serviceCard} />
            <ServiceAbout serviceAbout={servicePageData.serviceAbout} />
            <ServiceProcess serviceProcess={servicePageData.serviceProcess} />
            <ServiceTechnologies serviceTechnologies={servicePageData.serviceTechnologies} />
            <ServicesOffering serviceOffering={servicePageData.serviceOffering} />
            <ServicesBanner serviceBanner={servicePageData.serviceBanner} />
            <ServicesIndus serviceIndus={servicePageData.serviceIndus} />
            <Industries serviceIndustries={servicePageData.serviceIndustries} />
            <ServicesClients serviceClient={servicePageData.serviceClient} />
            <ServiceFaqs serviceFAQs={servicePageData.serviceFAQs} />
            <ServiceContact serviceContact={servicePageData.serviceContact}/>
            <Footer2 />
        </>
    )
}
