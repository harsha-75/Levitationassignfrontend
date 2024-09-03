import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../constants";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
     const navigate=useNavigate()
     const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default behavior at the beginning
    
        // Optional: Validate input
        if (email.trim() === "" || password.trim() === "") {
            toast.error("All fields are required");
            return;
        }
    
        try {
            const response = await axios.post(`${BASE_URL}/api/auth/login`, {
                email,
                password
            });
    
            console.log("Response Data:", response.data); // Log the response data
    
            if (response.data.success) {
                localStorage.setItem("authtoken", response.data.token);
                toast.success("Login successful!");
                navigate("/pageone");
            } else {
                toast.error(response.data.message || "Invalid credentials");
            }
        } catch (error) {
            // console.error("Error:", error.response ? error.response.data : error.message); 
            // Better error logging
            console.log(error.response)
            toast.error(error.response.data.message);
        }
    };
    

  return (
    <div className="flex justify-center items-start min-h-screen p-4 mt-10">
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
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
        Sign In
      </button>
      <div className="mt-4 text-center">
        <Link to="/signup" className="text-blue-500 hover:underline">
          Don't have an account? Sign Up
        </Link>
      </div>
    </form>
  </div>
  );
}

export default SignIn;
