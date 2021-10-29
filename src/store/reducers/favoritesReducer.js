import { ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from '../types';

const initState = {
  favoriteForecasts: JSON.parse(localStorage.getItem('favorites')) || []
};

const favouritesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_ITEM:
      return {
        ...state,
        favoriteForecasts: [...state.favoriteForecasts, action.payload]
      }
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favoriteForecasts: state.favoriteForecasts.filter(item => item.city.key !== action.payload)
      }
    default:
      return state;
  }
};


export default favouritesReducer;
