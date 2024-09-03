import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import BASE_URL from '../constants';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}/api/auth/signup`, {
                name,
                email,
                password,
            });

            if (response.data.success) {
                toast.success("Sign-up successful! Please log in.");
                navigate('/signin'); // Redirect to sign-in page
            } else {
                toast.error(response.data.message || "Sign-up failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            toast.error("An error occurred during sign-up. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-start min-h-screen p-4 mt-10">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <div className="mb-4">
                    <input
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors">
                    Sign Up
                </button>
                <div className="mt-4 text-center">
                    <Link to="/signin" className="text-blue-500 hover:underline">
                        Already have an account? Sign In
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
