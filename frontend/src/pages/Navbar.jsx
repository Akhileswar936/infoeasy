import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  };

  return (
    <nav className="bg-green-600 flex justify-around items-center p-2 relative">
      <div>
        <h1 className="text-white font-bold text-xl">Informate</h1>
      </div>

      {/* Hamburger button visible only on small screens */}
      <button
        className="text-white sm:hidden"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Navigation links, responsive layout */}
      <ul
        className={`
          flex flex-col sm:flex-row sm:gap-10 absolute sm:static bg-green-500 sm:bg-green-600 w-full left-0 sm:w-auto transition-all duration-300 ease-in-out
          ${isOpen ? "top-12" : "top-[-200px]"}
        `}
      >
        <li className="mx-1">
          <Link to="/send" className="text-white block px-3 py-2 hover:bg-green-700 rounded">Send</Link>
        </li>
        <li className="mx-1">
          <Link to="/retrieve" className="text-white block px-3 py-2 hover:bg-green-700 rounded">Retrieve</Link>
        </li>
        <li
          className="mx-1 cursor-pointer text-white px-3 py-2 hover:bg-green-700 rounded"
          onClick={logout}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') logout(); }}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
