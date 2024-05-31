// src/githubApi.js
require('dotenv').config(); 

const TOKEN = process.env.GITHUB_TOKEN; 

export const fetchUserRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      'Authorization': `token ${TOKEN}`
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchUserProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      'Authorization': `token ${TOKEN}`
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
