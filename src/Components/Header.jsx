import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 py-6 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">GitHunter</h1>
        <nav className="flex items-center">
          <a href="#" className="text-gray-300 hover:text-white mr-6 transition duration-300 ease-in-out">Home</a>
          <a href="#" className="text-gray-300 hover:text-white mr-6 transition duration-300 ease-in-out">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
