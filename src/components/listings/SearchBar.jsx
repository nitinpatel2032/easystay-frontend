import React, { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearch } from '../../context/SearchContext';

// Shared input styles
const inputClass = 'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500';

const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <input
        type="text"
        readOnly
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder={placeholder}
        className={inputClass}
    />
));

const SearchBar = ({ compact = false }) => {
    const {
        location, setLocation,
        checkIn, setCheckIn,
        checkOut, setCheckOut,
        guests, setGuests
    } = useSearch();

    const navigate = useNavigate();

    const handleSearch = () => {
        const params = new URLSearchParams({
            location,
            guests,
            checkIn: checkIn ? new Date(checkIn).toLocaleDateString('en-CA') : '',
            checkOut: checkOut ? new Date(checkOut).toLocaleDateString('en-CA') : '',
        });
        navigate(`/search?${params.toString()}`);
    };

    return (
        <div className={`grid ${compact ? 'grid-cols-1 md:grid-cols-5 gap-2' : 'grid-cols-1 sm:grid-cols-5 gap-4'} 
      ${compact ? 'w-full' : 'max-w-5xl mx-auto'} bg-white items-center`}>

            {/* Location */}
            <input
                type="text"
                placeholder="Where to?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={inputClass}
            />

            {/* Check-in */}
            <div className='z-1'>
                <DatePicker
                    selected={checkIn}
                    onChange={setCheckIn}
                    placeholderText="Check-in"
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    dateFormat="dd/MM/yyyy"
                    customInput={<CustomInput />}
                />
            </div>

            {/* Check-out */}
            <div className='z-1'>
                <DatePicker
                    selected={checkOut}
                    onChange={setCheckOut}
                    placeholderText="Check-out"
                    selectsEnd
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={checkIn}
                    dateFormat="dd/MM/yyyy"
                    customInput={<CustomInput />}
                />
            </div>

            {/* Guests */}
            <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className={inputClass}
            />

            {/* Search */}
            <button
                type="button"
                onClick={handleSearch}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
