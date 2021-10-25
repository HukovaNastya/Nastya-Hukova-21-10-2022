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
    case SearchedWeather_REQUEST_IN_PROGRESS:
      return {
        ...state,
        isgetWeatherInProgress: true
      };
    case SearchedWeather_REQUEST_IN_SUCCESS:
      return {
        ...state,
        searchedForecast: action.payload,
      };
    case SearchedWeather_REQUEST_IN_ERROR:
      return {
        ...state,
        isgetWeatherInProgres: false
      };
      case SearchedWeatherCity_REQUEST_IN_SUCCESS:
        return {
          ...state,
          city: action.payload
        }
    case CurrentForecast_REQUEST_IN_PROGRESS:
      return {
        ...state,
        isgetCurrentForecastInProgress: true
      }
    case CurrentForecast_REQUEST_IN_SUCCESS:
      return {
        ...state,
        currentForecast: action.payload,
      };
    case CurrentForecast_REQUEST_IN_ERROR:
      return {
        ...state,
        isgetCurrentForecastInProgress: false
      };
    case FiveDaysForecast_REQUEST_IN_PROGRESS:
      return {
        ...state,
        isgetFiveDaysForecastInProgress: true
      }
    case FiveDaysForecast_REQUEST_IN_SUCCESS:
      return {
        ...state,
        fiveDaysForecast: action.payload,
      };
    case   FiveDaysForecast_REQUEST_IN_ERROR:
      return {
        ...state,
        isgetFiveDaysForecastInProgress: false
      }
    default:
      return { ...state };
    }
  };


export default  weatherReducer;
