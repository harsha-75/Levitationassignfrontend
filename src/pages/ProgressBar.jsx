import React from 'react';
import '../progressbar.css'
function ProgressBar({ progress }) {
  return (
    <div className='progress-bar-container'>
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
    </div>
  );
}

export default ProgressBar;
