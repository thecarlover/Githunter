// src/githubApi.js
export const fetchUserRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
