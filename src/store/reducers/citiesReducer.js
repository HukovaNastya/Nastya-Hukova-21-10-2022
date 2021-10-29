import {
  SEARCH_CITY_IN_PROGRESS,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_ERROR, SET_SELECTED_CITY
} from '../types';

const initState = {
  citiesList: [],
  selectedCity: null,
  searchCityInProgress: false
};

const citiesReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_CITY_IN_PROGRESS:
      return {
        ...state,
        searchCityInProgress: true
      };
    case SEARCH_CITY_SUCCESS:
      return {
         ...state,
         citiesList: action.payload,
         searchCityInProgress: false
      };
    case SEARCH_CITY_ERROR:
      return {
        ...state,
        searchCityInProgress: false
      };
    case SET_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload
      }
    default:
      return { ...state };
  }
};


export default citiesReducer;
