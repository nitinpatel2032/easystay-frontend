// components/listings/FiltersSidebar.jsx
import React from 'react';

const FiltersSidebar = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFilters((prev) => ({
                ...prev,
                amenities: {
                    ...prev.amenities,
                    [name]: checked,
                },
            }));
        } else {
            setFilters((prev) => ({
                ...prev,
                [name]: type === 'number' ? parseInt(value) || '' : value,
            }));
        }
    };

    return (
        <aside className="w-full sm:w-64 p-4 border rounded-lg shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Filters</h3>

            {/* Price Range */}
            <div>
                <label className="block text-sm font-medium mb-1">Price Range (Rs.)</label>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">Min:</span>
                        <input
                            type="number"
                            name="minPrice"
                            min="0"
                            max={filters.maxPrice || 10000}
                            value={filters.minPrice || ''}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded"
                            placeholder="Min"
                        />
                    </div>
                    <input
                        type="range"
                        name="minPrice"
                        min="0"
                        max={filters.maxPrice || 10000}
                        value={filters.minPrice || 0}
                        onChange={handleChange}
                        className="w-full"
                    />

                    <div className="flex items-center space-x-2">
                        <span className="text-sm">Max:</span>
                        <input
                            type="number"
                            name="maxPrice"
                            min={filters.minPrice || 0}
                            max="10000"
                            value={filters.maxPrice || ''}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded"
                            placeholder="Max"
                        />
                    </div>
                    <input
                        type="range"
                        name="maxPrice"
                        min={filters.minPrice || 0}
                        max="10000"
                        value={filters.maxPrice || 10000}
                        onChange={handleChange}
                        className="w-full"
                    />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                    Showing results between Rs. {filters.minPrice || 0} – Rs. {filters.maxPrice || 10000}
                </p>
            </div>

            {/* Property Type */}
            <div>
                <label className="block text-sm font-medium">Property Type</label>
                <select
                    name="type"
                    value={filters.type || ''}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">All</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="house">House</option>
                </select>
            </div>

            {/* Bedrooms */}
            <div>
                <label className="block text-sm font-medium">Bedrooms</label>
                <select
                    name="bedrooms"
                    value={filters.bedrooms || ''}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Any</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}+</option>
                    ))}
                </select>
            </div>

            {/* Bathrooms */}
            <div>
                <label className="block text-sm font-medium">Bathrooms</label>
                <select
                    name="bathrooms"
                    value={filters.bathrooms || ''}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Any</option>
                    {[1, 2, 3].map((num) => (
                        <option key={num} value={num}>{num}+</option>
                    ))}
                </select>
            </div>

            {/* Minimum Rating */}
            <div>
                <label className="block text-sm font-medium">Minimum Rating</label>
                <select
                    name="rating"
                    value={filters.rating || ''}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Any</option>
                    {[5, 4, 3, 2, 1].map((r) => (
                        <option key={r} value={r}>{r} Stars & Up</option>
                    ))}
                </select>
            </div>

            {/* Amenities */}
            <div>
                <label className="block text-sm font-medium mb-1">Amenities</label>
                {['WiFi', 'Air Conditioning', 'Pool', 'Parking'].map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name={amenity}
                            checked={filters.amenities?.[amenity] || false}
                            onChange={handleChange}
                        />
                        <label>{amenity}</label>
                    </div>
                ))}
            </div>

            {/* Sort By */}
            <div>
                <label className="block text-sm font-medium">Sort By</label>
                <select
                    name="sort"
                    value={filters.sort || ''}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Default</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="ratingHighLow">Rating: High to Low</option>
                </select>
            </div>
        </aside>
    );
};

export default FiltersSidebar;