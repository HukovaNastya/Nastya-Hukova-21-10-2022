import {
  ADD_FAVORITE_ITEM,
  REMOVE_FAVORITE_ITEM,
} from '../types';

export const addToFavorite = (item) => (dispatch, getState) => {
  dispatch({ type: ADD_FAVORITE_ITEM, payload: item })
  const { favorites: { favoriteForecasts } } = getState()
  localStorage.setItem('favorites', JSON.stringify(favoriteForecasts))
}

export const removeFromFavorite = (itemKey) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FAVORITE_ITEM, payload: itemKey })
  const { favorites: { favoriteForecasts }  } = getState()
  localStorage.setItem('favorites', JSON.stringify(favoriteForecasts))
}