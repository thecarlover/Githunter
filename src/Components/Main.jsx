import React from 'react';
import Header from './Header';

const Main = () => {
  return (
    <main className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1716668595976-604426108db1?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <Header/>
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">Search for GitHub Repositories</h2>
          <form className="max-w-lg mx-auto flex items-center">
            <input
              type="text"
              placeholder="Enter repository name..."
              className="w-full py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </form>
          <p className="mt-6 text-gray-600 text-center">Start by typing the name of a repository you want to find.</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
