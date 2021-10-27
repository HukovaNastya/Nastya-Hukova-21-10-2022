import { message } from 'antd';
import { storage } from '../../plugins/Storage';
import {
  GetFavorite_City_IN_PROGRESS ,
  GetFavorite_City_IN_SUCCESS,
  GetFavorite_City_IN_ERROR
} from '../types';

import {getSearchedWeather} from '../actions/WeatherActions';

export const getFavoriteLocations = () => async dispatch => {
  dispatch({ type: GetFavorite_City_IN_PROGRESS });

  try {
    const cities = storage.getItem('cities') || [];
    const favoritesForecast = [];

    for (let location of cities) {
      const response = await getSearchedWeather(location);
      favoritesForecast.push({...response.data, city: location});
    }

    dispatch({
      type: GetFavorite_City_IN_SUCCESS,
      payload: favoritesForecast
    });

    message.success('Request success!');
  } catch (error) {
    console.error(error);
    dispatch({
      type:   GetFavorite_City_IN_ERROR,
      error: error
    });
    message.error('Request failed!');
  }
};
