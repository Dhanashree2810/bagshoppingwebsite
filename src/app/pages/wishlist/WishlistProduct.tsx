'use client'
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";

interface WishlistProduct {
    id: string;
    image: StaticImageData;
    title: string;
    price: string;
    details: string;
}

const WishlistProduct = ({ products }: { products: WishlistProduct[] }) => {
    const [initialProducts, setinitialProducts] = useState(products);

    const handleDelete = (id: string) => {
        const updatedProducts = initialProducts.filter((product) => product.id !== id);
        setinitialProducts(updatedProducts);
    };
    

    return (
        <div className="pt-4">
            <div className="container mx-auto px-4">
                <div className="mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold">
                        Wishlist (<span>{products.length}</span>)
                    </h2>
                </div>

                <div>
                    <div className="hidden md:grid grid-cols-4 gap-4 bg-gray-100 p-4 rounded-lg">
                        <div className="font-semibold text-center">Product</div>
                        <div className="font-semibold text-center">Details</div>
                        <div className="font-semibold text-center">Cart Button</div>
                        <div className="font-semibold text-center">Delete</div>
                    </div>

                    <div className="mt-4">
                        {initialProducts.map((product) => (
                            <div
                                key={product.id}
                                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 justify-center items-center bg-white p-4 rounded-lg shadow-md mb-4"
                            >
                                <div className="flex justify-center items-center overflow-hidden w-full h-40 rounded-md bg-gray-50">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={150}
                                        height={150}
                                        objectFit="contain"
                                        className="rounded-md cursor-pointer"
                                    />
                                </div>
                                
                                <div className="text-center md:text-left">
                                    <div className="text-[16px] font-medium">{product.title}</div>
                                    <div className="text-xs text-gray-600 mt-2">{product.details}</div>
                                    <div className="text-base text-green-600 font-bold lg:mt-5">
                                        ₹{product.price}
                                    </div>
                                </div>
                                
                                <div className="flex justify-center md:justify-center items-center">
                                    <Link href="/carts">
                                        <Button
                                            className="btn bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black"
                                            aria-label="Add to Cart"
                                        >
                                            Add to Cart
                                        </Button>
                                    </Link>
                                </div>

                                <div className="flex justify-center md:justify-center items-center">
                                    <RiDeleteBinFill
                                        size={30}
                                        className="text-red-600 rounded-full hover:bg-red-500 cursor-pointer hover:bg-transparent"
                                        onClick={() => handleDelete(product.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                        <Button
                            className="btn bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black"
                            aria-label="Clear All Wishlist"
                        >
                            Clear All
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistProduct;
