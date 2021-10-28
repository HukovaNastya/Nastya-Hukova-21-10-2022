import {
  SEARCHED_WEATHER_REQUEST_IN_PROGRESS,
  SEARCHED_WEATHER_REQUEST_SUCCESS,
  SEARCHED_WEATHER_REQUEST_ERROR,
  SEARCHED_WEATHER_REQUEST_CITY_SUCCESS
} from '../types';

const initState = {
  searchedForecast: [],
  currentForecast: [],
  fiveDaysForecast: [],
  city: '',
  loading: false,
  isgetWeatherInProgress: false,
  isgetCurrentForecastInProgress: false,
  isgetFiveDaysForecastInProgress: false
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCHED_WEATHER_REQUEST_IN_PROGRESS:
      return {
        ...state,
        isgetWeatherInProgress: true
      };
    case SEARCHED_WEATHER_REQUEST_SUCCESS:
      return {
        ...state,
        searchedForecast: action.payload,
      };
    case SEARCHED_WEATHER_REQUEST_ERROR:
      return {
        ...state,
        isgetWeatherInProgres: false
      };
      case SEARCHED_WEATHER_REQUEST_CITY_SUCCESS:
        return {
          ...state,
          city: action.payload
        }
    default:
      return { ...state };
    }
  };


export default  weatherReducer;



