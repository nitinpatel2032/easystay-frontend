// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ListingDetail from './pages/ListingDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddListing from './pages/AddListing';
import { SearchProvider } from './context/SearchContext';

function App() {
    return (
        <Router>
            <SearchProvider>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow pt-16">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/search" element={<SearchResults />} />
                            <Route path="/listing/:id" element={<ListingDetail />} />
                            <Route path="/add-listing" element={<AddListing />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </SearchProvider>
        </Router>
    );
}

export default App;