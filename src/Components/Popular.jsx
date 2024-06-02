import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchPopularRepos, fetchPopularDevelopers } from '../githubApi';

const Popular = () => {
  const [repos, setRepos] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('all');

  useEffect(() => {
    const fetchPopularData = async () => {
      setLoading(true);
      setError(null);
      try {
        const repoData = await fetchPopularRepos(language);
        const devData = await fetchPopularDevelopers(language);
        
        setRepos(repoData.items || []);
        setDevelopers(devData.items || []);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularData();
  }, [language]);

  const truncateDescription = (description, maxLength) => {
    if (!description) return '';
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Repos and Developers</h2>
      <div className="flex justify-center mb-6">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="all">All Languages</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="ruby">Ruby</option>
          <option value="php">PHP</option>
          <option value="c++">C++</option>
          <option value="c#">C#</option>
          <option value="go">Go</option>
        </select>
      </div>
      
      {loading ? (
        <SkeletonTheme color="#E0E0E0" highlightColor="#F0F0F0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md border bg-white">
                <Skeleton height={30} width={`80%`} />
                <Skeleton count={3} />
              </div>
            ))}
          </div>
        </SkeletonTheme>
      ) : error ? (
        <div className="text-center mt-4 text-red-500">{error}</div>
      ) : (
        <>
          <div>
            <h3 className="text-2xl font-semibold text-center mb-4">Popular Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <div key={repo.id} className="p-4 rounded-lg shadow-md border bg-white">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold mb-2 text-blue-600 hover:underline">
                    {repo.name}
                  </a>
                  <p className="text-gray-600 mb-2">{truncateDescription(repo.description, 100)}</p>
                  <p className="text-sm text-gray-500">⭐ {repo.stargazers_count} | Forks: {repo.forks_count}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-center mb-4">Popular Developers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {developers.map((dev) => (
                <div key={dev.id} className="p-4 rounded-lg shadow-md border bg-white">
                  <a href={dev.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold mb-2 text-blue-600 hover:underline flex items-center">
                    <img src={dev.avatar_url} alt={`${dev.login}'s avatar`} className="w-10 h-10 rounded-full mr-2" />
                    {dev.login}
                  </a>
                  <p className="text-sm text-gray-500">Followers: {dev.followers}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Popular;
