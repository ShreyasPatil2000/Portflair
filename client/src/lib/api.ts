import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

console.log("API Base URL:", import.meta.env.BACKEND_URL);

export default apiClient;
