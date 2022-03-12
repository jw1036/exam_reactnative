import axios from 'axios';

const baseURL = __DEV__
  ? 'http://localhost:1337'
  : 'http://articles.example.com';

const client = axios.create({baseURL});

export default client;
