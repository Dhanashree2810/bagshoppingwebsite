'use client';
import { useState } from 'react';
import detailimg1 from '@/assets/images/whitebag1.webp';
import detailimg2 from '@/assets/images/whitebag2.jpeg';
import detailimg3 from '@/assets/images/whitebag3.jpeg';
import detailimg4 from '@/assets/images/whitebag4.jpeg';
import detailimg5 from '@/assets/images/whitebag5.jpeg';
import detailimg6 from '@/assets/images/purplebag.jpeg';
import detailimg7 from '@/assets/images/bluebag.jpeg';
import detailimg8 from '@/assets/images/greenbag.jpeg';
import detailimg9 from '@/assets/images/whitebag6.jpeg';
import blackbag from '@/assets/images/blackbag.jpeg';
import Image, { StaticImageData } from 'next/image';
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
import sling1 from '@/assets/images/sling-bag.jpeg'
import sling2 from '@/assets/images/sling-bag2.jpeg'
import sling3 from '@/assets/images/sling-bag3.jpeg'
import sling4 from '@/assets/images/sling-bag6.jpeg'
import { IoStar } from "react-icons/io5";
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RatingsAndReviews from './RatingsAndReviews';
import { Button } from '@/components/ui/button';
import { FaHeart } from "react-icons/fa";


type Review = {
    user: string;
    rating: number;
    date: string;
    reviewText: string;
};

