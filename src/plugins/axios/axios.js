import axios from 'axios';

const api  = axios.create({
  baseURL: `http://dataservice.accuweather.com/`,
  params: {
    language: 'en-us'
  }
});

api.interceptors.request.use((config) => {
  config.url = config.url+`&apikey=${process.env.REACT_APP_WEATHER_API}`;
  return config;
})

console.log(process)
export default api;
