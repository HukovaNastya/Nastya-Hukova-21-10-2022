import axios from 'axios';

const api  = axios.create({
  baseURL: `http://dataservice.accuweather.com/`,
  params: {
    apikey: 'Rkra8hE73WIlLgXrkS9OCGQ6GxarRphB',
    language: 'en-us'
  }
});

export default api;
