import axios from 'axios';

export const walletInstance = axios.create({
  baseURL: `https://wallet-backend-r5ts.onrender.com/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
