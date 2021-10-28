import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './Reducers/WeatherReducer';
import FavoritesReducer from './Reducers/FavoritesReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  weather: weatherReducer,
  favorites: FavoritesReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
