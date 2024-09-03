import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStep3, submitForm } from '../slices/formSlice';

function PageThree() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch();
  const { step1, step2 } = useSelector((state) => state.form);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = () => {
    const formData = {
      step1,
      step2: step2.map(file => ({
        fileUrl: URL.createObjectURL(file),
        fileType: file.type,
      })),
      step3: selectedOptions,
      isCompleted: true,
    };
    dispatch(submitForm(formData));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '100%' }}></div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Step 3: Multi-Field Select</h2>
        <form>
          <div className="mb-4">
            {options.map((option, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Link to="/pagetwo" className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Previous</Link>
            <button
              type="button"
              onClick={handleSubmit}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PageThree;
