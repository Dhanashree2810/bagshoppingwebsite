'use client'
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import shoulderbag2 from '@/assets/images/shoulderbag2.png';
import shoulderbag3 from '@/assets/images/shoulderbag3.png';
import shoulderbag4 from '@/assets/images/shoulderbag4.png';
import handbag1 from '@/assets/images/handbag1.png';
import handbag2 from '@/assets/images/handbag2.png';
import handbag3 from '@/assets/images/handbag3.png';
import handbag4 from '@/assets/images/handbag4.png';
import handbag5 from '@/assets/images/handbag5.png';
import banner16 from '@/assets/images/banner16.jpg';
import banner17 from '@/assets/images/banner17.jpg';
import banner18 from '@/assets/images/banner18.jpg';
import banner19 from '@/assets/images/banner19.png';
import banner20 from '@/assets/images/banner20.png';
import banner21 from '@/assets/images/banner21.png';
import c2 from '@/assets/images/c2.jpg';
import Link from 'next/link';
import { FcLike } from 'react-icons/fc';
import { PiShareFatFill } from 'react-icons/pi';

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
};

export default function WhatsNewArrival() {
    const [filter, setFilter] = useState('*');

    const productlist = [
        { id: 2, img: handbag1, category: "HANDBAG", title: 'Hand Bag', actualprize: '₹80.00', discprize: '₹100.00', offerprize: '20% OFF', colors: '3 COLORS' },
        { id: 3, img: shoulderbag2, category: "SHOULDERBAG", title: 'Shoulder Bag', actualprize: '₹90.00', discprize: '₹100.00', offerprize: '10% OFF', colors: '2 COLORS' },
        { id: 4, img: handbag2, category: "HANDBAG", title: 'Hand Bag', actualprize: '₹140.00', discprize: '', offerprize: '', colors: '5 COLORS' },
        { id: 5, img: shoulderbag3, category: "SHOULDERBAG", title: 'Shoulder Bag', actualprize: '₹125.00', discprize: '₹180.00', offerprize: '20% OFF', colors: '5 COLORS' },
        { id: 6, img: handbag3, category: "HANDBAG", title: 'Hand Bag', actualprize: '₹140.00', discprize: '', offerprize: '', colors: '5 COLORS' },
        { id: 7, img: shoulderbag4, category: "SHOULDERBAG", title: 'Shoulder Bag', actualprize: '₹115.00', discprize: '₹130.00', offerprize: '15% OFF', colors: '2 COLORS' },
        { id: 8, img: handbag4, category: "HANDBAG", title: 'Hand Bag', actualprize: '₹140.00', discprize: '', offerprize: '', colors: '5 COLORS' },
        { id: 9, img: handbag5, category: "HANDBAG", title: 'Hand Bag', actualprize: '₹140.00', discprize: '', offerprize: '', colors: '5 COLORS' },
    ];

    const handleFilter = (category: string) => {
        setFilter(category);
    };

    const newarrivallist = [
        { id: 1, img: banner16 },
        { id: 2, img: c2 },
        { id: 3, img: banner17 },
        { id: 4, img: banner20 },
        { id: 5, img: banner18 },
        { id: 6, img: banner21 },
        { id: 7, img: banner19 },
    ];

    return (
        <div className="relative w-full">
            <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-5">
                <div className='grid grid-cols-1 justify-center items-center'>
                    <div className=" flex flex-col">
                        <div className="my-5">
                            <h1 className=" text-gray-500 font-bold text-center text-2xl lg:text-3xl my-2 uppercase">New Collections</h1>
                            <p className=' text-xs lg:text-sm text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis aperiam cum, voluptatum recusandae adipisci nisi, laborum molestias nesciunt praesentium aliquam error saepe dolorum! Odit magni neque quas necessitatibus cupiditate.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full relative bg-gray-100 my-10">
                    <div className="container py-2 lg:py-5">
                        <Slider {...settings} className="text-white">
                            {newarrivallist.map((slide) => (
                                <div key={slide.id} className="h-full flex items-center justify-center">
                                    <div className="w-full px-4 lg:px-6 py-3">
                                        <div className="grid grid-cols-1 max-w-full items-center lg:items-start lg:flex-row justify-center py-6 lg:py-3">
                                            <div className="flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out group">
                                                <div className="group-hover:scale-95 transform transition-transform duration-300 ease-in-out">
                                                    <Image
                                                        src={slide.img}
                                                        width={1000}
                                                        height={400}
                                                        className="w-full cursor-pointer rounded-sm h-auto transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                                                        alt="Image not found"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className='m-1 lg:m-5'>
                    <div className="flex justify-center list-none fs-6 font-bold mb-10 lg:mb-0">
                        {[
                            { label: "ALL", category: "*" },
                            { label: "HAND BAG", category: "HANDBAG" },
                            { label: "SHOULDER BAG", category: "SHOULDERBAG" },
                        ].map(({ label, category }) => (
                            <div
                                key={category}
                                onClick={() => handleFilter(category)}
                                className={`mx-2 lg:mx-3 p-2 lg:p-4 rounded-sm text-sm font-bold cursor-pointer leading-normal ${filter === category
                                    ? "bg-rose-100 text-black"
                                    : "bg-slate-400 text-white hover:bg-rose-100 hover:text-black"
                                    }`}
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5 mt-2 lg:mt-5">
                        {productlist.map((product) => {
                            if (filter === "*" || product.category === filter) {
                                return (
                                    <div
                                        key={product.id}
                                        className="relative group"
                                    >
                                        <Link href={`/product/${product.id}`}>
                                            <Card className="border-none shadow-none p-0 rounded-none">
                                                <CardContent className="flex flex-col text-center items-center justify-center p-0">
                                                    <div className="group relative w-[200px] h-[200px] lg:h-[230px] lg:w-[230px]">
                                                        <Image
                                                            src={product.img}
                                                            // width={650}
                                                            // height={550}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            className="cursor-pointer transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                                                            alt="Product"
                                                        />
                                                    </div>
                                                    <div className="absolute -top-1 lg:top-1/4  lg:-translate-y-[80px] right-20 lg:right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex flex-col items-center gap-2">
                                                        <div className="p-2 bg-red-100 rounded-full hover:scale-110 transition-transform duration-300">
                                                            <FcLike size={25} className="hover:text-red-500" />
                                                        </div>
                                                        <div className="p-2 bg-blue-100 rounded-full hover:scale-110 transition-transform duration-300">
                                                            <PiShareFatFill size={25} className="text-gray-500 hover:text-blue-600" />
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-2 m-2">
                                                        <h1 className="font-semibold text-lg text-gray-600 uppercase">
                                                            {product.title}
                                                        </h1>
                                                        <div className="text-sm font-bold leading-7 space-x-2">
                                                            <span>{product.actualprize}</span>
                                                            {product.discprize && (
                                                                <span className="line-through text-gray-400">
                                                                    {product.discprize}
                                                                </span>
                                                            )}
                                                            {product.offerprize && <span>{product.offerprize}</span>}
                                                        </div>
                                                        <span className=" text-xs font-semibold">{product.colors}</span>
                                                    </div>
                                                </CardContent>
                                            </Card>                                            
                                        </Link>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
