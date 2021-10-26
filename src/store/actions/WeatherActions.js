import {
  SearchedWeather_REQUEST_IN_PROGRESS,
  SearchedWeather_REQUEST_IN_SUCCESS,
  SearchedWeather_REQUEST_IN_ERROR,
  CurrentForecast_REQUEST_IN_PROGRESS,
  CurrentForecast_REQUEST_IN_SUCCESS,
  CurrentForecast_REQUEST_IN_ERROR,
  FiveDaysForecast_REQUEST_IN_PROGRESS,
  FiveDaysForecast_REQUEST_IN_SUCCESS,
  FiveDaysForecast_REQUEST_IN_ERROR,
  SearchedWeatherCity_REQUEST_IN_SUCCESS
} from '../types';

import {  message } from 'antd';
import api from '../../plugins/axios/axios';

export const getSearchedWeather = (search) => (dispatch) => {
  dispatch({ type: SearchedWeather_REQUEST_IN_PROGRESS });
  api
    .get(`locations/v1/cities/autocomplete?q=${search}`)
    .then((res) => {
      dispatch({
        type: SearchedWeatherCity_REQUEST_IN_SUCCESS,
        payload: res.data[0].LocalizedName
      });
       return api
                .get(`forecasts/v1/daily/5day/${res.data[0].Key}?metric=true})`)

     })
    .then((res) => {
       dispatch({
         type: SearchedWeather_REQUEST_IN_SUCCESS,
         payload: res.data.DailyForecasts
       });
       message.success('Request success!');
    })
    .catch((err) => {
      dispatch({
        type: SearchedWeather_REQUEST_IN_ERROR
      });
      message.error('Request failed!');
    })
}


export const getFiveDaysForecast = (locationKey) => (dispatch) => {
  dispatch({ type: FiveDaysForecast_REQUEST_IN_PROGRESS });
  api
    .get(`forecasts/v1/daily/5day/${locationKey}`)
    .then((res) => {
       dispatch({
         type: FiveDaysForecast_REQUEST_IN_SUCCESS,
         payload: res.data
       });
       message.success('Request success!');
    })
    .catch((err) => {
      dispatch({
        type: FiveDaysForecast_REQUEST_IN_ERROR
      });
      message.error('Request failed!');
    })
}