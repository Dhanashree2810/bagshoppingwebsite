import React from 'react'

export default function CountersSection() {
    return (
        <div className="relative w-full">
            <div className="w-full px-4 py-2 lg:px-48 lg:py-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-0 items-center justify-center">
                    <div className=' flex flex-col items-center justify-center'>
                        <h1 className=' mt-2 lg:mt-5 text-xl lg:text-3xl text-black font-semibold tracking-wide text-center'>24+ Years</h1>
                        <h1 className=' mt-2 lg:mt-5 text-xs lg:text-sm text-gray-500 font-semibold tracking-wide text-center'>Work experience</h1>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h1 className=' mt-2 lg:mt-5 text-xl lg:text-3xl text-black font-semibold tracking-wide text-center'>40+ Products</h1>
                        <h1 className=' mt-2 lg:mt-5 text-xs lg:text-sm text-gray-500 font-semibold tracking-wide text-center'>Completed  works</h1>
                    </div>

                    <div className=' flex flex-col items-center  justify-center'>
                        <h1 className=' mt-2 lg:mt-5 text-xl lg:text-3xl text-black font-semibold tracking-wide text-center'>80+ Times</h1>
                        <h1 className=' mt-2 lg:mt-5 text-xs lg:text-sm text-gray-500 font-semibold tracking-wide text-center'>Won awards</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
