// src/api.js
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export async function createShortUrl(longUrl) {
  const response = await fetch(`${API_BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ longUrl }),
  });

  if (!response.ok) {
    throw new Error(`Failed to shorten URL (status ${response.status})`);
  }

  return response.json(); // { id, shortHash, longUrl, createdAt, clickCount }
}

export async function getRecentUrls() {
  const response = await fetch(`${API_BASE_URL}/urls`);

  if (!response.ok) {
    throw new Error(`Failed to fetch recent URLs (status ${response.status})`);
  }

  return response.json(); // array of { id, shortHash, longUrl, createdAt, clickCount }
}

export { API_BASE_URL };