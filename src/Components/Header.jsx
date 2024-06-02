// src/Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 py-6 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">GitHunter</h1>
        <nav className="flex items-center">
          <Link to="/" className="text-gray-300 hover:text-white mr-6 transition duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white mr-6 transition duration-300 ease-in-out">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
