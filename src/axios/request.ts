import axios from 'axios';
import CryptoJS from 'crypto-js';

const API_URL = import.meta.env.VITE_API_URL;

const privateKey = import.meta.env.VITE_PRIVATE_API_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_API_KEY;

const ts = 'timestamp';

const hashString = ts + privateKey + publicKey;
const hash = CryptoJS.MD5(hashString).toString();

export const request = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: publicKey,
    hash: hash,
    ts: ts 
  },
});
