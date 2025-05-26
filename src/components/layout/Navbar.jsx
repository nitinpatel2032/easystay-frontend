import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import axios from 'axios';
import { ChevronUp } from 'lucide-react';
import SearchBar from '../listings/SearchBar';

const Navbar = () => {
    const { user, setUser } = useUser();
    const [showProfileDetails, setShowProfileDetails] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showToTop, setShowToTop] = useState(false);
    const [showSearchInNavbar, setShowSearchInNavbar] = useState(false);
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/api/v1/users/logout', {}, { withCredentials: true });
        } catch (err) {
            console.error('Logout failed:', err);
        } finally {
            setUser(null);
        }
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollingUp = currentScrollY < lastScrollY;

        setShowNavbar(scrollingUp);
        setShowSearchInNavbar(currentScrollY > 100 && location.pathname === '/');
        setShowToTop(currentScrollY > 300);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, location]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center transition-transform duration-300 z-50 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex justify-between items-center w-full md:w-auto">
                    <Link to="/" className="text-xl font-bold text-red-500">StayEasy</Link>
                </div>

                {showSearchInNavbar && (
                    <div className="w-full md:w-1/2">
                        <SearchBar compact />
                    </div>
                )}

                <div className="space-x-4 relative mt-2 md:mt-0">
                    {!user ? (
                        <>
                            <Link to="/login" className="text-gray-700 hover:text-red-500">Login</Link>
                            <Link to="/register" className="text-gray-700 hover:text-red-500">Register</Link>
                        </>
                    ) : (
                        <div
                            className="relative inline-block"
                            onMouseEnter={() => setShowProfileDetails(true)}
                            onMouseLeave={() => setShowProfileDetails(false)}
                        >
                            <span className="text-gray-700 hover:text-red-500 cursor-pointer">Profile</span>
                            {showProfileDetails && (
                                <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-10">
                                    <p className="text-sm text-gray-800">{user.username}</p>
                                    <p className="text-sm text-gray-800">{user.email}</p>
                                    <Link to="/dashboard" className="text-sm text-red-500 hover:underline inline-block">Dashboard</Link>
                                    <div><button onClick={handleLogout} className="text-sm text-red-500 hover:underline inline-block">Logout</button></div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            {showToTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-5 right-5 p-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all z-40"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={20} />
                </button>
            )}
        </>
    );
};

export default Navbar;