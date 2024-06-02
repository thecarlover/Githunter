// src/githubApi.js
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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

export const fetchPopularRepos = async (language) => {
  const languageQuery = language === 'all' ? '' : `+language:${language}`;
  const response = await fetch(`https://api.github.com/search/repositories?q=stars:>1${languageQuery}&sort=stars&order=desc`, {
    headers: {
      'Authorization': `token ${TOKEN}`
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchPopularDevelopers = async (language) => {
  const languageQuery = language === 'all' ? '' : `+language:${language}`;
  const response = await fetch(`https://api.github.com/search/users?q=followers:>1${languageQuery}&sort=followers&order=desc`, {
    headers: {
      'Authorization': `token ${TOKEN}`
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

