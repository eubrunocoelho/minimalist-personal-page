import { http } from './settings';

export default {
    send: ({ name, phone, email, subject, message }) => {
        return http.post('send', { name, phone, email, subject, message });
    }
}