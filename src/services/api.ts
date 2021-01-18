import axios from 'axios';
import { MD5 } from 'crypto-js';

const ts = Date.now();
const apikey = process.env.REACT_APP_PUBLIC_KEY;
const privatekey = `${process.env.REACT_APP_PRIVATE_KEY}`;
const hash = MD5(ts + privatekey + apikey).toString();

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    ts,
    apikey,
    hash,
  },
});

export default api;
