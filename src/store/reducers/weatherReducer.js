import {
  SEARCHED_WEATHER_REQUEST_IN_PROGRESS,
  SEARCHED_WEATHER_REQUEST_SUCCESS,
  SEARCHED_WEATHER_REQUEST_ERROR,
} from '../types';

const initState = {
  searchedForecast: [],
  fiveDaysForecast: [],
  isGetWeatherInProgress: false,
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCHED_WEATHER_REQUEST_IN_PROGRESS:
      return {
        ...state,
        isGetWeatherInProgress: true
      };
    case SEARCHED_WEATHER_REQUEST_SUCCESS:
      return {
        ...state,
        searchedForecast: action.payload,
      };
    case SEARCHED_WEATHER_REQUEST_ERROR:
      return {
        ...state,
        isGetWeatherInProgress: false
      };
    default:
      return { ...state };
    }
  };


export default  weatherReducer;



