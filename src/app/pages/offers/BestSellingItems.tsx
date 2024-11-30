import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import handbag11 from '@/assets/images/handbag11-removebg-preview.png';
import handbag12 from '@/assets/images/handbag12-removebg-preview.png';
import handbag13 from '@/assets/images/handbag13-removebg-preview.png';
import handbag14 from '@/assets/images/handbag14-removebg-preview.png';
import handbag15 from '@/assets/images/handbag15-removebg-preview.png';
import b1 from '@/assets/images/b1-removebg-preview.png';
import b2 from '@/assets/images/b2-removebg-preview.png';
import b4 from '@/assets/images/b4-removebg-preview.png';
import b7 from '@/assets/images/b7-removebg-preview.png';
import b8 from '@/assets/images/b8-removebg-preview.png';
import b9 from '@/assets/images/b9-removebg-preview.png';
import b10 from '@/assets/images/b10-removebg-preview.png';
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import Link from 'next/link';


export default function BestSellingItems() {
    const newOfferlist = [
        { id: 1, img: handbag11, name: "Hand Bag", price: "₹280.00", discprize: "₹200.00" },
        { id: 2, img: handbag12, name: "Hand Bag", price: "₹480.00", discprize: "₹400.00" },
        { id: 3, img: handbag13, name: "Hand Bag", price: "₹630.00", discprize: "₹530.00" },
        { id: 4, img: handbag14, name: "Hand Bag", price: "₹540.00", discprize: "₹400.00" },
        { id: 5, img: handbag15, name: "Hand Bag", price: "₹620.00", discprize: "₹550.00" },
        { id: 6, img: b1, name: "Hand Bag", price: "₹280.00", discprize: "₹200.00" },
        { id: 7, img: b2, name: "Hand Bag", price: "₹480.00", discprize: "₹400.00" },
        { id: 8, img: b4, name: "Hand Bag", price: "₹630.00", discprize: "₹530.00" },
        { id: 9, img: b7, name: "Hand Bag", price: "₹540.00", discprize: "₹400.00" },
        { id: 10, img: b8, name: "Hand Bag", price: "₹620.00", discprize: "₹550.00" },
        { id: 11, img: b9, name: "Hand Bag", price: "₹630.00", discprize: "₹530.00" },
        { id: 12, img: b10, name: "Hand Bag", price: "₹540.00", discprize: "₹400.00" },
    ];
    return (

        <div className="relative w-full">
            <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-5">
                <div className='grid grid-cols-1 justify-center items-center'>
                    <div className=" flex flex-col">
                        <div className="my-5">
                            <h1 className=" text-gray-500 font-bold text-center text-xl lg:text-3xl my-2 uppercase">Best Selling Items</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    {newOfferlist.map((a) => (
                        <Card className="border-none shadow-none p-0 rounded-none" key={a.id}>
                            <Link href={`/product/${a.id}`}>
                                <CardContent className="flex flex-col text-center items-center justify-center p-0">
                                    <div className="group relative w-[200px] h-[200px] lg:h-[250px] lg:w-[250px] rounded-t-full rounded-b-full bg-radial-gradient">
                                        <Image
                                            src={a.img}
                                            layout="fill"
                                            objectFit="contain"
                                            className="cursor-pointer transform transition-transform duration-100 ease-out group-hover:scale-110"
                                            alt="Product"
                                        />
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] bg-white text-black text-center border-2 border-gray-500 rounded-ee-full rounded-ss-full py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            Quick Look
                                        </div>
                                    </div>

                                    <div className="flex flex-col text-center items-center justify-center gap-2 m-2">
                                        <h1 className="font-semibold text-lg text-gray-600 uppercase">
                                            {a.name}
                                        </h1>
                                        <div className="text-sm font-bold leading-7 space-x-2">
                                            <span className="line-through text-gray-400">{a.price}</span>
                                            <span className=' text-black'>{a.discprize}</span>
                                        </div>
                                        <div className=" flex flex-row gap-2">
                                            <IoStar className=' text-sm text-gray-500' />
                                            <IoStar className=' text-sm text-gray-500' />
                                            <IoStarHalfOutline className=' text-sm text-gray-500' />
                                            <IoStarHalfOutline className=' text-sm text-gray-500' />
                                            <IoStarOutline className=' text-sm text-gray-500' />
                                        </div>
                                    </div>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