const product = {
    brand: 'Tatuaa',
    name: 'White Women Sling Bag Sling Bag For Womens/Girls',
    price: 1999,
    specialPrice: 439,
    ratingsCount: 1257,
    ratings: 4.2,
    reviewsCount: 36,
    offers: [
        '5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C',
        'Flat ₹1,200 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure, Min. Txn Value: ₹15,000T&C',
        'Flat ₹1,500 off on HDFC Bank Credit Card EMI Txns on 12 months tenure, Min. Txn Value: ₹15,000T&C',
        '10% off up to ₹1750 on HDFC Bank Credit Card EMI Txns on 24 months tenure, Min. Txn Value:₹15,000T&C',
    ],
    details: [
        { label: 'Material', value: 'PU' },
        { label: 'Color', value: 'White' },
        { label: 'Number of Pockets', value: '1' },
        { label: 'Number of Compartments', value: '1' },
        { label: 'Model Name', value: 'Sling Bag For Womens/Girls' },
        { label: 'Closure', value: 'Magnetic Button' },
        { label: 'Pattern', value: 'Solid' },
        { label: 'Weight', value: '400 g' },
    ],

    images: [detailimg1, detailimg2, detailimg3, detailimg4, detailimg5, detailimg9],
    colors: [
        { color: '#ffffff', image: detailimg1 },
        { color: '#B1ACCB', image: detailimg6 },
        { color: '#8C9090', image: detailimg7 },
        { color: '#667464', image: detailimg8 },
        { color: '#000000', image: blackbag },
    ],
    similar: [
        { id: 1, name: 'Tatuaa White Sling Bag Sling Bag For Womens/Girls', img: detailimg1, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 2, name: 'Tatuaa Black Sling Bag Sling Bag For Womens/Girls', img: sling1, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 3, name: 'Tatuaa Blue Sling Bag Sling Bag For Womens/Girls', img: sling2, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 4, name: 'Tatuaa Purple Sling Bag Sling Bag For Womens/Girls', img: sling3, discprice: '₹417', price: '₹1,999', offer: '79%' },
        { id: 5, name: 'Tatuaa Green Sling Bag Sling Bag For Womens/Girls', img: sling4, discprice: '₹439', price: '₹1,999', offer: '78%' }
    ],
    recentlyviewed: [
        { id: 1, name: 'Beige Women Sling Bag', img: b1, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 2, name: 'Beige Women Sling Bag', img: b2, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 3, name: 'Beige Women Sling Bag', img: b4, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 4, name: 'Beige Women Sling Bag', img: b7, discprice: '₹417', price: '₹1,999', offer: '79%' },
        { id: 5, name: 'Beige Women Sling Bag', img: b8, discprice: '₹439', price: '₹1,999', offer: '78%' },
    ],
    recommended: [
        { id: 1, name: 'Tatuaa White Sling Bag Sling Bag For Womens/Girls', img: handbag11, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 2, name: 'Tatuaa Black Sling Bag Sling Bag For Womens/Girls', img: handbag12, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 3, name: 'Tatuaa Blue Sling Bag Sling Bag For Womens/Girls', img: handbag13, discprice: '₹439', price: '₹1,999', offer: '78%' },
        { id: 4, name: 'Tatuaa Purple Sling Bag Sling Bag For Womens/Girls', img: handbag14, discprice: '₹417', price: '₹1,999', offer: '79%' },
        { id: 5, name: 'Tatuaa Green Sling Bag Sling Bag For Womens/Girls', img: handbag15, discprice: '₹439', price: '₹1,999', offer: '78%' }
    ],
};

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState<StaticImageData>(product.images[0]);
    const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].color);
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [zoom, setZoom] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setZoom(true);
    };

    const handleMouseLeave = () => {
        setZoom(false);
    };

    const handleMouseMove = (e: any) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { width, height } = target;

        setCursorPosition({
            x: offsetX / width * 100,
            y: offsetY / height * 100,
        });
    };

    const toggleDetails = () => {
        setIsDetailsVisible(prevState => !prevState);
    };

    const [reviews, setReviews] = useState([
        {
            user: 'Ananya Sharma',
            rating: 4.5,
            date: 'October 10, 2024',
            reviewText: 'The sling bag is great! It fits all my essentials, and the material feels premium.',
        },
        {
            user: 'Pooja Singh',
            rating: 4,
            date: 'October 5, 2024',
            reviewText: 'The color is nice, but it’s a little smaller than I expected.',
        },
    ]);

    const averageRating = 4.2;
    const totalRatings = 1257;
    const totalReviews = 36;

    const handleSubmitReview = (newReview: Review) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="mb-3">
                <h1 className="text-xl font-semibold text-gray-600">{product.brand}</h1>
                <h1 className="text-2xl font-normal underline">{product.name}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-10">
                <div className="relative flex flex-col justify-start items-start">
                    <div className="relative">
                        <div
                            className="w-[200px] h-[200px] lg:w-[600px] lg:h-[500px] relative overflow-hidden"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                        >
                            <Image
                                src={selectedImage}
                                alt="Selected product image"
                                layout="fill"
                                objectFit="contain"
                                className={`cursor-pointer transition-transform duration-300 ${zoom ? "transform scale-125" : "transform scale-100"
                                    }`}
                                style={{
                                    transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </div>
                        <div className="absolute top-1 right-4 lg:top-3.5 lg:right-2 transition-all duration-300 transform scale-105 flex flex-col items-center gap-2">
                            <div className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <FaHeart size={25} className="hover:text-red-500 text-gray-500" />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 lg:gap-4 mt-4">
                        {product.images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                width={64}
                                height={64}
                                alt={`Thumbnail ${index}`}
                                onClick={() => setSelectedImage(img)}
                                className={`w-16 h-16 rounded-lg cursor-pointer ${img === selectedImage ? 'border-2 border-blue-500' : 'border'}`}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex flex-col mb-4 ga-2">
                        <span className='text-green-600 font-semibold text-sm mt-2'>
                            Special Price
                        </span>
                        <div className=' flex flex-row my-2'>
                            <span className="text-2xl font-semibold text-gray-900">
                                ₹{product.specialPrice.toLocaleString()}
                            </span>
                            <span className="text-gray-500 line-through ml-3">
                                ₹{product.price.toLocaleString()}
                            </span>
                            <span className="text-green-600 ml-3 font-medium">78% off</span>
                        </div>
                        <div className="flex flex-row justify-start items-center text-sm text-gray-600 gap-3">
                            <div className='flex flex-row justify-start items-start bg-green-600 text-white rounded-l-full rounded-r-full py-2 px-4'>
                                <div className='flex items-center w-full gap-2'>
                                    <span className=' text-sm'>
                                        {product.ratings}
                                    </span>
                                    <IoStar color='white' size={18} />
                                </div>
                            </div>
                            <span className=' font-semibold'>{product.ratingsCount} Ratings &  {product.reviewsCount} Reviews</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-gray-900 font-semibold">Available Offers:</h3>
                        <ul className="list-disc pl-5 text-gray-700 text-sm font-normal leading-8">
                            {product.offers.map((offer, index) => (
                                <li key={index}>{offer}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-900">Select Color:</h3>
                        <div className="flex gap-3 mt-2">
                            {product.colors.map((colorObj, index) => (
                                <Button
                                    key={index}
                                    className={`w-8 h-8 rounded-full ${selectedColor === colorObj.color
                                        ? 'ring-2 ring-blue-500'
                                        : 'border border-gray-300'
                                        }`}
                                    style={{ backgroundColor: colorObj.color }}
                                    onMouseEnter={() => setSelectedImage(colorObj.image)}
                                    onMouseLeave={() => setSelectedImage(product.images[0])}
                                    onClick={() => setSelectedColor(colorObj.color)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-gray-900">Product Details:</h3>
                            <Button
                                onClick={toggleDetails}
                                className="text-gray-600 text-3xl bg-transparent hover:bg-transparent"
                            >
                                {isDetailsVisible ? '-' : '+'}
                            </Button>
                        </div>
                        {isDetailsVisible && (
                            <ul className="space-y-2 text-gray-700">
                                {product.details.map((detail, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span className="font-medium text-sm">{detail.label}:</span>
                                        <span className='font-semibold text-sm'>{detail.value}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex space-x-4">
                        <Link href="/carts">
                            <Button className="bg-[#FF9F00] text-white h-14 w-28 rounded-xl hover:bg-[#FF9F00]">
                                Add to Cart
                            </Button>
                        </Link>
                        <Link href="/checkout">
                            <Button className="bg-[#FB641B] text-white h-14 w-28 rounded-xl hover:bg-[#FB641B]">
                                Buy Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Similar Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {product.similar.map((item, index) => (
                        <Card key={item.id} className="border-transparent rounded-lg shadow-md flex flex-col h-full p-5">
                            <Link href={`/product/${item.id}`}>
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="relative group w-full h-40 flex justify-center items-center overflow-hidden rounded-lg">
                                        <Image
                                            src={item.img}
                                            alt={`Similar Product ${index + 1}`}
                                            layout="fill"
                                            objectFit="contain"
                                            className="cursor-pointer transform transition-transform duration-100 ease-out group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="my-2 flex flex-col justify-between flex-grow">
                                        <h3 className="mt-2 text-sm font-normal">{item.name}</h3>
                                        <p className="flex flex-row justify-start items-center gap-2 mt-3">
                                            <span className="text-lg text-black">{item.discprice}</span>
                                            <span className="text-sm text-gray-600">{item.price}</span>
                                            <span className="text-sm text-green-600 font-semibold">{item.offer}off</span>
                                        </p>
                                    </div>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>


            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Recently Viewed</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-5 justify-center items-center lg:justify-start lg:items-start">
                    {product.recentlyviewed.map((item, index) => (
                        <div key={index} className="flex-none w-48">
                            <div className="relative group w-full h-48 flex justify-center items-center  rounded-t-full rounded-b-full bg-radial-gradient overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={`Similar Product ${index + 1}`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg cursor-pointer transform transition-transform duration-100 ease-out group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <h3 className="mt-2 text-sm font-normal">{item.name}</h3>
                                <p className="flex flex-row justify-start items-center gap-2 mt-3">
                                    <span className="text-sm text-black">{item.discprice}</span>
                                    <span className="text-sm text-gray-600">{item.price}</span>
                                    <span className="text-sm text-green-600 font-semibold">{item.offer}off</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Recommended for You</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {product.recommended.map((item, index) => (
                        <Card key={item.id} className="border-transparent rounded-lg shadow-md flex flex-col h-full p-5">
                            <Link href={`/product/${item.id}`}>
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="relative group w-full h-40 flex justify-center items-center overflow-hidden rounded-lg">
                                        <Image
                                            src={item.img}
                                            alt={`Recommended Product ${index + 1}`}
                                            layout="fill"
                                            objectFit="contain"
                                            className="cursor-pointer transform transition-transform duration-100 ease-out group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="my-2 flex flex-col justify-between flex-grow">
                                        <h3 className="mt-2 text-sm font-normal">{item.name}</h3>
                                        <p className="flex flex-row justify-start items-center gap-2 mt-3">
                                            <span className="text-lg text-black">{item.discprice}</span>
                                            <span className="text-sm text-gray-600">{item.price}</span>
                                            <span className="text-sm text-green-600 font-semibold">{item.offer}off</span>
                                        </p>
                                    </div>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="">
                <RatingsAndReviews
                    averageRating={averageRating}
                    totalRatings={totalRatings}
                    totalReviews={totalReviews}
                    reviews={reviews}
                    onSubmitReview={handleSubmitReview}
                />
            </div>
        </div>
    );
};

export default ProductDetails;
