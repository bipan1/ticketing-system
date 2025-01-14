import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
