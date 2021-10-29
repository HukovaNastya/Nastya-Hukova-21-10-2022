import {
  SEARCHED_WEATHER_REQUEST_IN_PROGRESS,
  SEARCHED_WEATHER_REQUEST_SUCCESS,
  SEARCHED_WEATHER_REQUEST_ERROR,
} from '../types';

import api from '../../plugins/axios/axios';

export const getCityWeatherByKey = (cityKey) => async (dispatch) => {
  dispatch({ type: SEARCHED_WEATHER_REQUEST_IN_PROGRESS });

  try {
    const res = await api.get(`forecasts/v1/daily/5day/${cityKey}?metric=true`)
    dispatch({
      type: SEARCHED_WEATHER_REQUEST_SUCCESS,
      payload: res.data.DailyForecasts
    });
  } catch (err) {
    dispatch({
      type: SEARCHED_WEATHER_REQUEST_ERROR
    });
  }
}
