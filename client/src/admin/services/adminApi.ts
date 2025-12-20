// This file will contain functions to interact with the admin-related APIs.

const API_URL = import.meta.env.VITE_API_BASE_URL;
const getToken = () => localStorage.getItem('token');

// Example function to fetch announcements
export const getAnnouncements = async () => {
  const token = getToken();
  const res = await fetch(`${API_URL}/content`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return res.json();
};

// Add other functions for creating, updating, deleting data.
