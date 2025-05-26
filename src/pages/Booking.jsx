import { useParams } from "react-router-dom";

const Booking = () => {
    const { id } = useParams();

    return (
        <div className="p-10 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Booking ID: {id}</h1>
            <p className="mb-4">This is a mock booking page for listing #{id}.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Confirm Booking</button>
        </div>
    );
};

export default Booking;