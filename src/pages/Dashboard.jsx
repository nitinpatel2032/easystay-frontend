// pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-semibold mb-2">Your Listings</h2>
                    <p className="text-gray-600">Manage your active property listings.</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-semibold mb-2">Your Bookings</h2>
                    <p className="text-gray-600">Track bookings made by guests.</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-semibold mb-2">Favorites</h2>
                    <p className="text-gray-600">View properties you've liked.</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-semibold mb-2">Profile</h2>
                    <p className="text-gray-600">Update your personal information.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;