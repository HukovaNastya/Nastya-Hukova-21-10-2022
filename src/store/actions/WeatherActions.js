import {
  SEARCHED_WEATHER_REQUEST_IN_PROGRESS,
  SEARCHED_WEATHER_REQUEST_IN_SUCCESS,
  SEARCHED_WEATHER_REQUEST__IN_ERROR,
  SEARCHED_WEATHER_REQUEST_City_IN_SUCCESS
} from '../Types';

import {  message } from 'antd';
import api from '../../Plugins/Axios/Axios';

export const getSearchedWeather = (search) => (dispatch) => {
  dispatch({ type: SEARCHED_WEATHER_REQUEST_IN_PROGRESS});
  api
    .get(`locations/v1/cities/autocomplete?q=${search}`)
    .then((res) => {
      dispatch({
        type: SEARCHED_WEATHER_REQUEST_City_IN_SUCCESS,
        payload: res.data[0].LocalizedName
      });
      const localKey = res.data[0].Key;
      localStorage.setItem('localKey', localKey );
       return api
                .get(`forecasts/v1/daily/5day/${res.data[0].Key}?metric=true})`)

     })
    .then((res) => {
       dispatch({
         type: SEARCHED_WEATHER_REQUEST_IN_SUCCESS,
         payload: res.data.DailyForecasts
       });
       message.success('Request success!');
    })
    .catch((err) => {
      dispatch({
        type: SEARCHED_WEATHER_REQUEST__IN_ERROR
      });
      message.error('Request failed!');
    })
}


// export const getFiveDaysForecast = (locationKey) => (dispatch) => {
//   dispatch({ type: FiveDaysForecast_REQUEST_IN_PROGRESS });
//   api
//     .get(`forecasts/v1/daily/5day/${locationKey}`)
//     .then((res) => {
//        dispatch({
//          type: FiveDaysForecast_REQUEST_IN_SUCCESS,
//          payload: res.data
//        });
//        message.success('Request success!');
//     })
//     .catch((err) => {
//       dispatch({
//         type: FiveDaysForecast_REQUEST_IN_ERROR
//       });
//       message.error('Request failed!');
//     })
// }