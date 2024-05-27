import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <img src="/path-to-your-logo.png" alt="GitHunter Logo" className="h-10" />
          <p>GitHunter</p>
        </div>
        <div className="mb-4">
          <a href="/about" className="mx-2 hover:text-gray-400 transition duration-300">About Us</a>
          <a href="/contact" className="mx-2 hover:text-gray-400 transition duration-300">Contact</a>
          <a href="/privacy" className="mx-2 hover:text-gray-400 transition duration-300">Privacy Policy</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
