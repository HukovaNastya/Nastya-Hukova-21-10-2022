import axios from 'axios';

const api  = axios.create({
  baseURL: `http://dataservice.accuweather.com/`,
  params: {
    api_key: `${process.env.REACT_APP_WEATHER_API}`,
    language: 'en-us'
  }
});

export default api;
