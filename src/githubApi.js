// src/githubApi.js
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchUserRepos = async (username) => {
  let repos = [];
  let page = 1;
  let totalPages = 1; // Initial value

  while (page <= totalPages) {
    const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=100`, {
      headers: {
        'Authorization': `token ${TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    repos = repos.concat(data);

    // Update totalPages from response headers
    const linkHeader = response.headers.get('Link');
    if (linkHeader) {
      const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
      if (match) {
        totalPages = parseInt(match[1]);
      }
    }

    page++;
  }

  return repos;
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

export const fetchUserContributions = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/events`, {
    headers: {
      'Authorization': `token ${TOKEN}`
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
