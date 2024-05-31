// src/Main.js
import React, { useState } from 'react';
import Header from './Header';
import Repo from './Repo';

const Main = () => {
  const [username, setUsername] = useState('');
  const [searchUsername, setSearchUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchUsername(username);
  };

  return (
    <main
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/fb/a0/ba/fba0ba2c33fde3822352fdee5fce1c9b.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <div className="flex justify-center items-start min-h-screen pt-16">
        <form className="max-w-lg mx-auto flex items-center w-full px-4 mt-10" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
      {searchUsername && <Repo username={searchUsername} />}
    </main>
  );
};

export default Main;
