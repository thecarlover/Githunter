import React, { useState, useEffect } from 'react';
import Header from './Header';
import Repo from './Repo';
import { useAuth } from '../contexts/authContext/index'; // Adjust path as per your project structure
import { fetchUserRepos } from '../githubApi'; // Import fetchUserRepos function from githubApi

const Main = () => {
  const [username, setUsername] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false); // State to control history modal visibility
  const { currentUser } = useAuth(); // Destructure currentUser from useAuth()

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchUsername(username);
    addToSearchHistory(username); // Add username to search history
  };

  // Function to add username to search history
  const addToSearchHistory = (username) => {
    setSearchHistory(prevHistory => [...prevHistory, username]);
  };

  // Function to toggle history modal visibility
  const toggleHistoryModal = () => {
    setShowHistoryModal(!showHistoryModal);
  };

  // Effect to load search history from localStorage on component mount
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(storedHistory);
  }, []);

  // Effect to update localStorage whenever searchHistory changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  return (
    <main
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/fb/a0/ba/fba0ba2c33fde3822352fdee5fce1c9b.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <div className="flex justify-center items-start pt-16">
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
      <div className="mt-10">
        {currentUser && ( // Check if currentUser is truthy (i.e., logged in or registered)
          <div>
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleHistoryModal}
                className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-8 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                History
              </button>
            </div>
            {showHistoryModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg max-w-lg">
                  <h2 className="text-2xl font-bold mb-4">Search History</h2>
                  {searchHistory.length > 0 ? (
                    <ul className="divide-y divide-gray-300">
                      {searchHistory.map((user, index) => (
                        <li key={index} className="py-2">
                          <span className="text-gray-600">{user}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No search history available.</p>
                  )}
                  <div className="mt-4 text-right">
                    <button
                      onClick={toggleHistoryModal}
                      className="text-gray-500 hover:text-gray-600 focus:outline-none"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {searchUsername && <Repo username={searchUsername} />}
      </div>
    </main>
  );
};

export default Main;
