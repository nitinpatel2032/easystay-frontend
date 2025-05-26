import { Link, useLocation } from 'react-router-dom';

const ListingCard = ({ id, image, title, location, price, rating }) => {
    const search = new URLSearchParams(window.location.search); // grab existing search params

    const queryString = search.toString(); // convert back to query string

    return (
        <Link to={`/listing/${id}?${queryString}`} className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{title}</h3>
                <p className="text-gray-600 text-sm">{location}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-red-500 font-bold">Rs. {price}/night</span>
                    <span className="text-yellow-500">⭐ {rating}</span>
                </div>
            </div>
        </Link>
    );
};
export default ListingCard;