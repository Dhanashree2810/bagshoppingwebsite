"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, User2Icon, X, LogOut, Heart } from 'lucide-react'
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname } from 'next/navigation';
import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BiLogInCircle } from "react-icons/bi";
import { RiOrderPlayFill } from "react-icons/ri";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Offers", href: "/offers" },
    { name: "What's New", href: "/whatsnew" },
    { name: "Contact", href: "/contact" },
]

export default function Navbars() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (link: string) => {
        return pathname === link || pathname.startsWith(link + '/');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between lg:px-20 sm:px-14 md:px-16">
                <div className="flex items-center gap-4">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-50 pt-16 sheetcon">
                            <VisuallyHidden.Root>
                                <SheetTitle className=' text-black'>Menu</SheetTitle>
                            </VisuallyHidden.Root>
                            <nav className="flex flex-col gap-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`text-black w-fit text-sm font-semibold transition-colors hover:text-primary ${isActive(item.href) ? 'border-b-2 border-red-500' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold">Quirko</span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-center gap-16">
                    {isSearchOpen ? (
                        <div className="absolute inset-x-0 top-0 z-50 flex h-16 items-center gap-4 bg-background px-4 md:static md:w-auto">
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="h-9 md:w-[200px] lg:w-[300px]"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <X className="h-5 w-5" />
                                <span className="sr-only">Close search</span>
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search products</span>
                        </Button>
                    )}

                    <nav className="hidden md:flex md:items-center md:gap-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={` text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? 'border-b-2 border-red-500' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                </div>

                <div className="flex items-center gap-4">
                    <Link href="/wishlist">
                        <Button variant="ghost" size="icon">
                            <FaRegHeart className="h-5 w-5" />
                            <span className="sr-only">Wishlist</span>
                        </Button>
                    </Link>
                    <Link href="/carts">
                        <Button variant="ghost" size="icon">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="sr-only">Open cart</span>
                        </Button>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <User2Icon className="h-5 w-5 cursor-pointer" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuGroup>
                                <Link href="/myprofile" >
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <User />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/myorders" >
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <RiOrderPlayFill />
                                        <span>My Orders</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/wishlist" >
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <Heart />
                                        <span>My Wishlist</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/login">
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <BiLogInCircle />
                                        <span>Login</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/carts">
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <FaCartShopping />
                                        <span>Carts</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/checkout">
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <MdShoppingCartCheckout />
                                        <span>Checkout</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/">
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <LogOut />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
