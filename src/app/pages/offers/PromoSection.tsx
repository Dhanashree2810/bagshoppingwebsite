import React from 'react';
import ab1 from '@/assets/images/ab1.jpg'
import ab2 from '@/assets/images/ab2.jpg'
import Image from 'next/image';
import Link from 'next/link';


const PromoSection = () => {
    return (    
        <div className="relative w-full">
            <div className="w-full ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 items-center justify-center">
                    <div className=' flex flex-col  justify-center items-center'>
                        <Image src={ab1} height={200} width={512} className="w-full h-auto" alt="Women's Bags" />
                        <div className="absolute bottom-1/5 left-1/10">
                            <h4 className="text-xl lg:text-3xl font-bold text-white  mb-8">50% Off Any <br /> Women&apos;s Shoulder Bags</h4>
                            <Link href="/product" className="btn-shop text-sm">Shop Now</Link>
                        </div>
                    </div>
                
                    <div className=' flex flex-col  justify-center items-center'>
                        <Image src={ab2} height={200} width={512} className="w-full h-auto" alt="Women's Bags" />
                        <div className="absolute bottom-1/5 left-1/10">
                            <h4 className="text-xl lg:text-3xl font-bold text-white mb-8">30% Off Any <br /> Women&apos;s Hand Bags</h4>
                            <Link href="/product" className="btn-shop text-sm">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromoSection;
