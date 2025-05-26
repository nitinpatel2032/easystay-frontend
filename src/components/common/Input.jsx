import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, className = '' }) => (
    <div className="flex flex-col">
        {label && <label className="mb-1 text-sm text-gray-700">{label}</label>}
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`border border-gray-300 rounded px-4 py-2 ${className}`}
        />
    </div>
);

export default Input;
