import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.iextrading.com/1.0'
})

//Need new API. IEX free tier is no longer viable.