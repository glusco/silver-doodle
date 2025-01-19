import axios from 'axios';

const api = axios.create({
  // Use environment variable in production, fallback to localhost for development
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api; 