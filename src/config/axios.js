import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.151:8000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;