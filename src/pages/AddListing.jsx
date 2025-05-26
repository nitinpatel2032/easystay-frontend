import { useState } from "react";

const AddListing = () => {
    const [form, setForm] = useState({ title: "", location: "", price: "", description: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        alert("Listing added (not really, mock only).");
    };

    return (
        <div className="max-w-lg mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Add New Listing</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {["title", "location", "price", "description"].map(field => (
                    <input key={field} name={field} placeholder={field} onChange={handleChange} className="w-full p-2 border rounded" />
                ))}
                <button className="bg-red-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default AddListing;