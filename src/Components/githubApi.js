// src/githubApi.js
const TOKEN = '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'; // Replace with your actual GitHub token

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
