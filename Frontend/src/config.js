// config.js

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'backend'
    : 'http://localhost:3000/api';

export { BASE_URL };
