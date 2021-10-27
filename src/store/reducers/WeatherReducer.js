import {
  SEARCHED_WEATHER_REQUEST_IN_PROGRESS,
  SEARCHED_WEATHER_REQUEST_IN_SUCCESS,
  SEARCHED_WEATHER_REQUEST__IN_ERROR,
  SEARCHED_WEATHER_REQUEST_City_IN_SUCCESS,
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
    case SEARCHED_WEATHER_REQUEST_IN_SUCCESS:
      return {
        ...state,
        searchedForecast: action.payload,
      };
    case SEARCHED_WEATHER_REQUEST__IN_ERROR:
      return {
        ...state,
        isgetWeatherInProgres: false
      };
      case SEARCHED_WEATHER_REQUEST_City_IN_SUCCESS:
        return {
          ...state,
          city: action.payload
        }
    // case CurrentForecast_REQUEST_IN_PROGRESS:
    //   return {
    //     ...state,
    //     isgetCurrentForecastInProgress: true
    //   }
    // case CurrentForecast_REQUEST_IN_SUCCESS:
    //   return {
    //     ...state,
    //     currentForecast: action.payload,
    //   };
    // case CurrentForecast_REQUEST_IN_ERROR:
    //   return {
    //     ...state,
    //     isgetCurrentForecastInProgress: false
    //   };
    // case FiveDaysForecast_REQUEST_IN_PROGRESS:
    //   return {
    //     ...state,
    //     isgetFiveDaysForecastInProgress: true
    //   }
    // case FiveDaysForecast_REQUEST_IN_SUCCESS:
    //   return {
    //     ...state,
    //     fiveDaysForecast: action.payload,
    //   };
    // case   FiveDaysForecast_REQUEST_IN_ERROR:
    //   return {
    //     ...state,
    //     isgetFiveDaysForecastInProgress: false
    //   }
    default:
      return { ...state };
    }
  };


export default  weatherReducer;
