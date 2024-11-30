"use client"
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface WishlistProduct {
    id: string;
    image: StaticImageData;
    title: string;
    price: number;
    color: string;
    size: string;
    quantity: number
}


export default function CheckoutItems({ products }: { products: WishlistProduct[] }) {
    const countries = [
        "Australia", "Canada", "France", "Germany", "India", "United Kingdom", "United States"
    ]
    const [selectedCountry, setSelectedCountry] = useState(countries[4]);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [username, setUserName] = useState('');
    const [error, setError] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    // const [quantities, setQuantities] = useState<Record<string, number>>(
    //     products.reduce((acc, product) => {
    //         acc[product.id] = 1;
    //         return acc;
    //     }, {} as Record<string, number>)
    // );

    const quantities = products.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {} as Record<string, number>);


    useEffect(() => {
        const total = products.reduce((acc, product) => {
            const currentQuantity = quantities[product.id] || 1;
            return acc + product.price * currentQuantity;
        }, 0);
        setSubtotal(total);
    }, [products, quantities]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!cardNumber || !expiryDate || !cvv) {
            setError('All fields are required.');
            return;
        }
        if (cardNumber.length !== 16 || isNaN(Number(cardNumber))) {
            setError('Card number must be 16 digits.');
            return;
        }
        if (cvv.length !== 3 || isNaN(Number(cvv))) {
            setError('CVV must be 3 digits.');
            return;
        }

        setError('');
        alert('Payment Submitted!');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10">
            <div className="flex flex-col">
                <div className=' flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center gap-20'>
                        <h1 className=" font-semibold text-lg lg:text-xl"> Contact</h1>
                        <Link href="/login" className=" text-blue-700 hover:underline pb-2">Log in</Link>
                    </div>

                    <div className=" mb-4">
                        <Input className="px-4 h-12 text-sm rounded-md" type="text" name="name" id="name" placeholder="Email or mobile phone number" />
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                        <Checkbox id="newsoffers" />
                        <Label
                            htmlFor="newsoffers"
                            className="text-xs lg:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Email me with news and offers
                        </Label>
                    </div>
                </div>

                <div className='flex flex-col gap-2 mb-4  lg:mt-10'>
                    <h1 className="font-semibold text-lg lg:text-xl"> Delivery</h1>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="justify-between h-12">
                                {selectedCountry}
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[600px]">
                            <DropdownMenuLabel>Select a country</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {countries.map((country) => (
                                <DropdownMenuItem
                                    className=" h-12"
                                    key={country}
                                    onSelect={() => setSelectedCountry(country)}
                                >
                                    {country}
                                    {country === selectedCountry && (
                                        <Check className="ml-auto h-4 w-4" />
                                    )}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4'>
                    <Input className="px-4 h-10 lg:h-12  text-sm rounded-none" type="text" name="name" id="name" placeholder="First Name(optional)" />
                    <Input className="px-4 h-10 lg:h-12  text-sm rounded-none" type="text" name="name" id="name" placeholder="Last Name" />
                </div>

                <div className=" mb-4">
                    <Input className="px-4 h-10 lg:h-12  text-sm rounded-none" type="text" name="name" id="name" placeholder="Address" />
                </div>

                <div className=" mb-4">
                    <Input className="px-4 h-10 lg:h-12  text-sm rounded-none" type="text" name="name" id="name" placeholder="Aprtment,suite, etc.(optional)" />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3  gap-2'>
                    <Input className="px-4 h-10 lg:h-12  text-sm rounded-none" type="text" name="name" id="name" placeholder="City" />
                    <Input className="px-4 h-10 lg:h-12  text-sm rounded-none" type="text" name="name" id="name" placeholder="State" />
                    <Input className="px-4 h-10 lg:h-12  text-sm rounded-none" type="text" name="name" id="name" placeholder="PIN Code" />
                </div>

                <div className="flex items-center space-x-2 mt-5">
                    <Checkbox id="savetime" />
                    <Label
                        htmlFor="savetime"
                        className="text-xs lg:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Save this information for next time
                    </Label>
                </div>

                <div className=' flex flex-col gap-2 lg:mt-10 mt-5'>
                    <div className='flex flex-row justify-start items-center gap-20'>
                        <h1 className=" font-semibold text-lg lg:text-xl">Shipping method</h1>
                    </div>
                    <div className="flex items-center justify-center ">
                        <div className="border border-1 p-3 w-full text-gray-500 text-xs lg:text-sm font-normal bg-[#F5F5F5] border-gray-200 rounded-none">
                            Enter your shipping address to view available shipping methods
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2 mt-5 lg:mt-10'>
                    <h1 className=" font-semibold text-lg lg:text-xl"> Payment</h1>
                    <p className=" text-xs py-3">All transactions are secure and encrypted.</p>
                </div>

                <div className='grid grid-cols-1 w-full rounded-lg shadow-md  justify-start items-start'>
                    <Card className="bg-[#F5F5F5] text-black ">
                        <CardHeader>
                            <CardTitle>Credit Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={handleSubmit}
                            >
                                {error && (
                                    <div className="mb-4 text-red-500 text-sm">
                                        {error}
                                    </div>
                                )}
                                <div className="mb-6">
                                    <Input
                                        type="text"
                                        id="cardNumber"
                                        maxLength={16}
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        className="w-full h-10 lg:h-12 text-xs lg:text-sm border border-gray-200 rounded bg-white text-black"
                                        placeholder="Card Number"
                                    />
                                </div>

                                <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    <div>
                                        <Input
                                            type="text"
                                            id="expiryDate"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                            className="w-full h-10 lg:h-12  text-xs lg:text-sm rounded bg-white text-black"
                                            placeholder="Expiration date MM/YY"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            id="cvv"
                                            maxLength={3}
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            className="w-full h-10 lg:h-12 text-xs lg:text-sm rounded bg-white text-black"
                                            placeholder="security code"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <Input
                                        type="text"
                                        id="name"
                                        maxLength={3}
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="w-full h-10 lg:h-12 text-xs lg:text-sm rounded bg-white text-black"
                                        placeholder="Name on card"
                                    />
                                </div>

                                <div className="flex items-center space-x-2 mb-4">
                                    <Checkbox id="billingaddr" className="bg-[#105989] text-white" />
                                    <Label
                                        htmlFor="billingaddr"
                                        className="text-xs lg:text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Use shipping address as billing address
                                    </Label>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button
                                type="submit"
                                className="w-full h-10 lg:h-12 bg-[#105989]  rounded text-white font-bold text-sm lg:text-lg"
                            >
                                Pay Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full m-4 lg:mx-0">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-full mb-6 border-b pb-4"
                    >
                        <div className="grid grid-cols-2 gap-4 justify-start lg:justify-between items-start lg:items-center">
                            <div className="flex flex-row gap-2 lg:gap-5">
                                <div>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={150}
                                        height={150}
                                        objectFit="contain"
                                        className="rounded-md mb-2"
                                    />
                                </div>
                                <div className="flex flex-col justify-start lg:justify-center items-start">
                                    <h1 className="text-sm font-semibold">{product.title}</h1>
                                    <span className="text-sm text-gray-500">Color: {product.color || "N/A"}</span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start lg:items-end">
                                <span className="text-sm lg:text-[16px] font-semibold">₹{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                    <div className="flex flex-col gap-2 lg:gap-3 text-left">
                        <p className="font-medium text-xs lg:text-[16px]">Subtotal</p>
                        <p className="font-medium text-xs lg:text-[16px]">Shipping</p>
                        <p className="font-medium text-xs lg:text-[16px]">Estimated Taxes</p>
                        <p className="font-medium text-xs lg:text-[16px]">Total</p>
                    </div>

                    <div className="flex flex-col justify-start lg:justify-center items-start lg:items-end text-right gap-2 lg:gap-3">
                        <p className="m-0 text-xs lg:text-[16px]">₹{subtotal.toFixed(2)}</p>
                        <p className="m-0 text-xs text-[16px]">Enter shipping address</p>
                        <p className="m-0 text-xs text-[16px]">₹144.29</p>
                        <p className="font-semibold text-lg lg:text-2xl m-0">₹1,744.29</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
