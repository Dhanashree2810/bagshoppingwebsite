'use client'

import { Button } from "../ui/button"

export default function Footer() {
    return (
        <>
            <div className=" bg-gray-100 text-black p-5 lg:p-14 max-w-full ">
                <div className=" grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 mb-5 lg:mb-10">
                    <h1 className='text-xl lg:text-4xl text-black font-bold'>Quirko</h1>
                </div>

                <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5 lg:gap-0 my-5 lg:my-12">
                    <div className='uppercase'>
                        <h1 className='font-bold text-lg lg:text-xl leading-8 uppercase'>Newsletter</h1>
                        <div className=' flex flex-row'>
                            <input className=" w-72 px-4 h-12 my-3 border border-1 border-gray-200 rounded-sm" type="email" name="email" id="email" placeholder="Enter your email" />
                        </div>
                        <Button className=' text-black bg-white hover:bg-transparent border-b-2 border-white'>SUBSCRIBE</Button>
                    </div>

                    <div className=' uppercase'>
                        <h1 className='font-bold text-[16px] lg:text-lg'>Company</h1>
                        <h2 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Contact Us</h2>
                        <h3 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>FAQ&apos;S</h3>
                        <h4 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Order Lookup</h4>
                        <h4 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Returns</h4>
                    </div>

                    <div className='uppercase'>
                        <h1 className='font-bold text-[16px] lg:text-lg'>About Us</h1>
                        <h2 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Careers</h2>
                        <h3 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>News & Blog</h3>
                        <h4 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Press Center</h4>
                        <h4 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Suppliers</h4>
                    </div>

                    <div className='uppercase'>
                        <h1 className='font-bold text-[16px] lg:text-lg'>Follow Us</h1>
                        <h2 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Facebook</h2>
                        <h3 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Instagram</h3>
                        <h4 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Twitter</h4>
                        <h4 className=' text-xs lg:text-sm text-black  mt-5 font-normal'>Linkdin</h4>
                    </div>
                </div>
            </div>

            <div className=' bg-gray-100 text-black'>
                <p className='text-[16px] lg:text-lg text-center font-semibold'>© 2024 Quirko. All rights reserved.
                </p>
            </div>
        </>
    )
}
