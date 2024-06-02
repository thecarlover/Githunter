// src/Components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/fb/a0/ba/fba0ba2c33fde3822352fdee5fce1c9b.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg backdrop-blur-lg max-w-lg mx-auto"
      >
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <p className="mt-4 text-lg text-center">
          Feel free to reach out to me at <a href="mailto:contact@githunter.com" className="text-blue-600 hover:underline">s1mittal@hotmail.com</a>
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Message" rows="5"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
