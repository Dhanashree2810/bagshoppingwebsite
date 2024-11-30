import React from 'react'
import { HiMiniShoppingBag } from "react-icons/hi2";//unique design
import { GiSewingMachine } from "react-icons/gi";//deep stitch line
import { SiAffine } from "react-icons/si";//Finest Leather
import { MdVerified } from "react-icons/md";
import { FaGem } from 'react-icons/fa';

export default function ServiceSection() {
    return (
        <div className="relative w-full bg-gray-100 text-black">
            <div className="w-full px-4 py-3 lg:px-48 lg:py-5">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-0 items-center justify-center">
                    <div className=' flex flex-col items-center justify-center border-none lg:border-r-2 lg:border-gray-500'>
                        <MdVerified size={30} color="black" title="Quality Materials mb-10" />
                        <h1 className=' mt-5 text-sm text-gray-500 font-semibold tracking-wide text-center'>Quality <br /> Materials</h1>
                    </div>
                    <div className=' flex flex-col items-center justify-center border-none lg:border-r-2 lg:border-gray-500'>
                        <HiMiniShoppingBag size={30} color="black" title="Unique Design" />
                        <h1 className=' mt-5 text-sm text-gray-500 font-semibold tracking-wide text-center'>Unique  <br /> Design</h1>
                    </div>

                    <div className=' flex flex-col items-center  justify-center border-none lg:border-r-2 lg:border-gray-500'>
                        <SiAffine size={30} color="black" title="Finest Leather" />
                        <h1 className=' mt-5 text-sm text-gray-500 font-semibold tracking-wide text-center'>Finest <br /> Leather</h1>
                    </div>

                    <div className=' flex flex-col items-center  justify-center border-none lg:border-r-2 lg:border-gray-500'>
                        <GiSewingMachine size={30} color="black" title="Deep Stitch Line" />
                        <h1 className=' mt-5 text-sm text-gray-500 font-semibold tracking-wide text-center'>Deep <br /> Stitch Line</h1>
                    </div>

                    <div className=' flex flex-col items-center  justify-center border-none lg:border-r-2 lg:border-gray-500'>
                        <FaGem size={30} color="black" title="Premium Finish" />
                        <h1 className=' mt-5 text-sm text-gray-500 font-semibold tracking-wide text-center'>Premium <br /> Finish</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
