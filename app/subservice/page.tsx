import Footer2 from '@/components/Footer2'
import Navbar2 from '@/components/Navbar2'
import Topnav from '@/components/Topnav'
import React from 'react'
import demo from "@/public/images/demo2.png"
import img3 from "@/public/images/subservice2.png"
import img33 from "@/public/images/subservice3.png"
import img4 from "@/public/images/subservice4.png"
import img5 from "@/public/images/subservice5.png"
import img6 from "@/public/images/subservice6.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'


export default function Hello() {
    const data = [
        {
            title: "Transparent Partnership",
            description:
                "We work closely with you to translate goals into working software, maintaining open lines of communication through every sprint.",
        },
        {
            title: "Iterative Development",
            description:
                "We release working software incrementally, incorporating your feedback along the way to ensure alignment, reduce risk, and respond to shifting goals.",
        },
        {
            title: "Continuous Improvement",
            description:
                "We track, learn, and optimize. Each iteration includes retrospectives and QA insights to improve both product and process.",
        },
        {
            title: "Speed to Market",
            description:
                "Our agile framework accelerates delivery timelines, allowing you to validate solutions faster, seize opportunities sooner, and adapt with confidence.",
        },
    ];
    const data2 = [
        {
            "title": "Enterprise application development",
            "description": "Secure, scalable web platforms that support complex business operations."
        },
        {
            "title": "Mobile app development",
            "description": "Custom iOS, Android, and cross-platform mobile apps with responsive UI and seamless backend integration."
        },
        {
            "title": "Legacy system modernization",
            "description": "Upgrade or rebuild aging systems to improve reliability, performance, and maintainability."
        },
        {
            "title": "Data visualization and dashboards",
            "description": "Real-time dashboards that turn raw data into actionable insights and business intelligence."
        },
        {
            "title": "Portals and intranets",
            "description": "Secure internal platforms that connect teams, streamline communications, and enhance collaboration."
        },
        {
            "title": "E-commerce platforms",
            "description": "End-to-end development of scalable, user-friendly ecommerce platforms featuring online storefronts and inventory systems."
        }
    ]
    const data3 = [
        {
            "title": "A fully custom software product",
            "description": "Designed and developed specifically to your business needs, built using modern frameworks and best practices."
        },
        {
            "title": "Rigorous QA & test reporting",
            "description": "Each release is tested across environments, with detailed documentation to validate quality and reliability."
        },
        {
            "title": "Deployment & documentation",
            "description": "Complete deployment support, along with architecture, admin, and user documentation as needed."
        }
    ]

    const faq = [
        {
            item: 'item-1',
            ques: 'What is custom software development?',
            ans: 'Custom software development is the process of creating software applications tailored specifically to meet the unique needs and requirements of a business or organization. It involves designing, coding, testing, and implementing software solutions that address specific challenges and help achieve desired outcomes.'
        },
        {
            item: 'item-2',
            ques: 'Why should I choose custom software development over off-the-shelf software?',
            ans: 'Working with a custom software development company offers several advantages over out-of-the-box software. It allows you to have full control and ownership of the solution, ensuring it aligns perfectly with your business processes and goals. Custom software can be tailored to your specific requirements, offers better scalability, and provides a competitive advantage by addressing your unique needs.'
        },
        {
            item: 'item-3',
            ques: 'How long does custom software development usually take?',
            ans: 'The duration of the custom software development process varies depending on the complexity and scope of the project. It involves multiple stages, including requirements gathering, design, development, testing, and deployment. The timeline can range from a few weeks to several months or even years, and it is best determined after a discovery phase is conducted.'
        },
        {
            item: 'item-4',
            ques: 'How much does it cost to build a software custom for my business?',
            ans: 'The cost of building a custom software can vary significantly based on several factors:Project Scope: The complexity and scope of the software project will have a direct impact on the cost.Development Timeframe: The duration of the development process can affect the cost. Tight deadlines or expedited development may require your custom software development company to provide additional resources which can increase the overall cost.Technology and Platform: The choice of technology stack and platform can influence the cost.Maintenance and Support: Regular updates, bug fixes, and technical support may be required post-development, and these costs should be factored into the overall budget.'
        },
        {
            item: 'item-5',
            ques: 'How do you ensure the security of custom software?',
            ans: 'We prioritize the security of our custom software solutions. Our team follows industry best practices and applies robust security measures to protect your data and sensitive information. Contact us to learn more about our security procedures.'
        },
        {
            item: 'item-6',
            ques: 'What type of custom software development services do you deliver?',
            ans: 'At DOOR3, we offer a comprehensive range of custom software development services to cater to diverse business needs. Our services as a custom software development company include:Software ConsultingCustom Enterprise Software DevelopmentSoftware Product DevelopmentSoftware IntegrationCustom Web Software DevelopmentCustom CRM DevelopmentAPI Development'
        },
        {
            item: 'item-7',
            ques: 'How should I select my custom software development company?',
            ans: 'Choosing the best custom software development company for your business is a crucial decision. It’s important to define your business objectives and the timeframe to achieve them before looking at options. Referrals and reviews may also be an indicator of a competent custom software development company.We’re happy to provide you with referrals from previous DOOR3 clients, just Contact us through the form linked.'
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
                    <p className='text-white text-[30px] lg:text-[40px] font-bold'>Custom Software Development Solutions</p>
                </div>
            </section>


            <div className='flex flex-col gap-y-[100px]  lg:gap-y-[150px]  my-[70px]'>

                {/* Title  */}
                <div className="container">
                    <div className="mb-[30px]">
                        <p className=' w-full lg:w-[65%] font-bold text-[30px] text-[#1F2937] lg:text-[35px]  lg:leading-[40px]'>Tailored technology that suits your unique business needs</p>
                    </div>
                    <div className=' w-full lg:w-[65%] text-[#6f798b]'>
                        <p >At DOOR3, we design and build custom software that solves complex challenges, supports growth, and enhances digital experiences. Whether you’re a global enterprise or a growing startup, we bring cross-disciplinary expertise to deliver scalable, secure, and user-centric solutions tailored to your organization.</p>
                        <br />
                        <p>We don’t believe in off-the-shelf thinking. Every custom software engagement begins with understanding your unique needs—from operational requirements to customer expectations—so we can build a product that drives real business value.</p>
                    </div>

                </div>

                {/* Section2  */}
                <div className='container flex flex-col lg:flex-row '>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                        <p className='font-bold text-[30px] lg:text-[35px] text-[#1F2937]  lg:leading-[40px]'>Agile by design: Our collaborative approach</p>
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
                    <p className=' w-full lg:w-[65%] font-bold text-[30px] lg:text-[35px]  lg:leading-[40px] text-[#1F2937]'>Success in action: DOOR3 custom software development case studies</p>
                    <p className='w-full lg:w-[65%] text-[15px] text-[#6f798b] mt-[20px]'>Explore our custom software development success stories. We’ve played a critical role as a custom software development company in projects ranging from BI dashboards to full rebuilds of mission critical business applications. DOOR3’s custom software development services revolutionize operations, improve efficiency, and increase profitability. <br /> <br /> From manufacturing giants to global law firms, our work spans across a diverse set of industries, meeting each project with curiosity and empathy.</p>
                    <div className='flex flex-col lg:flex-row gap-[20px] my-[30px]'>
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
                    </div>
                </div>

                {/* Section 4  */}
                <div className='bg-[#0D0B52]'>
                    <div className="container py-[50px] lg:py-[100px]">
                        <p className='font-bold text-[30px] lg:text-[35px]  lg:leading-[40px] text-white'>Our three step custom software development process</p>
                        <div className='flex flex-col lg:flex-row gap-x-[130px] gap-y-[30px] lg:gap-y-0 mt-[40px]'>
                            <div className='grow'>
                                <p className='font-semibold text-[50px] lg:text-[75px] text-white'>1</p>
                                <p className='text-white font-semibold text-[25px]'>Discovery & planning</p>
                                <p className='text-[15px] text-[white] mt-[10px]'>We begin with collaborative workshops and technical analysis to define project goals, understand user needs, and evaluate architecture. This phase results in a clear roadmap, ensuring alignment before development begins.</p>
                            </div>
                            <div className='grow'>
                                <p className='font-semibold text-[50px] lg:text-[75px] text-white mt-[0] lg:mt-[100px]'>2</p>
                                <p className='text-white font-semibold text-[25px]'>Agile development & testing</p>
                                <p className='text-[15px] text-[white] mt-[10px]'>Our team builds your MVP using modern frameworks and agile sprints—prioritizing high-impact features first. Throughout development, we run continuous QA to validate functionality, performance, and usability.</p>
                            </div>
                            <div className='grow'>
                                <p className='font-semibold text-[50px] lg:text-[75px] text-white mt-[0] lg:mt-[200px]'>3</p>
                                <p className='text-white font-semibold text-[25px]'>Launch & support</p>
                                <p className='text-[15px] text-[white] mt-[10px]'>Once deployed, we stay engaged to monitor performance, apply updates, and implement new features. Our team evolves your software alongside your business, keeping it secure, scalable, and effective over time.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section5  */}
                <div className='container flex flex-col lg:flex-row '>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                        <p className='font-bold text-[30px] text-[#1F2937]  lg:text-[35px]  lg:leading-[40px]  '>What you get with DOOR3 custom software development</p>
                        {data2.map((item, index) => (
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
                        <Image src={img5} alt='img5' className='w-full mt-[30px] lg:mt-[0px]' />
                    </div>
                </div>

                {/* Section 6  */}
                <div className="container border-l-[6px] border-blue-700 pl-[10px]">
                    <p className='w-full lg:w-[65%] font-extrabold text-[25px] lg:text-[30px]  lg:leading-[40px] text-[#1F2937] '>“The quality has been excellent. We’ve had minimal issues or need for improvements. It has been a pleasure to work with them, and they’ve kept the project on track.”</p>
                    <p className='text-[15px] text-[#6f798b] mt-[10px]'>--Sr Product Mgr, Personal Protection Equipment Manufacturer</p>
                </div>

                {/* Section7  */}
                <div className='container flex flex-col lg:flex-row '>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                        <p className='font-bold text-[30px] lg:text-[35px] text-[#1F2937] lg:leading-[40px]'>Agile by design: Our collaborative approach</p>
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
                <div className="container mb-[60px]">
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

            </div>
            <Footer2 />
        </>
    );
}
