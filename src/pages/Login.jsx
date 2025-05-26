import React, { useState } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../context/UserContext';

function Login() {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const { email, sub: googleId, name: username } = decoded;

            const res = await axios.post("http://localhost:8080/api/v1/users/login", {
                email,
                googleId,
                username
            },
                { withCredentials: true });

            if (res.data.status === 'success') {
                setUser(res.data.user);
                navigate('/');
            }
        } catch (error) {
            console.error("Google login failed:", error);
        }
    };

    const handleError = () => {
        console.log("Login Failed");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/users/login", { email, password }, { withCredentials: true });
            if (res.data.status === 'success') {
                setUser(res.data.user);
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex min-h-screen py-10 items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Log in to Airbnb</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Log in
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                {/* <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                    Continue with Google
                </button> */}

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account? <Link to="/sign-up" className="text-red-500 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
export default Login;