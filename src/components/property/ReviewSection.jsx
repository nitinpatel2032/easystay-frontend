// components/property/ReviewSection.jsx
import React from 'react';

const reviews = [
    {
        id: 1,
        name: 'Alice',
        rating: 4.6,
        comment: 'Amazing place! Super clean and well-located.',
    },
    {
        id: 2,
        name: 'Bob',
        rating: 3.9,
        comment: 'Very nice stay, a bit noisy at night though.',
    },
];

const ReviewSection = () => {
    return (
        <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Reviews</h3>
            {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet.</p>
            ) : (
                <ul className="space-y-4">
                    {reviews.map((review) => (
                        <li key={review.id} className="border-b pb-4">
                            <div className="flex justify-between items-center mb-1">
                                <p className="font-semibold">{review.name}</p>
                                <p className="text-yellow-500">⭐ {review.rating}</p>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewSection;