// src/Components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useAuth } from '../contexts/authContext/index'; // Import useAuth hook from AuthContext
import { doSignOut } from '../firebase/auth'; // Import doSignOut function from firebase auth module

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth(); // Access currentUser from AuthContext

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await doSignOut(); // Call Firebase sign-out function
      window.location.href = '/login'; // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out:', error.message);
      // Handle any errors here, such as displaying an error message
    }
  };

  return (
    <header className="bg-gray-900 py-6 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">GitHunter</h1>
        <nav className="hidden md:flex items-center">
          <Link to="/" className="text-gray-300 hover:text-white mr-6 transition duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white mr-6 transition duration-300 ease-in-out">About</Link>
          <Link to="/popular" className="text-gray-300 hover:text-white mr-6 transition duration-300 ease-in-out">Popular</Link>
          {currentUser ? (
            <button onClick={handleLogout} className="text-gray-300 hover:text-white border border-gray-300 rounded-full py-2 px-4 transition duration-300 ease-in-out">Logout</button>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white mr-4 transition duration-300 ease-in-out">Login</Link>
              <Link to="/register" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Sign Up</Link>
            </>
          )}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center">
          <Link to="/" className="text-gray-300 hover:text-white py-2 transition duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white py-2 transition duration-300 ease-in-out">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white py-2 transition duration-300 ease-in-out">Contact</Link>
          <Link to="/popular" className="text-gray-300 hover:text-white py-2 transition duration-300 ease-in-out">Popular</Link>
          {currentUser ? (
            <button onClick={handleLogout} className="text-gray-300 hover:text-white border border-gray-300 rounded-full py-2 px-4 transition duration-300 ease-in-out">Logout</button>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white py-2 transition duration-300 ease-in-out">Login</Link>
              <Link to="/register" className="text-gray-300 hover:text-white py-2 transition duration-300 ease-in-out">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
