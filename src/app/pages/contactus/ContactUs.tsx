import React from 'react'
import { Button } from "@/components/ui/button"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


export default function ContactUs() {
    const contactdetlist = [
        {
            id: 1,
            icon: <FaLocationDot size={30} className=' text-gray-400' />,
            title: 'Our Office Address',
            desc: '10001, 5th Avenue, London.'
        },
        {
            id: 2,
            icon: <IoIosMailOpen size={30} className=' text-gray-400' />,
            title: 'General Enquiries',
            desc: 'example@mail.com'
        },
        {
            id: 3,
            icon: <FaHeadset size={30} className=' text-gray-400' />,
            title: 'Call Us',
            desc: '+1(21) 112 7368'
        },
        {
            id: 4,
            icon: <CgMail size={30} className=' text-gray-400' />,
            title: 'Customer Support',
            desc: 'info@support.com'
        },
    ]

    return (
        <>
            <div className="relative w-full">
                <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-5">
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className=" flex flex-col">
                            <div className="my-5">
                                <h1 className='text-xs lg:text-sm text-gray-500 font-normal text-center'>GET IN TOUCH</h1>
                                <h1 className=" text-black font-bold text-center text-xl lg:text-3xl my-2 uppercase">
                                    Contact
                                    <span className='px-3 text-gray-500'>Us</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  justify-center">
                        <div className="flex flex-col space-y-5">
                            {contactdetlist.map((xyz) => (
                                <div className=" p-2 mx-7 border-muted" key={xyz.id}>
                                    <div className=' flex justify-normal'>
                                        <div className=' py-2 rounded-full p-2'>
                                            {xyz.icon}
                                        </div>
                                        <div className="text-left mx-5">
                                            <h1 className=' font-bold text-sm lg:text-xl text-black py-1'>{xyz.title}</h1>
                                            <p className=' text-sm text-gray-500 font-bold leading-5'>{xyz.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col">                           
                            <div className=' text-center grid grid-cols-1'>
                                <Input className=" px-4 h-10 my-2 border border-1 text-gray-700 text-sm bg-gray-100 border-gray-200 rounded-none" type="text" name="name" id="name" placeholder="Your Name*" />
                                <Input className=" px-4 h-10 my-2 border border-1 text-gray-700 text-sm bg-gray-100 border-gray-200 rounded-none" type="text" name="email" id="email" placeholder="Your Email" />
                                <Input className=" px-4 h-10 my-2 border border-1 text-gray-700 text-sm bg-gray-100 border-gray-200 rounded-none" type="text" name="subject" id="subject" placeholder="Subject*" />
                                <Input className=" px-4 h-10 my-2 border border-1 text-gray-700 text-sm bg-gray-100 border-gray-200 rounded-none" type="text" name="url" id="url" placeholder="Website URL*" />
                                <Textarea className="form-control px-4 h-28 my-2 text-gray-700 text-sm border border-1 bg-gray-100 border-gray-200 rounded-none" placeholder="Type your message here.">
                                </Textarea>
                                <Button className=' rounded-none  my-3 w-fit text-center bg-gray-500 text-sm text-white p-5'>SEND MESSAGE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
