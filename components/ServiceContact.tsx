"use client"
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import arrowleft from "@/public/images/leftarrow.png"
import arrowright from "@/public/images/rightarrow.png"
import { usePathname } from "next/navigation";
import { baseURL } from '@/API/baseURL'
import { toast } from "sonner"; // Sonner for toasts

interface ServiceContact {
    image: string | StaticImageData;
    subTitle: string;
    title: string;
    btnText: string;
}
interface ServiceContactProps {
    serviceContact: ServiceContact;
}
export default function ServiceContact({ serviceContact }: ServiceContactProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const pathname = usePathname();
    const formattedPath = pathname
        .replace("/", "")
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const values = {
            name: name,
            email: email,
            phone: phone,
            message: message,
            service: formattedPath,
        }
        try {
            const res = await fetch(`${baseURL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json();

            if (res.ok) {
                toast("Message Sent Successfully!", {
                    description: "Your Message Sent Successfully. We will catch you as soon a possible.",
                    action: {
                        label: "OK",
                        onClick: () => console.log("Undo"),
                    },

                });
                setName("")
                setEmail("")
                setPhone("")
                setMessage("")
            } else {
                toast.error(data.error || "Something went wrong");
            }
        } catch (err) {
            toast.error("Network error");
            console.log(err);
        }
    };
    return (
        <div className="container flex  flex-wrap bg min-h-[680px]  mar "  >
            <div className='w-full lg:w-1/2 relative hidden lg:block  '>
                <Image src={`${baseURL}/images/services/${serviceContact.image}`} alt='img' width={400}
                    height={400} className='absolute bottom-0 !w-[80%]  left-[50px] z-[3] '  loading="lazy"  

               
 />
            </div>
            <div className='w-full lg:w-1/2 text-white '>
                <div className='w-[90%] mx-auto lg:mx-0 flex flex-col items-center sm:items-start '>
                    <div className='flex items-center gap-[5px] mt-[60px]'>
                        <Image src={arrowleft} className='w-[35px]' alt='icon'></Image>
                        <p className='text-[15px] font-[500] text-center sm:text-start'>{serviceContact.subTitle}</p>
                        <Image src={arrowright} className='w-[35px]' alt='icon'></Image>
                    </div>
                    <p className=' heading font-[700] my-[10px] text-center sm:text-start '>{serviceContact.title}</p>
                    <form onSubmit={handleSubmit} className=' w-full'>
                        <div className='w-full flex flex-col items-center sm:items-start gap-[10px] mb-[20px]  '>
                            <div className='flex gap-[15px] mt-[20px] w-full'>
                                <div className='w-full lg:w-1/2'>
                                    <label htmlFor="name" className='text-start'>Name*</label>
                                    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required className='mt-[10px]  text-white w-full border bg-transparent py-[10px] px-[8px]' />
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <label htmlFor="name">Email*</label>
                                    <input type="email" placeholder='Enter Valid Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='mt-[10px]  text-white w-full border bg-transparent py-[10px] px-[8px]' />
                                </div>
                            </div>
                            <div className='w-full '>
                                <label htmlFor="name">Phone*</label>
                                <input type="number" placeholder='Enter Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required className='mt-[10px]  text-white w-full border bg-transparent py-[10px] px-[8px]' />
                            </div>
                            <div className='w-full '>
                                <label htmlFor="name">Message*</label>
                                <textarea placeholder='Type Here...' value={message} onChange={(e) => setMessage(e.target.value)} required className='mt-[10px] min-h-[150px]  text-white w-full border bg-transparent py-[10px] px-[8px]'></textarea>
                            </div>
                            <button className='px-[20px] py-[10px] font-[500] bg-white text-black rounded-[25px] text-center hover:border hover:border-white hover:bg-transparent hover:text-white'>{serviceContact.btnText}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
