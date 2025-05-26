import React from 'react';

const HostInfoCard = ({ host = {} }) => {
    const { name = "Unknown Host", avatar, bio = "No bio available." } = host;

    return (
        <div className="border p-4 rounded-lg shadow-md bg-white mt-6">
            <h3 className="text-lg font-semibold mb-2">Meet your host</h3>
            <div className="flex items-center gap-4">
                <img
                    src={avatar || 'https://via.placeholder.com/50'}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-gray-600">{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default HostInfoCard;