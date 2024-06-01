import React, { useState, useEffect } from 'react';
import { fetchUserRepos, fetchUserProfile } from '../githubApi';

const Repo = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [repoData, profileData] = await Promise.all([
          fetchUserRepos(username),
          fetchUserProfile(username),
        ]);
        setRepos(repoData);
        setProfile(profileData);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  // Pagination Logic
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const totalPages = Math.ceil(repos.length / reposPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
      {/* Profile Info */}
      {profile && (
        <div className="text-center mb-6">
          <img
            src={profile.avatar_url}
            alt={`${profile.login}'s avatar`}
            className="rounded-full w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-150"
          />
          <h2 className="text-3xl font-extrabold mt-4 font-mono">{profile.login}'s Repositories</h2>
          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md border border-yellow-500">
              <p className="text-lg font-semibold">Followers</p>
              <p>{profile.followers}</p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md border border-yellow-500">
              <p className="text-lg font-semibold">Following</p>
              <p>{profile.following}</p>
            </div>
            {profile.blog && (
              <div className="bg-yellow-200 p-4 rounded-lg shadow-md border border-yellow-500">
                <p className="text-lg font-semibold">Website</p>
                <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{profile.blog}</a>
              </div>
            )}
            <div className="bg-yellow-500 p-4 rounded-lg shadow-md border border-yellow-500">
              <p className="text-lg font-semibold">Member since</p>
              <p>{new Date(profile.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
      {/* Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentRepos.map((repo) => (
          <div key={repo.id} className={`p-4 rounded-lg shadow-md border animate-border ${repo.private ? 'bg-yellow-200 border-yellow-500' : 'bg-white border-blue-500'}`}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold mb-2 text-blue-600 hover:underline"
            >
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
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${i + 1 === currentPage ? 'bg-blue-600' : ''}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Next
        </button>
      </div>
      {/* Total Repos Section */}
      <div className="flex justify-center mt-8">
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md border border-yellow-500">
          <p className="text-lg font-semibold">Total Repositories</p>
          <p className="text-3xl font-bold">{repos.length}</p>
        </div>
      </div>
    </section>
  );
};

export default Repo;
