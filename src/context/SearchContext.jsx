// src/context/SearchContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [guests, setGuests] = useState(1);

    return (
        <SearchContext.Provider value={{
            location, setLocation,
            checkIn, setCheckIn,
            checkOut, setCheckOut,
            guests, setGuests
        }}>
            {children}
        </SearchContext.Provider>
    );
};