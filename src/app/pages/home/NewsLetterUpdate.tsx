import React from 'react'
import Image from "next/image"
import bag3 from '@/assets/images/bag3.jpg'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

export default function NewsLetterUpdate() {
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     mobileNo: '',
    //     message: '',
    //   });
    //   const [contactSuccess, setContactSuccess] = useState(false);
    //   const [errors, setErrors] = useState<{ [key: string]: string }>({});

    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    //   };

    return (
        <div className="relative w-full">
            <div className="w-full px-4 py-2 lg:px-48 lg:py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 items-center justify-center">
                    <div className="flex flex-col items-end text-center">
                        <Image
                            src={bag3}
                            alt="New Arrival"
                            width={450}
                            height={450}
                            className="rounded-lg"
                            priority
                        />
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <h1 className='text-xl  lg:text-3xl font-semibold py-2 text-left'>
                            Subscribe our 
                            newsletter for <br />
                            update
                        </h1>

                        <form>
                            <div className="flex flex-col mt-10">
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    // value={form.name}
                                    // onChange={handleChange}
                                    placeholder="Email ID"
                                    className=" border-gray-300 rounded-none w-[400px]"
                                />
                            </div>

                            <Link href="/signup" className=' flex flex-row w-fit mt-2 lg:mt-5'>
                                <span className="btn primary-btn inline-flex items-center text-xs lg:text-sm px-1 py-2 lg:px-3 lg:py-2 text-white  bg-gray-700 rounded-sm hover:bg-blue-950 transition">
                                    Sign Up
                                </span>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
