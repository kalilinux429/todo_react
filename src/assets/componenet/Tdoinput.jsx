import React, { useState } from 'react';
import '../componenet/input.css';

const Tdoinput = (props) => {
  const [inputext, setinputText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleKeyEnterPress = (e) => {
    if (e.key === 'Enter') {
      if (inputext.trim() === '') {
        setShowAlert(true); // Show custom alert
      } else {
        props.addlist(inputext);
        setinputText('');
      }
    }
  };

  const handleClick = () => {
    if (inputext.trim() === '') {
      setShowAlert(true); // Show custom alert
    } else {
      props.addlist(inputext);
      setinputText('');
    }
  };

  const closeAlert = () => {
    setShowAlert(false); // Close custom alert
  };

  return (
    <div className='container'>
      <div className='input-wrapper'>
        <input
          type="text"
          className="input box-todo"
          placeholder='Add task'
          value={inputext}
          onChange={e => setinputText(e.target.value)}
          onKeyDown={handleKeyEnterPress}
        />
        <button
          className='btn'
          onClick={handleClick}
        >
          Add Task
        </button>
        <br />
      </div>

      {/* Custom Alert Box */}
      {showAlert && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <span>Input cannot be empty!</span>
            <button onClick={closeAlert} className="custom-alert-close">OK</button>
          </div>
        </div>
      )}

      {/* CSS for Custom Alert Box */}
      <style>
        {`
          .custom-alert {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9999;
          }

          .custom-alert-content {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            text-align: center;
          }

          .custom-alert-close {
            background: #007bff;
            border: none;
            color: #fff;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          .custom-alert-close:hover {
            background: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default Tdoinput;
