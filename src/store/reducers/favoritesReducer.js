import {
  FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_PROGRESS,
  FAVOURITES_LOCATION_ADDED_TO_FAVORITE_SUCCESS,
  FAVOURITES_LOCATION_ADDED_TO_FAVORITE_ERROR,
  FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_PROGRESS,
  FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_SUCCESS,
  FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_ERROR,
  GET_FAVOURITES_LOCATION_IN_PROGRESS,
  GET_FAVOURITES_LOCATION_SUCCESS,
  GET_FAVOURITES_LOCATION_IN_ERROR
} from '../types';

const initState = {
  favoritesForecast: [],
  isLoading: false,
};

const favouritesReducer = (state = initState, action) => {
  switch (action.type) {
    case FAVOURITES_LOCATION_ADDED_TO_FAVORITE_IN_PROGRESS :
      return {
        ...state,
        isLoading: true
      };
    case FAVOURITES_LOCATION_ADDED_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        favourites: [...state.favorites, action.payload]
      }
    case FAVOURITES_LOCATION_ADDED_TO_FAVORITE_ERROR:
      return {
        ...state,
        isLoading: false
      };
    case   FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      }
    case FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_SUCCESS:
      return {
        ...state,
        favourites: state.favourites.filter(item => item !== action.payload)
      };
    case FAVOURITES_LOCATION_DELETED_FROM_FAVORITE_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case   GET_FAVOURITES_LOCATION_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      }
    case GET_FAVOURITES_LOCATION_SUCCESS:
      return {
        ...state,
        favourites: action.payload
      }
    case GET_FAVOURITES_LOCATION_IN_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};


export default favouritesReducer;
