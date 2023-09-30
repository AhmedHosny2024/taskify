import axios from 'axios';

const instance = axios.create({
  baseURL: "https://localhost:7207//",
  withCredentials: true,
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;