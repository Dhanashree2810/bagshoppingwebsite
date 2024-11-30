'use client';
import { CiStar } from 'react-icons/ci';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type Review = {
    user: string;
    rating: number;
    date: string;
    reviewText: string;
};

type ProductReviewsProps = {
    averageRating: number;
    totalRatings: number;
    totalReviews: number;
    reviews: Review[];
    onSubmitReview: (newReview: Review) => void;
};

const RatingsAndReviews  = ({ averageRating, totalRatings, totalReviews, reviews, onSubmitReview }:ProductReviewsProps) => {
    const [userName, setUserName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (userName && reviewText && rating > 0) {
            const newReview: Review = {
                user: userName,
                rating,
                date: new Date().toLocaleDateString(),
                reviewText,
            };

            onSubmitReview(newReview);
            setUserName('');
            setReviewText('');
            setRating(0);
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handleEvent = () => {
        console.log("Dialog opened");
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Ratings & Reviews</h2>

            <div className="flex items-center mb-4">
                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                        <CiStar
                            key={index}
                            className={`h-6 w-6 ${index < Math.floor(averageRating)
                                ? 'text-yellow-500'
                                : 'text-gray-300'
                                }`}
                        />
                    ))}
                </div>
                <span className="ml-2 text-lg font-semibold">{averageRating} ({totalRatings} ratings)</span>
                <span className="ml-4 text-sm text-gray-600">({totalReviews} Reviews)</span>
            </div>

            <div>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="border-b pb-4 mb-4">
                            <div className="flex items-center mb-2">
                                <span className="font-medium text-lg">{review.user}</span>
                                <div className="flex items-center ml-4">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <CiStar
                                            key={starIndex}
                                            className={`h-5 w-5 ${starIndex < Math.floor(review.rating)
                                                ? 'text-yellow-500'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">{review.date}</p>
                            <p className="mt-1 text-gray-700 text-sm">{review.reviewText}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                )}
            </div>

            <Dialog>
                <DialogTrigger asChild>
                    <div
                        className="w-fit p-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        onClick={handleEvent}
                    >
                        Write a Review
                    </div>
                </DialogTrigger>

                <DialogContent>
                    <DialogTitle className="text-xl font-semibold">Write a Review</DialogTitle>
                    <DialogDescription className="mb-4 text-sm text-gray-500">
                        Please provide your review below.
                    </DialogDescription>

                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <Input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Review</label>
                            <textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                required
                                rows={4}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Rating</label>
                            <div className="flex items-center space-x-2">
                                {[...Array(5)].map((_, index) => (
                                    <CiStar
                                        key={index}
                                        onClick={() => setRating(index + 1)}
                                        className={`h-6 w-6 cursor-pointer ${index < rating ? "text-yellow-500" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="w-full mt-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500"
                        >
                            Submit Review
                        </Button>
                    </form>

                    <DialogClose className="mt-4 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600">
                        Close
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RatingsAndReviews;
