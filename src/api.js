import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'ae8d2ac0fdf72aabf2629f4738389c03',
    language: 'en-US',
  },
});

export default api;
