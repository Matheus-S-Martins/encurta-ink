import axios from "axios";

export const key = 'c3c63034a629160b49671398ff4fb87fb77663db';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;