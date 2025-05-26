import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import BookingForm from './BookingForm';
import HostInfoCard from './HostInfoCard';
import ReviewSection from './ReviewSection';

const mockListings = [
    {
        id: "1",
        title: "Cozy Cottage",
        location: "Shimla, India",
        description: "A beautiful cottage with mountain views and cozy interiors.",
        image: "https://source.unsplash.com/800x500/?cottage",
        host: {
            name: "Priya Sharma",
            avatar: "",
            bio: "Superhost · Nature Lover · Local Expert",
        },
        reviews: [],
    },
    {
        id: "2",
        title: "Beachfront Villa",
        location: "Goa, India",
        description: "Wake up to the sound of waves in this stunning beachfront property.",
        image: "https://source.unsplash.com/800x500/?beach-villa",
        host: {
            name: "Ravi Mehta",
            avatar: "",
            bio: "Verified Host · Surfer · Friendly Local",
        },
        reviews: [],
    },
    {
        id: "3",
        title: "Cozy Cottage",
        location: "Shimla, India",
        description: "A beautiful cottage with mountain views and cozy interiors.",
        image: "https://source.unsplash.com/800x500/?cottage",
        host: {
            name: "Priya Sharma",
            avatar: "",
            bio: "Superhost · Nature Lover · Local Expert",
        },
        reviews: [],
    },
    {
        id: "4",
        title: "Beachfront Villa",
        location: "Goa, India",
        description: "Wake up to the sound of waves in this stunning beachfront property.",
        image: "https://source.unsplash.com/800x500/?beach-villa",
        host: {
            name: "Ravi Mehta",
            avatar: "",
            bio: "Verified Host · Surfer · Friendly Local",
        },
        reviews: [],
    },
    {
        id: "5",
        title: "Cozy Cottage",
        location: "Shimla, India",
        description: "A beautiful cottage with mountain views and cozy interiors.",
        image: "https://source.unsplash.com/800x500/?cottage",
        host: {
            name: "Priya Sharma",
            avatar: "",
            bio: "Superhost · Nature Lover · Local Expert",
        },
        reviews: [],
    },
    {
        id: "6",
        title: "Beachfront Villa",
        location: "Goa, India",
        description: "Wake up to the sound of waves in this stunning beachfront property.",
        image: "https://source.unsplash.com/800x500/?beach-villa",
        host: {
            name: "Ravi Mehta",
            avatar: "",
            bio: "Verified Host · Surfer · Friendly Local",
        },
        reviews: [],
    },
    {
        id: "7",
        title: "Cozy Cottage",
        location: "Shimla, India",
        description: "A beautiful cottage with mountain views and cozy interiors.",
        image: "https://source.unsplash.com/800x500/?cottage",
        host: {
            name: "Priya Sharma",
            avatar: "",
            bio: "Superhost · Nature Lover · Local Expert",
        },
        reviews: [],
    },
    {
        id: "8",
        title: "Beachfront Villa",
        location: "Goa, India",
        description: "Wake up to the sound of waves in this stunning beachfront property.",
        image: "https://source.unsplash.com/800x500/?beach-villa",
        host: {
            name: "Ravi Mehta",
            avatar: "",
            bio: "Verified Host · Surfer · Friendly Local",
        },
        reviews: [],
    },
];

const ListingPage = () => {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const listing = mockListings.find(item => item.id === id);

    const prefillData = {
        checkIn: searchParams.get('checkIn') || '',
        checkOut: searchParams.get('checkOut') || '',
        guests: parseInt(searchParams.get('guests') || '1', 10),
    };

    if (!listing) return <p className="text-center mt-10">Listing not found</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">
            <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-80 object-cover rounded-lg"
            />
            <div>
                <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
                <p className="text-gray-600 mb-4">{listing.location}</p>
                <p className="text-gray-700 mb-6">{listing.description}</p>
                <BookingForm listingId={id} prefill={prefillData} />
                <HostInfoCard host={listing.host} />
                <ReviewSection reviews={listing.reviews} />
            </div>
        </div>
    );
};

export default ListingPage;