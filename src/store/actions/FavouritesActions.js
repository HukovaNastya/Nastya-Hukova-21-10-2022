import { message } from 'antd';
import { localStorageMethods } from '../../plugins/localStorageMethods';
import {
  FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_PROGRESS,
  FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_SUCCESS,
  FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_ERROR,
  FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_PROGRESS,
  FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_SUCCESS,
  FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_ERROR,
  GET_FAVOURITES_LOCATION_IN_PROGRESS,
  GET_FAVOURITES_LOCATION_IN_SUCCESS,
  GET_FAVOURITES_LOCATION_IN_ERROR
} from '../types';

import {getSearchedWeather} from '../actions/WeatherActions';

// export const getFavoriteLocations = () => async dispatch => {
//   dispatch({ type: GetFavorite_City_IN_PROGRESS });

//   try {
//     const cities = storage.getItem('cities') || [];
//     const favoritesForecast = [];

//     for (let location of cities) {
//       const response = await getSearchedWeather(location);
//       favoritesForecast.push({...response.data, city: location});
//     }

//     dispatch({
//       type: AddFavorite_City_IN_SUCCESS,
//       payload: favoritesForecast
//     });

//     message.success('Request success!');
//   } catch (error) {
//     console.error(error);
//     dispatch({
//       type:   GetFavorite_City_IN_ERROR,
//       error: error
//     });
//     message.error('Request failed!');
//   }
// };

export const addLocationToFavourites = locationKey => dispatch => {
  dispatch({type: FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_PROGRESS,});

  try {
    const favourites = localStorageMethods.getItem('cities') || [];
    const newData = [...favourites, JSON.stringify(locationKey)];
    localStorageMethods.setItem('cities', newData);

    dispatch({
      type: FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_SUCCESS,
      payload: locationKey
    });
    message.success('Request success!');
  }
  catch (error) {
    console.error(error);
    dispatch({
      type: FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_ERROR,
      error: error
    });
    message.error('Request failed!');
  }
};

export const deleteLocationFromFavourites = locationKey => dispatch => {
  dispatch({ type: FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_PROGRESS });

  try {
    const favourites = localStorageMethods.getItem('favorites') || [];
    const filteredFavourites = favourites.filter(item => item !== locationKey);
    const newData = [...filteredFavourites];
    localStorageMethods.setItem('favorites', newData);

    dispatch({
      type: FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_SUCCESS,
      payload: locationKey
    });

    message.success('Request success!');
  } catch (error) {
    console.error(error);
    dispatch({
      type: FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_ERROR,
      error: error
    });
    message.error('Request failed!');
  }
};


export const getFavouriteLocations = () => async dispatch => {
  dispatch({ type: GET_FAVOURITES_LOCATION_IN_PROGRESS });

  try {
    const favouritesId = localStorageMethods.getItem('favourites') || [];
    const favouritesForecast = [];

    for (let location of favouritesId) {
      const response = await getSearchedWeather(location);
      favouritesForecast.push(response.data);
    }
    dispatch({
      type: GET_FAVOURITES_LOCATION_IN_SUCCESS,
      payload: favouritesForecast
    });

    message.success('Request success!');
  } catch (error) {
    console.error(error);
    dispatch({
      type: GET_FAVOURITES_LOCATION_IN_ERROR,
      error: error
    });
    message.error('Request failed!');
  }
};
