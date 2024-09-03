import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStep1 } from '../slices/formSlice';

function PageOne() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
    },
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const handleSubmit = () => {
    dispatch(setStep1(formData));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '33%' }}></div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Step 1: Basic Details</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 border rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="line1"
              value={formData.address.line1}
              onChange={handleAddressChange}
              placeholder="Address Line 1"
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="line2"
              value={formData.address.line2}
              onChange={handleAddressChange}
              placeholder="Address Line 2"
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="city"
              value={formData.address.city}
              onChange={handleAddressChange}
              placeholder="City"
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="state"
              value={formData.address.state}
              onChange={handleAddressChange}
              placeholder="State"
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="pincode"
              value={formData.address.pincode}
              onChange={handleAddressChange}
              placeholder="Pincode"
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="country"
              value={formData.address.country}
              onChange={handleAddressChange}
              placeholder="Country"
              className="p-3 border rounded"
            />
          </div>
          <div className="flex justify-between mt-6">
            <Link to="/" className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Previous</Link>
            <Link to="/pagetwo" onClick={handleSubmit} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Next</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PageOne;
