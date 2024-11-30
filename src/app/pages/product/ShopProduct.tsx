'use client'
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { FcLike } from "react-icons/fc";
import { PiShareFatFill } from "react-icons/pi";
import shoulderbag1 from '@/assets/images/shoulderbag1.png';
import shoulderbag2 from '@/assets/images/shoulderbag2.png';
import shoulderbag3 from '@/assets/images/shoulderbag3.png';
import shoulderbag4 from '@/assets/images/shoulderbag4.png';
import shoulderbag5 from '@/assets/images/shoulderbag5.png';
import shoulderbag6 from '@/assets/images/shoulderbag6.png';
import handbag1 from '@/assets/images/handbag1.png';
import handbag2 from '@/assets/images/handbag2.png';


export default function ShopProduct() {
    const productlist = [
        { id: 1, img: shoulderbag1, title: 'SHOULDER BAG', actualprize: '₹420.00', discprize: '₹400.00', offerprize: '20% OFF', colors: '3 COLORS' },
        { id: 2, img: shoulderbag2, title: 'SHOULDER BAG', actualprize: '₹290.00', discprize: '₹220.00', offerprize: '10% OFF', colors: '2 COLORS' },
        { id: 3, img: shoulderbag3, title: 'SHOULDER BAG', actualprize: '₹325.00', discprize: '₹280.00', offerprize: '20% OFF', colors: '5 COLORS' },
        { id: 4, img: shoulderbag4, title: 'SHOULDER BAG', actualprize: '₹615.00', discprize: '₹560.00', offerprize: '15% OFF', colors: '2 COLORS' },
        { id: 5, img: shoulderbag5, title: 'SHOULDER BAG', actualprize: '₹650.00', discprize: '', offerprize: '', colors: '4 COLORS' },
        { id: 6, img: handbag1, title: 'HAND BAG', actualprize: '₹480.00', discprize: '₹400.00', offerprize: '20% OFF', colors: '3 COLORS' },
        { id: 7, img: handbag2, title: 'HAND BAG', actualprize: '₹540.00', discprize: '', offerprize: '', colors: '5 COLORS' },
        { id: 8, img: shoulderbag6, title: 'SHOULDER BAG', actualprize: '₹200.00', discprize: '', offerprize: '', colors: '2 COLORS' },
    ];

    // const handleAddToWishlist = (product: Product) => {
    //     setWishlist((prevWishlist) => {
    //         if (prevWishlist.some((item) => item.id === product.id)) {
    //             return prevWishlist;
    //         }
    //         return [...prevWishlist, product];
    //     });
    // };
    

    return (
        <div className="relative w-full" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-5">
                <div className="grid grid-cols-1 justify-center items-center">
                    <div className="flex flex-col my-5">
                        <h1 className="text-gray-500 font-bold text-center text-2xl lg:text-3xl my-2">SHOP PRODUCTS</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5">
                    {productlist.slice(0, 4).map((a) => (
                        <div
                            key={a.id}
                            className="relative group"
                        >
                            <Link href={`/product/${a.id}`} className="group relative">
                                <Card className="border-none shadow-none p-0 rounded-none">
                                    <CardContent className="flex flex-col text-center items-center justify-centerp-0 relative">
                                        <div className="group relative w-[200px] h-[200px] lg:h-[300px] lg:w-[300px]">
                                            <Image
                                                src={a.img}
                                                // width={650}
                                                // height={550}
                                                layout="fill"
                                                objectFit="contain"
                                                className="cursor-pointer transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-70"
                                                alt="Product"
                                            />
                                        </div>

                                        <div className="absolute -top-1 lg:top-1/4  lg:-translate-y-[80px] right-20 lg:right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex flex-col items-center gap-2">
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    // handleAddToWishlist(a);
                                                }}
                                                className="p-2 bg-red-100 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
                                            >
                                                <FcLike size={25} className="hover:text-red-500" />
                                            </div>
                                            <div className="p-2 bg-blue-100 rounded-full hover:scale-110 transition-transform duration-300">
                                                <PiShareFatFill size={25} className="text-gray-500" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2 m-3">
                                    <h1 className="font-semibold  text-[16px] lg:text-lg text-gray-600 uppercase">
                                        {a.title}
                                    </h1>
                                    <div className="text-xs lg:text-sm font-bold leading-7 space-x-2">
                                        <span>{a.actualprize}</span>
                                        <span className="line-through text-gray-400">{a.discprize}</span>
                                        {a.offerprize && <span>{a.offerprize}</span>}
                                    </div>
                                    <span className="text-xs font-semibold">{a.colors}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 mt-16 gap-4">
                    <div className="lg:col-span-2 lg:row-span-2 sm:col-span-2 md:col-span-1 relative group" key={productlist[4].id}>
                        <Link href={`/product/${productlist[4].id}`}>
                            <Card className="border-none shadow-none p-0 rounded-none">
                                <CardContent className="p-0 relative">
                                    <Image
                                        src={productlist[4].img}
                                        width={650}
                                        height={550}
                                        className="w-full h-auto cursor-pointer transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                                        alt="Product"
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="lg:col-start-3 sm:col-span-1 md:col-span-1 relative group" key={productlist[5].id}>
                        <Link href={`/product/${productlist[5].id}`}>
                            <Card className="border-none shadow-none p-0 rounded-none">
                                <CardContent className="relative p-0">
                                    <Image
                                        src={productlist[5].img}
                                        width={350}
                                        height={200}
                                        className="w-full h-auto cursor-pointer transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70"
                                        alt="Product"
                                    />
                                    <div className="absolute top-1/4 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex flex-col items-center gap-2">
                                        <div className="p-2 bg-red-100 rounded-full hover:scale-110 transition-transform duration-300">
                                            <FcLike size={25} className="hover:text-red-500" />
                                        </div>
                                        <div className="p-2 bg-blue-100 rounded-full hover:scale-110 transition-transform duration-300">
                                            <PiShareFatFill size={25} className="text-gray-500 hover:text-blue-600" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 m-2">
                                        <h1 className="font-semibold text-lg text-gray-600">{productlist[5].title}</h1>
                                        <div className="text-sm font-bold leading-7 space-x-2">
                                            <span>{productlist[5].actualprize}</span>
                                            <span className="line-through text-gray-400">{productlist[5].discprize}</span>
                                            {productlist[5].offerprize && <span>{productlist[5].offerprize}</span>}
                                        </div>
                                        <span className="text-xs font-semibold">{productlist[5].colors}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="lg:col-start-4 sm:col-span-1 md:col-span-1 relative group" key={productlist[6].id}>
                        <Link href={`/product/${productlist[6].id}`}>
                            <Card className="border-none shadow-none p-0 rounded-none">
                                <CardContent className="relative p-0">
                                    <Image
                                        src={productlist[6].img}
                                        width={300}
                                        height={200}
                                        className="w-full h-auto cursor-pointer transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                                        alt="Product"
                                    />
                                    <div className="absolute top-1/4 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex flex-col items-center gap-2">
                                        <div className="p-2 bg-red-100 rounded-full hover:scale-110 transition-transform duration-300">
                                            <FcLike size={25} className="hover:text-red-500" />
                                        </div>
                                        <div className="p-2 bg-blue-100 rounded-full hover:scale-110 transition-transform duration-300">
                                            <PiShareFatFill size={25} className="text-gray-500 hover:text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 m-2">
                                        <h1 className="font-semibold text-lg text-gray-600">{productlist[6].title}</h1>
                                        <div className="text-sm font-bold leading-7 space-x-2">
                                            <span>{productlist[6].actualprize}</span>
                                            <span className="line-through text-gray-400">{productlist[6].discprize}</span>
                                            {productlist[6].offerprize && <span>{productlist[6].offerprize}</span>}
                                        </div>
                                        <span className="text-xs font-semibold">{productlist[6].colors}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-3 lg:row-start-2 sm:col-span-2 md:col-span-1 relative group" key={productlist[7].id}>
                        <Link href={`/product/${productlist[7].id}`}>
                            <Card className="border-none shadow-none p-0">
                                <CardContent className="relative p-0">
                                    <Image
                                        src={productlist[7].img}
                                        width={600}
                                        height={200}
                                        className="w-full h-auto cursor-pointer transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                                        alt="Product"
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
