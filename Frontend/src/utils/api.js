import axios from 'axios';
import { BASE_URL } from '../config';

export const walletInstance = axios.create({
  baseURL: BASE_URL || 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
