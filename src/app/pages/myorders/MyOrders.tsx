'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Package2 } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from "next/link"
import detailimg1 from '@/assets/images/whitebag1.webp'
import sling1 from '@/assets/images/sling-bag.jpeg'
import sling2 from '@/assets/images/sling-bag2.jpeg'

interface OrderItem {
    id: string
    name: string
    image: StaticImageData
    price: number
    returnWindowDate: string
}

interface Order {
    id: string
    orderNumber: string
    date: string
    total: number
    deliveryDate: string
    status: string
    shippedTo: string
    items: OrderItem[]
}

const orders: Order[] = [
    {
        id: '1',
        orderNumber: '402-1815915-0645319',
        date: '20 November 2024',
        total: 1329.00,
        deliveryDate: '20 November',
        status: 'Delivered',
        shippedTo: 'John Doe',
        items: [
            {
                id: '1',
                name: 'White Women Sling Bag Sling Bag For Womens/Girls',
                image: detailimg1,
                price: 1329.00,
                returnWindowDate: '1 November 2024'
            }
        ]
    },
    {
        id: '2',
        orderNumber: '408-1873312-3635336',
        date: '20 October 2024',
        total: 573.00,
        deliveryDate: '23 October',
        status: 'Delivered',
        shippedTo: 'Kevin Thomas',
        items: [
            {
                id: '2',
                name: 'Tatuaa Black Sling Bag Sling Bag For Womens/Girls',
                image: sling1,
                price: 439.00,
                returnWindowDate: '30 October 2024'
            },
            {
                id: '3',
                name: 'Tatuaa Blue Sling Bag Sling Bag For Womens/Girls',
                image: sling2,
                price: 439.00,
                returnWindowDate: '2 November 2024'
            }
        ]
    }
]

export default function MyOrders() {
    const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined)

    const handleAccordionChange = (value: string) => {
        setOpenAccordion(openAccordion === value ? undefined : value)
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-semibold">
                    <span className="font-bold">{orders.length}</span> orders placed in
                    <Select defaultValue="3months">
                        <SelectTrigger className="w-[140px] ml-2">
                            <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="3months">past 3 months</SelectItem>
                            <SelectItem value="6months">past 6 months</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                        </SelectContent>
                    </Select>
                </h1>
            </div>

            <div className="space-y-6">
                {orders.map((order) => (
                    <Card key={order.id} className="overflow-hidden">
                        <div className="bg-muted p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="text-start lg:text-start">
                                <div className="text-sm text-muted-foreground">ORDER PLACED</div>
                                <div>{order.date}</div>
                            </div>
                            <div className="text-start lg:text-start">
                                <div className="text-sm text-muted-foreground">TOTAL</div>
                                <div>₹{order.total.toFixed(2)}</div>
                            </div>
                            <div className="text-start lg:text-start">
                                <div className="text-sm text-muted-foreground">SHIP TO</div>
                                <div className="flex items-center text-start lg:text-start">
                                    {order.shippedTo}
                                </div>
                            </div>
                            <div className="text-start lg:text-right">
                                <div className="text-sm text-muted-foreground">ORDER # {order.orderNumber}</div>
                                <div className="space-x-2">
                                    <Button variant="link" className="p-0">
                                        Invoice
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            <div className="mb-4">
                                <h2 className="text-[16px] lg:text-xl font-semibold">
                                    {order.status} {order.deliveryDate}
                                </h2>
                                <p className="text-xs lg:text-sm text-muted-foreground">Package was handed to resident</p>
                            </div>

                            {order.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-1 md:grid-cols-4 gap-6 py-4 border-t"
                                >
                                    <div className="md:col-span-3 flex flex-col md:flex-row gap-4">
                                        <div className="w-24 h-24 relative mx-auto md:mx-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                layout="fill"
                                                objectFit="contain"
                                                className="rounded"
                                            />
                                        </div>
                                        <div className="space-y-2 flex-1 text-center md:text-left">
                                            <Link
                                                href="#"
                                                className="text-primary hover:underline font-bold text-lg lg:text-xl block"
                                            >
                                                {item.name}
                                            </Link>
                                            <div className="text-sm text-muted-foreground">
                                                Return window closed on {item.returnWindowDate}
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-start">
                                                <Button>Buy it again</Button>
                                                <Button variant="outline">View your item</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-center md:text-left">
                                        <Button variant="outline" className="w-full md:w-auto justify-center md:justify-start">
                                            <Package2 className="mr-2 h-4 w-4" />
                                            Track package
                                        </Button>
                                        <Button variant="outline" className="w-full md:w-auto justify-center md:justify-start">
                                            Leave seller feedback
                                        </Button>
                                        <Button variant="outline" className="w-full md:w-auto justify-center md:justify-start">
                                            Leave delivery feedback
                                        </Button>
                                        <Button variant="outline" className="w-full md:w-auto justify-center md:justify-start">
                                            Write a product review
                                        </Button>
                                    </div>
                                </div>
                            ))}

                            <Accordion
                                type="single"
                                collapsible
                                value={openAccordion}
                                onValueChange={handleAccordionChange}
                            >
                                <AccordionItem value={order.id}>
                                    <AccordionTrigger className="p-0 text-[16px] lg:text-lg font-semibold hover:border-none">
                                        View order details
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-4 p-4 bg-gray-50 rounded-md">
                                            <h3 className="font-semibold text-[16px] lg:text-xl">Order Details</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                <div className="p-2">
                                                    <p className="font-semibold text-[16px] lg:text-lg border-b-2 border-gray-500 w-fit mb-2">
                                                        Shipping Address:
                                                    </p>
                                                    <p className="text-sm font-medium leading-5 tracking-wide">{order.shippedTo}</p>
                                                    <p className="text-sm font-medium leading-5 tracking-wide">123 Example St</p>
                                                    <p className="text-sm font-medium leading-5 tracking-wide">City, State 12345</p>
                                                </div>

                                                <div className="p-2">
                                                    <h3 className="font-semibold text-[16px] lg:text-lg border-b-2 border-gray-500 w-fit mb-2">
                                                        Payment Method:
                                                    </h3>
                                                    <p className="text-sm font-medium leading-5 tracking-wide">
                                                        Visa ending in 1234
                                                    </p>
                                                    <p className="text-sm font-bold leading-5 tracking-wide mt-3 border-b-2 border-gray-500 w-fit mb-2">
                                                        Order Summary:
                                                    </p>
                                                    <p className="text-sm font-medium leading-5 tracking-wide">
                                                        Item(s) Subtotal: ₹{order.total.toFixed(2)}
                                                    </p>
                                                    <p className="text-sm font-medium leading-5 tracking-wide">
                                                        Shipping & Handling: ₹0.00
                                                    </p>
                                                    <p className="text-sm font-medium leading-5 tracking-wide">
                                                        Total: ₹{order.total.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <h4 className="font-semibold text-[16px] lg:text-lg border-b-2 border-gray-500 w-fit mb-2">
                                                    Order Items:
                                                </h4>
                                                {order.items.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-2"
                                                    >
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                            className="rounded"
                                                        />

                                                        <div className="text-center md:text-left">
                                                            <p className="font-bold text-sm lg:text-[16px]">{item.name}</p>
                                                            <p className="text-sm font-medium text-gray-600">
                                                                ₹{item.price.toFixed(2)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

