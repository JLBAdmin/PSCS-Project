import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL
});

export default instance;

export const axiosPrivate = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});
