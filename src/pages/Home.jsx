import React, { useState, useEffect } from 'react';
import SearchBar from '../components/listings/SearchBar';
import ListingsGrid from '../components/listings/ListingsGrid';

const mockListings = [
    {
        id: 1,
        image: 'https://source.unsplash.com/400x300/?cabin',
        title: 'Cozy Cabin in the Woods',
        location: 'New York, USA',
        price: 550,
        rating: 4.2,
    },
    {
        id: 2,
        image: 'https://source.unsplash.com/400x300/?apartment',
        title: 'Stylish Apartment in the City',
        location: 'Abc, Brazil',
        price: 1150,
        rating: 4.1,
    },
    {
        id: 3,
        image: 'https://source.unsplash.com/400x300/?cabin',
        title: 'Cozy Cabin in the Woods',
        location: 'Dubai, SA',
        price: 960,
        rating: 4.3,
    },
    {
        id: 4,
        image: 'https://source.unsplash.com/400x300/?apartment',
        title: 'Stylish Apartment in the City',
        location: 'Delhi, India',
        price: 1150,
        rating: 4.6,
    }, {
        id: 5,
        image: 'https://source.unsplash.com/400x300/?cabin',
        title: 'Cozy Cabin in the Woods',
        location: 'London, UK',
        price: 600,
        rating: 4.0,
    },
    {
        id: 6,
        image: 'https://source.unsplash.com/400x300/?apartment',
        title: 'Stylish Apartment in the City',
        location: 'Tokyo, Japan',
        price: 750,
        rating: 4.5,
    }, {
        id: 7,
        image: 'https://source.unsplash.com/400x300/?cabin',
        title: 'Cozy Cabin in the Woods',
        location: 'Colorado, USA',
        price: 999,
        rating: 3.4,
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/400x300/?apartment',
        title: 'Stylish Apartment in the City',
        location: 'Berlin, Germany',
        price: 590,
        rating: 3.9,
    },
];

const Home = () => {
    const [showSearch, setShowSearch] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowSearch(window.scrollY < 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="p-6 space-y-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Find your perfect stay</h1>
                <p className="text-gray-600">Book unique homes and experiences all over the world.</p>
            </div>

            {showSearch && <SearchBar />}

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4 ml-6">Featured Stays</h2>
                <ListingsGrid listings={mockListings} />
            </div>
        </div>
    );
};

export default Home;