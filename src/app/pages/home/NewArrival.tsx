import React from 'react'
import Image from "next/image"
import bannerbg from '@/assets/images/bag.png'
import { RiArrowRightUpFill } from 'react-icons/ri'
import Link from 'next/link'

export default function NewArrival() {
    return (
        <div className="relative w-full">
            <div className="w-full px-4 py-2 lg:px-48 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-center justify-center">
                    <div className="flex flex-col">
                        <Image
                            src={bannerbg}
                            alt="New Arrival"
                            width={700}
                            height={670}
                            className="rounded-lg object-cover max-w-full max-h-full"
                            priority
                        />
                    </div>

                    <div className="flex flex-col px-5 lg:px-0">
                        <h1 className=' text-2xl lg:text-5xl font-semibold py-1 lg:py-2 text-left'>Complete</h1>
                        <h2 className=' text-xl lg:text-3xl font-semibold py-1 lg:py-2 text-left text-gray-500 tracking-[0.6rem]'>every look</h2>
                        <p className='text-gray-500 text-xs lg:text-sm mt-5 font-semibold tracking-wide leading-6'>
                            Backpacks are not just something to carray books <br />
                            in like the original design was meant for. Many <br />
                            people use them for carrying clothes and other  <br />
                            personal ...
                        </p>

                        <Link href="/team" className=' flex flex-row justify-center lg:justify-start w-full lg:w-fit my-5 lg:mt-10'>
                            <span className="btn primary-btn inline-flex items-center text-xs lg:text-sm px-1 py-2 lg:px-3 lg:py-2 text-white  bg-gray-700 rounded-sm hover:bg-blue-950 transition">
                                See All <RiArrowRightUpFill className=' text-white w-6 h-6' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
