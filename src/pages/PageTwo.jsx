import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setStep2 } from '../slices/formSlice';

function PageTwo() {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 3) {
      toast.error('You can only upload up to 3 files.');
      e.target.value = null; // Clear the input
      return;
    }
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    dispatch(setStep2(files));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '66%' }}></div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Step 2: File Upload</h2>
        <form>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mb-4 p-3 border rounded"
            disabled={files.length >= 3} // Disable input if 3 files are selected
          />
          <div className="mb-4">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  ✗
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Link to="/pageone" className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Previous</Link>
            <Link to="/pagethree" onClick={handleSubmit} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Next</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PageTwo;
