import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // 根据实际情况修改
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
