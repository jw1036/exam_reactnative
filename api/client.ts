import axios from 'axios';

const baseURL = __DEV__
  ? 'http://localhost:1337'
  : 'http://articles.example.com';

const client = axios.create({baseURL});

export function applyToken(jwt: string) {
  client.defaults.headers.Authorization = `Bearer ${jwt}`;
}

export function clearToken() {
  client.defaults.headers.Authorization = undefined;
}

export default client;
