'use client'
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from 'react';
import Image from "next/image"
import { Heart, Mail, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import bag1 from "@/assets/images/bag1.jpg"
import bag2 from "@/assets/images/bag2.jpg"
import bagbanner from '@/assets/images/bagBanner.jpg'

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);

    return (
        <div className="relative w-full">
            <div className="relative w-full h-[500px] lg:h-[700px]">
                <Image
                    src={bagbanner}
                    alt="Brown leather handbag"
                    layout="fill"
                    objectFit="cover"
                    // layout="responsive"
                    priority
                    className="rounded-lg"
                />
            </div>

            <div className="w-full px-4 py-5 lg:px-48 lg:py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
                    <div className="flex flex-col items-center text-center lg:text-right space-y-6">
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight">
                            Highlight
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                            your own style with us.
                        </p>
                        <Image
                            src={bag2}
                            alt="Model with backpack"
                            width={450}
                            height={380}
                            className="rounded-lg object-cover max-w-full max-h-full"
                            priority
                        />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={bag1}
                            alt="Brown leather handbag"
                            width={550}
                            height={870}
                            className="rounded-lg object-cover max-w-full max-h-full"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex fixed right-4 top-1/2 z-10 flex-col lg:gap-4 gap-0">
                <Button variant="outline" size="icon" className="rounded-full">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to favorites</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Contact us</span>
                </Button>
            </div>
        </div>
    )
}
