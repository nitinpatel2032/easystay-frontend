import React from 'react';
import ListingCard from './ListingCard';

const ListingsGrid = ({ listings }) => (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
        ))}
    </div>
);

export default ListingsGrid;