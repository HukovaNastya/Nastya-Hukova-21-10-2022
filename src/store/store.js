import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import WeatherReducer from './reducers/weatherReducer';
import FavoritesReducer from './reducers/favoritesReducer';
import CitiesReducer from "./reducers/citiesReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  weather: WeatherReducer,
  favorites: FavoritesReducer,
  cities: CitiesReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;