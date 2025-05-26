// components/property/BookingForm.jsx
import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const inputClass = 'px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500';

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

const BookingForm = ({ prefill = {} }) => {
    const [checkIn, setCheckIn] = useState(prefill.checkIn ? new Date(prefill.checkIn) : null);
    const [checkOut, setCheckOut] = useState(prefill.checkOut ? new Date(prefill.checkOut) : null);
    const [guests, setGuests] = useState(prefill.guests || 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking:', { checkIn, checkOut, guests });
        alert('Booking request submitted!');
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Book this stay</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className='flex flex-row space-between gap-6'>
                    <div>
                        <label className="text-sm font-medium mr-2">Check-in</label>
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
                    <div>
                        <label className="text-sm font-medium mr-2">Check-out</label>
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
                    <div>
                        <label className="text-sm font-medium mr-2">Guests</label>
                        <input
                            type="number"
                            min={1}
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="border px-2 py-1 rounded"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                            Reserve
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;