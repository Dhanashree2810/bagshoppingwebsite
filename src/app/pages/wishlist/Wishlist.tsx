import React from 'react'
import banner1 from '@/assets/images/banner1.jpg'
import WishlistProduct from './WishlistProduct';
import wishlistimg1 from '@/assets/images/wishlistimg1.png'
import wishlistimg2 from '@/assets/images/wishlistimg2.png'
import Banner from '@/components/custom/Banner';

export default function Wishlist() {
    const products = [
        {
            id: "1",
            image: wishlistimg1,
            title: "Velar Women Black Shoulder Bag",
            price: "580.00",
            details: "Black / Medium, Black / Small",
        },
        {
            id: "2",
            image: wishlistimg2,
            title: "Classic Leather Bag",
            price: "420.00",
            details: "Brown / Medium",
        },
    ];

    return (
        <div>
            <Banner
                backgroundImage={banner1.src}
                title="Liked Your Products"
                description="An automatic pet feeder is a convenient addition to your pet care routine, especially if you have a busy schedule or need to leave your pet alone for extended periods."
            />

            <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-40 lg:py-5">
                <WishlistProduct products={products} />
            </div>

        </div>
    )
}
