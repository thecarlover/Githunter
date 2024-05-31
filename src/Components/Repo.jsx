// src/Repo.js
import React, { useState, useEffect } from 'react';
import { fetchUserRepos } from './githubApi';

const Repo = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserRepos(username);
        setRepos(data);
      } catch (error) {
        setError('Error fetching repos');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">{error}</div>;
  }

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Repositories of {username}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white p-4 rounded-lg shadow-md border border-blue-500">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold mb-2 text-blue-600 hover:underline">
              {repo.name}
            </a>
            <p className="text-gray-600 mb-2">{repo.description}</p>
            <div className="flex items-center justify-between text-gray-700 text-sm">
              <span>{repo.language || 'N/A'}</span>
              <span>{repo.private ? 'Private' : 'Public'}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Repo;
