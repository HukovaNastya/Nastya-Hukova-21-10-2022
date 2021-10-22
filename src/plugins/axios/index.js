import axios from 'axios';
import interceptors from './interceptors';

const api = axios.create({ baseURL: `http://dataservice.accuweather.com/alarms/v1/1day/` });
interceptors(api);

export default api;
