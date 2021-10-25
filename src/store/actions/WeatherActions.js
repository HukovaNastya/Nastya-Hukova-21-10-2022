import {
  SearchedWeather_REQUEST_IN_PROGRESS,
  SearchedWeather_REQUEST_IN_SUCCESS,
  SearchedWeather_REQUEST_IN_ERROR,
  CurrentForecast_REQUEST_IN_PROGRESS,
  CurrentForecast_REQUEST_IN_SUCCESS,
  CurrentForecast_REQUEST_IN_ERROR,
  FiveDaysForecast_REQUEST_IN_PROGRESS,
  FiveDaysForecast_REQUEST_IN_SUCCESS,
  FiveDaysForecast_REQUEST_IN_ERROR
} from '../types';

import axios from 'axios';
import {  message } from 'antd';
import api from '../../plugins/axios/index';

export const getSearchedWeather = (search) => (dispatch) => {
  dispatch({ type: SearchedWeather_REQUEST_IN_PROGRESS });
  api
    .get(`locations/v1/cities/autocomplete?q=${search}`)
    .then((res) => {
       dispatch({
         type: SearchedWeather_REQUEST_IN_SUCCESS,
         payload: res.data
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



export const getCurrentForecast = (locationKey) => (dispatch) => {
  dispatch({ type: CurrentForecast_REQUEST_IN_PROGRESS });
  api
    .get(`currentconditions/v1/${locationKey}`)
    .then((res) => {
       dispatch({
         type: CurrentForecast_REQUEST_IN_SUCCESS,
         payload: res.data
       });
       message.success('Request success!');
    })
    .catch((err) => {
      dispatch({
        type: CurrentForecast_REQUEST_IN_ERROR
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