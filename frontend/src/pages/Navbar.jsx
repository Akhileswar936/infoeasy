import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-green-600 w-full">
      <div className="w-full mx-auto flex justify-between items-center p-3 relative">

 
        <h1 className="text-white font-bold text-xl">
          Infoeasy
        </h1>

        
        <button
          className="text-white text-2xl sm:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul
          className={`
            sm:flex sm:items-center sm:gap-10
            absolute sm:static top-14 left-0 w-full sm:w-auto
            bg-green-500 sm:bg-green-600
            transition-all duration-300 ease-in-out
            ${isOpen ? "block" : "hidden sm:block"}
          `}
        >
          <li>
            <Link
              to="/send"
              onClick={() => setIsOpen(false)}
              className="block text-white px-4 py-2 hover:bg-green-700 rounded"
            >
              Send
            </Link>
          </li>

          <li>
            <Link
              to="/retrieve"
              onClick={() => setIsOpen(false)}
              className="block text-white px-4 py-2 hover:bg-green-700 rounded"
            >
              Retrieve
            </Link>
          </li>

          <li
            onClick={logout}
            className="block text-white px-4 py-2 cursor-pointer hover:bg-green-700 rounded"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && logout()}
          >
            Logout
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
