import React, { useState } from 'react';
import logo from './assets/chat-2.png';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import FeedBackForm from './feedBackForm';

function Header() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr] place-items-center">
        <div className="flex items-center space-0-1">
          <img src={logo} alt="logo" />
          <span className="text-x1 font-semibold">FeedbackHub</span>
        </div>
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr]">
          <div>Home</div>
          <div>Submit Feedback</div>
          <div>Admin</div>
          <div>Developer</div>
        </div>
      </div>

      <div className="grid grid-rows-3 place-items-center bg-gray-50">
        <div className="text-semibold text-4xl mb-1">
          Feedback Management System
        </div>
        <div className="text-center bg-gray-50">
          <p className="text-2xl">
            Submit feedback, track progress and collaborate with our development
            team to <br />
            improve your experience.
          </p>

          <div className="flex bg-gray-50 mt-4 justify-center space-x-4">
            {!showForm ? (
              <button
                className="bg-black hover:bg-slate-900 text-white w-40 py-2 rounded-md border border-gray-100 h"
                onClick={toggleForm}
              >
                Submit Feedback
              </button>
            ) : (
              <div className="w-full max-w-xl">
                <FeedBackForm />
                <button
                  className="mt-4 bg-gray-300 text-black py-1 px-3 rounded"
                  onClick={toggleForm}
                >
                  Cancel
                </button>
              </div>
            )}
 </div>
            <button className="bg-white text-black w-35 rounded-md border border-black-300">
              View Status
            </button>
         
        </div>
      </div>
    </div>
  );
}

export default Header