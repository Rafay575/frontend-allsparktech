import Footer2 from '@/components/Footer2'
import Navbar2 from '@/components/Navbar2'
import Topnav from '@/components/Topnav'
import React from 'react'
import demo from "@/public/images/demo2.png"
import img3 from "@/public/images/subservice2.png"
import img5 from "@/public/images/subservice5.png"
import img6 from "@/public/images/subservice6.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import ServicesContact from '@/components/ServicesContact'
// import { title } from 'process'


export default function Hello() {
    const json=[{
        title:"Custom Software Development Solutions",
        section2:{
            title:"Transform Your Business with Enterprise Software Solutions",

        }
    }]
    const data = [
        {
            "title": "Custom-Built Solutions",
            "description": "Software designed to meet your organization’s unique needs, ensuring seamless integration with existing workflows through expert enterprise software consulting."
        },
        {
            "title": "Maximizing ROI with Scalable Solutions",
            "description": "Scalable and efficient software ensures every dollar spent delivers significant measurable results."
        },
        {
            "title": "Future-Proofing with Cutting-Edge Technology",
            "description": "Stay ahead of the curve with AI-driven insights, smart automation, and advanced cloud integrations backed by strong enterprise software architecture."
        },
        {
            "title": "Ensuring Robust Data Security",
            "description": "Your data is safe with us. We prioritize protection with strong encryption, regular audits, and compliance with industry standards."
        },
        {
            "title": "Accelerating Delivery with Agile Development",
            "description": "Our agile approach ensures you get faster delivery without compromising quality."
        },
        {
            "title": "Providing Continuous Support and Maintenance",
            "description": "We don't just deliver software. We provide ongoing updates, maintenance, and feature enhancements through complete enterprise software development services."
        }
    ]
    const data3 = [
        {
            "title": "Industry Expertise",
            "description": "We understand the specific challenges your industry faces and apply proven experience to deliver reliable results."
        },
        {
            "title": "Agile Methodology",
            "description": "Our flexible and iterative approach allows your software to evolve with changing needs."
        },
        {
            "title": "Focus on Security",
            "description": "We protect your systems and data using enterprise-grade security protocols and best practices."
        },
        {
            "title": "Collaborative Approach",
            "description": "We partner closely with your team, turning your ideas into efficient and customized software solutions."
        }
    ]


    const faq = [
        {
            "item": "item-1",
            "ques": "What types of enterprise software do you develop?",
            "ans": "We specialize in ERP systems, enterprise application development, cloud-based tools, custom integrations, and more."
        },
        {
            "item": "item-2",
            "ques": "What industries do you work with?",
            "ans": "From healthcare to logistics and education, we create software for a wide range of sectors."
        },
        {
            "item": "item-1",
            "ques": "Can you modernize legacy systems?",
            "ans": "Yes. We offer enterprise software modernization to upgrade your existing systems to current technologies."
        },
        {
            "item": "item-2",
            "ques": "Is there ongoing support after delivery?",
            "ans": "Absolutely. We provide updates, maintenance, and long-term assistance to keep your systems running efficiently."
        },
        {
            "item": "item-1",
            "ques": "How does your development process work?",
            "ans": "Our process includes discovery, planning, design, development, testing, and ongoing support to ensure success."
        },
        {
            "item": "item-2",
            "ques": "How secure are your software solutions?",
            "ans": "We use advanced encryption, secure development practices, and regular audits to safeguard your data."
        }
    ];





    return (
        <>
            <Topnav />
            <Navbar2 />

            {/* Hero Section  */}

            <section
                className="bg-cover bg-no-repeat h-[50vh]"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${demo.src})`, }}>
                <div className="container flex flex-col justify-center items-center h-full">
                    <p className='text-white text-[30px] lg:text-[40px] font-bold'>{json[0].title}</p>
                </div>
            </section>


            <div className='flex flex-col gap-y-[100px]  lg:gap-y-[150px]  my-[70px]'>

                {/* Title  */}
                <div className="container">
                    <div className="mb-[30px]">
                        <p className=' w-full lg:w-[65%] font-bold text-[30px] text-[#1F2937] lg:text-[35px]  lg:leading-[40px]'>{json[0].section2.title}</p>
                    </div>
                    <div className=' w-full lg:w-[65%] text-[#6f798b]'>
                        <p >Discover how our customized enterprise software solutions solve your biggest challenges and help your business thrive in a competitive world. As a leading enterprise software development company, we bring innovation, security, and scalability to the forefront of your digital transformation journey.</p>
                    </div>
                </div>

                {/* Section2  */}
                <div className='container flex flex-col lg:flex-row '>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                        <p className='font-bold text-[30px] lg:text-[35px] text-[#1F2937]  lg:leading-[40px]'>Empowering Businesses with Enterprise Software Solutions</p>
                        {data.map((item, index) => (
                            <div key={index} >
                                <h3 className="font-semibold text-[24px] text-[#1F2937]">{item.title}</h3>
                                <div className="-mt-3">
                                    <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                                </div>
                                <p className="text-[15px] text-[#6f798b]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='w-full lg:w-[50%] lg:pl-[20px]'>
                        <Image src={img3} alt='img3' className='w-full mt-[30px] lg:mt-[0px]' />
                    </div>
                </div>

                {/* Section 3  */}
                <div className="container">
                    <p className=' w-full lg:w-[65%] font-bold text-[30px] lg:text-[35px]  lg:leading-[40px] text-[#1F2937]'>Driving Innovation with Enterprise Software Development</p>
                    <p className='w-full lg:w-[65%] text-[15px] text-[#6f798b] mt-[20px]'>From cloud-based tools to advanced ERP systems, we develop innovative, scalable solutions built to grow with your business. Our expertise in enterprise application development, AI, and architectural planning ensures real-time responsiveness and long-term system adaptability. Whether you need custom platforms or enterprise software modernization, we align every project with your goals and future roadmap.</p>
                    {/* <div className='flex flex-col lg:flex-row gap-[20px] my-[30px]'>
                        <div className='w-full lg:w-[50%]'>
                            <Image src={img33} alt='img33' className='w-full rounded-[40px]' />
                            <p className='font-bold text-[22px] text-[#1F2937]'>AIG</p>
                            <div className="-mt-3">
                                <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                            </div>
                            <p className=' text-[15px] text-[#6f798b]'>World-class interface to drive evidence-based decision making.</p>
                        </div>
                        <div className='w-full lg:w-[50%]'>
                            <Image src={img4} alt='img4' className='w-full rounded-[40px]' />
                            <p className='font-bold text-[22px] text-[#1F2937]'>Stillwell-hansen</p>
                            <div className="-mt-3">
                                <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                            </div>
                            <p className=' text-[15px] text-[#6f798b]'>Bringing mission-critical business software into the 21st century.</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='text-center border-2 border-blue-700 py-[12px] px-[20px] rounded-full text-blue-700 hover:bg-blue-700 hover:text-white font-[600]'>Rewrite your success story</button>
                    </div> */}
                </div>

                {/* Section 4  */}
                <div className='bg-[#0D0B52]'>
                    <div className="container py-[50px] lg:py-[100px]">
                        <p className='font-bold text-[30px] lg:text-[35px]  lg:leading-[40px] text-white'>How We Work</p>
                        <div className='flex flex-col lg:flex-row gap-x-[80px] gap-y-[30px] lg:gap-y-0 mt-[40px]'>
                            <div className='grow'>
                                <p className='font-semibold text-[50px] lg:text-[75px] text-white'>1</p>
                                <p className='text-white font-semibold text-[25px]'>Discovery & Planning</p>
                                <p className='text-[15px] text-[white] mt-[10px]'>We begin by understanding your business needs and goals, then create a detailed plan for success.</p>
                            </div>
                            <div className='grow'>
                                <p className='font-semibold text-[50px] lg:text-[75px] text-white mt-[0] lg:mt-[100px]'>2</p>
                                <p className='text-white font-semibold text-[25px]'>Design & Development</p>
                                <p className='text-[15px] text-[white] mt-[10px]'>Our developers build intuitive, scalable systems with a focus on custom enterprise software development.</p>
                            </div>
                            <div className='grow'>
                                <p className='font-semibold text-[50px] lg:text-[75px] text-white mt-[0] lg:mt-[200px]'>3</p>
                                <p className='text-white font-semibold text-[25px]'>Testing & Quality Assurance</p>
                                <p className='text-[15px] text-[white] mt-[10px]'>Each solution is thoroughly tested for functionality, performance, and security.</p>
                            </div>
                            <div className='grow'>
                                <p className='font-semibold text-[50px] lg:text-[75px] text-white mt-[0] lg:mt-[300px]'>4</p>
                                <p className='text-white font-semibold text-[25px]'>Deployment & Support</p>
                                <p className='text-[15px] text-[white] mt-[10px]'> We manage deployment and provide long-term support to ensure optimal performance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section5  */}
                <div className='container flex flex-col lg:flex-row '>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                        <p className='font-bold text-[30px] text-[#1F2937]  lg:text-[35px]  lg:leading-[40px]  '>Enterprise Software Development & Integration Services</p>
                        <p className="text-[15px] text-[#6f798b]">We provide a complete range of enterprise software solutions designed to meet the unique needs of modern organizations. Our custom enterprise software development services focus on creating systems that improve efficiency, streamline operations, and foster innovation in enterprise-level software. From building powerful platforms to enhancing day-to-day processes, we ensure every solution aligns with your strategic goals. Our enterprise data management services help businesses organize, analyze, and utilize their data more effectively, enabling smarter decision-making and long-term growth.For companies with outdated systems, our enterprise software modernization services upgrade legacy applications to improve performance, security, and compatibility with the latest technologies. We also offer enterprise software integration to securely connect your existing tools, platforms, and workflows, ensuring smooth collaboration across your organization. With our software maintenance and support services, you benefit from regular updates, security patches, and expert technical assistance to keep your systems running at peak performance. Every service we offer is built with scalability, security, and business impact in mind, making us a trusted enterprise software development company for organizations seeking lasting digital transformation.
                        </p>

                    </div>
                    <div className='w-full lg:w-[50%] lg:pl-[20px] lg:pl-[40px] '>
                        <Image src={img5} alt='img5' className='w-full mt-[30px] lg:mt-[0px]' />
                    </div>
                </div>

                {/* Section 6  */}
                <div className="container border-l-[6px] border-blue-700 pl-[10px]">
                    <p className='w-full lg:w-[65%] font-extrabold text-[25px] lg:text-[30px]  lg:leading-[40px] text-[#1F2937] '>Working with this team changed our business. They listened to what we needed, built software that fit us perfectly, and made everything run faster and easier. I trust them completely. </p>
                    <p className='text-[15px] text-[#6f798b] mt-[10px]'>Sarah L IT Director</p>
                </div>

                {/* Section7  */}
                <div className='container flex flex-col lg:flex-row '>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                        <p className='font-bold text-[30px] lg:text-[35px] text-[#1F2937] lg:leading-[40px]'>Why Choose Us?</p>
                        {data3.map((item, index) => (
                            <div key={index} >
                                <h3 className="font-semibold text-[24px] text-[#1F2937]">{item.title}</h3>
                                <div className="-mt-3">
                                    <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                                </div>
                                <p className="text-[15px] text-[#6f798b]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='w-full lg:w-[50%] lg:pl-[20px] lg:pl-[40px] '>
                        <Image src={img6} alt='img6' className='w-full mt-[30px] lg:mt-[0px]' />
                    </div>
                </div>

                {/* Faq  */}
                <div className="container ">
                    <p className='font-bold text-[30px] lg:text-[35px]  lg:leading-[40px] mb-[20px] text-[#1F2937]' >Your questions answered</p>
                    <Accordion type="single" collapsible>
                        {
                            faq.map((faq, index) => (
                                <AccordionItem value={faq.item} key={index} className='border mb-[10px] px-[10px] rounded-[5px]'>
                                    <AccordionTrigger className='text-[#1F2937] hover:no-underline'>{faq.ques}</AccordionTrigger>
                                    <AccordionContent>
                                        {faq.ans}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }

                    </Accordion>
                </div>

                <div className="container bg-[#2B4EFF] py-[70px]">
                    <ServicesContact />
                </div>

            </div>
            <Footer2 />
        </>
    );
}
