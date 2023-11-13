
import React, { useState } from 'react';
import { signInWithGoogle } from '../firebase'; 

const AuthModal = ({ isOpen, onClose }) => {
  // Local state for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in with email and password
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Sign up or Log in</h3>
          <div className="mt-2 px-7 py-3">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="items-center px-7 py-3">
            <p className="text-xs">OR</p>
            <button
              className="w-full px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-700"
              onClick={signInWithGoogle}
            >
              <img src="/path/to/google-icon.png" alt="Google" className="inline w-5 h-5 mr-2" /> Sign in with Google
            </button>
          </div>
          <div className="items-center px-7 py-3">
            <p className="text-xs">
              I accept Trulia's <a href="#" className="text-blue-600">Terms of Use</a> and <a href="#" className="text-blue-600">Privacy Policy</a>.
            </p>
          </div>
          <div className="items-center px-7 py-3">
            <button onClick={onClose} className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
