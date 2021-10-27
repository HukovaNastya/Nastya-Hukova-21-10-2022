import {
  GetFavorite_City_IN_PROGRESS ,
  GetFavorite_City_IN_SUCCESS,
  GetFavorite_City_IN_ERROR
} from '../types';

const initState = {
  favouritesForecast: [],
  isLoading: false,
};

const favouritesReducer = (state = initState, action) => {
  switch (action.type) {
    case GetFavorite_City_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      };
      case   GetFavorite_City_IN_SUCCESS:
        return { ...state, favorites: action.payload };
      case  GetFavorite_City_IN_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default favouritesReducer;