import axios from 'axios';

const http = axios.create({
    baseURL: 'https://nodemailer-api-blush.vercel.app/'
});

export { http };