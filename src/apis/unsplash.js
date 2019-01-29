import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8abf70446d397ac77705b4023535d55b29f65259b5e49d0e874292b484005154'
    }
});