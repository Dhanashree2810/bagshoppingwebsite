'use client'
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LiaArrowRightSolid } from "react-icons/lia";
import { LiaArrowLeftSolid } from "react-icons/lia";


interface WishlistProduct {
    id: string;
    image: StaticImageData;
    title: string;
    price: number;
    color: string;
    size: string;
    quantity: number
}

const CartItems = ({ products }: { products: WishlistProduct[] }) => {
    const [initialProducts, setinitialProducts] = useState(products);

    const [quantities, setQuantities] = useState<Record<string, number>>(
        products.reduce((acc, product) => {
            acc[product.id] = product.quantity;
            return acc;
        }, {} as Record<string, number>)
    );
    const [orderSpecialInst, setOrderSpecialInst] = useState('');
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const total = products.reduce((acc, product) => {
            const currentQuantity = quantities[product.id] || 1;
            return acc + product.price * currentQuantity;
        }, 0);
        setSubtotal(total);
    }, [products, quantities]);


    const handleIncrement = (id: string) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    const handleDecrement = (id: string) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(prev[id] - 1, 1),
        }));
    };

    const handleDelete = (id: string) => {
        const updatedProducts = initialProducts.filter((product) => product.id !== id);
        setinitialProducts(updatedProducts);
    };

    return (
        <div className="pt-4">
            <div className="container mx-auto px-4">
                <div className="mb-4">
                    <h2 className="text-xl lg:text-2xl font-bold">
                        Cart (<span>{initialProducts.length}</span>)
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="hidden md:grid grid-cols-4 gap-4 bg-gray-100 p-4 rounded-lg">
                        <div className="font-semibold text-left">Image</div>
                        <div className="font-semibold text-left">Name</div>
                        <div className="font-semibold text-left">Quantity</div>
                        <div className="font-semibold text-right">Total</div>
                    </div>

                    {initialProducts.map((product) => (
                        <div
                            key={product.id}
                            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center bg-white p-4 rounded-lg shadow-md"
                        >
                            <div className="flex justify-center items-center overflow-hidden w-full h-40 rounded-md bg-gray-50">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={150}
                                    height={150}
                                    className="rounded-md cursor-pointer object-contain"
                                />
                            </div>

                            <div>
                                <div className="text-[16px] font-semibold tracking-tight">{product.title}</div>
                                <div className="text-base text-green-600 font-bold">
                                    ₹ {product.price}
                                </div>
                                <div className="flex flex-col text-xs text-gray-600 gap-2">
                                    {product.color && (
                                        <h1 className="flex flex-row justify-start items-center gap-2 text-sm text-black font-semibold">
                                            Color :
                                            <span className="text-sm text-gray-600">{product.color}</span>
                                        </h1>
                                    )}
                                    {product.size && (
                                        <h1 className="flex flex-row justify-start items-center gap-2 text-sm text-black font-semibold">
                                            Size :
                                            <span className="text-sm text-gray-600">{product.size}</span>
                                        </h1>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className=" grid grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-4">
                                    <Button
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        onClick={() => handleDecrement(product.id)}
                                        disabled={quantities[product.id] <= 1}
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="text-gray-600" />
                                    </Button>
                                    <Input
                                        type="number"
                                        value={quantities[product.id]}
                                        min="1"
                                        readOnly
                                        className="w-16 text-center border border-gray-300 rounded-md"
                                        aria-label="Quantity"
                                    />
                                    <Button
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                                        onClick={() => handleIncrement(product.id)}
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="text-gray-600" />
                                    </Button>
                                    <Button
                                        className="p-2 rounded-full"
                                        aria-label="Remove item"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <Trash2 className="text-white" />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-row justify-end lg:justify-end font-bold items-center lg:items-end lg:mr-5 text-lg lg:text-xl">
                                ₹{product.price}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-8">
                    <Link
                        href="/"
                        className="bg-gray-600 text-white px-4 py-3 rounded-md flex items-center text-sm lg:text-[16px]"
                    >
                        <LiaArrowLeftSolid className="mr-2 text-white" />
                        Continue Shopping
                    </Link>
                    <Input
                        type="text"
                        value={orderSpecialInst}
                        onChange={(e) => setOrderSpecialInst(e.target.value)}
                        placeholder="Order Special Instructions"
                        className="w-full lg:w-[400px] px-4 py-2 border-gray-300 rounded-md"
                    />
                    <div className="text-center">
                        <div className="text-[16px] lg:text-lg font-semibold py-2 lg:py-0">
                            Subtotal: ₹ {subtotal.toFixed(2)}
                        </div>
                        <div className="text-xs lg:text-sm text-gray-600">
                            Taxes and shipping calculated at checkout
                        </div>
                    </div>
                    <Link
                        href="/checkout"
                        className="bg-gray-600 text-white px-4 py-3 rounded-md flex items-center text-sm lg:text-[16px]"
                    >
                        Checkout
                        <LiaArrowRightSolid className="ml-2 text-white" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
