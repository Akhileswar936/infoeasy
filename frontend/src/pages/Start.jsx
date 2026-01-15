import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-500 to-violet-300 px-4 text-center capitalize">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 animate-fade-in">
          Welcome to InfoEasy
        </h1>

        <p className="text-lg sm:text-xl text-violet-100 mb-6">
          Easy way to share information securely
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/register">
            <button className="w-40 bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition duration-300">
              Register
            </button>
          </Link>

          <Link to="/login">
            <button className="w-40 bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
