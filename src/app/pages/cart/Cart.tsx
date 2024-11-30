import banner1 from '@/assets/images/banner1.jpg'
import Banner from '@/components/custom/Banner'
import wishlistimg1 from '@/assets/images/wishlistimg1.png'
import wishlistimg2 from '@/assets/images/wishlistimg2.png'
import CartItems from './CartItems';

export default function Cart() {
    const products = [
        {
            id: "1",
            image: wishlistimg1,
            title: "Velar Women Black Shoulder Bag",
            price: 580.00,
            color: "Black",
            size: "Medium",
            quantity : 1
        },
        {
            id: "2",
            image: wishlistimg2,
            title: "Tory Burch Kira Chevron Chain Clutch",
            price: 420.00,
            color: "",
            size: "",
            quantity : 2
        },
    ];


    return (
        <div>
            <Banner
                backgroundImage={banner1.src}
                title="Your Cart"
                description="A summary section at the bottom of the cart page displays the total cost of the items, any applicable taxes, and the grand total."
            />
            <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-40 lg:py-5">
                <CartItems products={products} />
            </div>
        </div>
    )
}
