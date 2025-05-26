// pages/SearchResults.jsx
import React, { useState } from 'react';
import FiltersSidebar from '../components/listings/FiltersSidebar';
import ListingsGrid from '../components/listings/ListingsGrid';
import MapView from '../components/listings/MapView';

const SearchResults = () => {
    const [filters, setFilters] = useState({});

    const listings = [
        { id: 1, image: 'https://source.unsplash.com/400x300/?apartment', title: 'Modern Loft', location: 'New York', price: 550, rating: 4.2 },
        { id: 2, image: 'https://source.unsplash.com/400x300/?villa', title: 'Luxury Villa', location: 'Brazil', price: 1150, rating: 4.1 },
        { id: 3, image: 'https://source.unsplash.com/400x300/?apartment', title: 'Modern Loft', location: 'SA', price: 960, rating: 4.3 },
        { id: 4, image: 'https://source.unsplash.com/400x300/?villa', title: 'Luxury Villa', location: 'India', price: 1150, rating: 4.6 },
        { id: 5, image: 'https://source.unsplash.com/400x300/?apartment', title: 'Modern Loft', location: 'UK', price: 600, rating: 4.0 },
        { id: 6, image: 'https://source.unsplash.com/400x300/?villa', title: 'Luxury Villa', location: 'Japan', price: 750, rating: 4.5 },
        { id: 7, image: 'https://source.unsplash.com/400x300/?apartment', title: 'Modern Loft', location: 'USA', price: 999, rating: 3.4 },
        { id: 8, image: 'https://source.unsplash.com/400x300/?villa', title: 'Luxury Villa', location: 'Germany', price: 590, rating: 3.9 }
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6">
            <FiltersSidebar filters={filters} setFilters={setFilters} />
            <div className="flex-1 space-y-6">
                <ListingsGrid listings={listings} />
                <MapView />
            </div>
        </div>
    );
};

export default SearchResults;