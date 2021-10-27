import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/WeatherReducer';
import FavouritesReducer from './reducers/FavouritesReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  weather: weatherReducer,
  favourites: FavouritesReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
