import React, {useState, useEffect} from 'react';
import WeatherCardFavorite from '../../components/weatherCardFavorite/weatherCardFavorite.js.js';
import { Row } from 'antd';
import { useDispatch } from 'react-redux';
import { getFavouriteLocations } from '../../store/actions/favouritesActions';
import {localStorageMethods} from '../../plugins/localStorageMethods';

const Favorite = () => {

  const dispatch = useDispatch();
  const loadFromStorage = () => {
  // let val = localStorageMethods.getItem('cities');
  //   return val ? JSON.parse(val) : [];
  let favoriteCities = localStorageMethods.getItem('cities');
  console.log(favoriteCities)
  if(typeof favoriteCities === 'string' ) {
    favoriteCities = JSON.parse(favoriteCities);
  }
  return  favoriteCities;
};
  const [favorites, setFavorites] = useState(loadFromStorage());
 console.log('Favorites', favorites);
  // useEffect(() => dispatch(getFavouriteLocations(favorites)),[]);
  // useEffect(() => dispatch(getFavouriteLocations(favorites)),[]);

  return (
    <div className="weather-card-wrap" style={{margin: '40px 0px 0px 0px'}}>
      <Row justify="center" gutter={12} >
        {favorites.map((favorite) =>
          (<WeatherCardFavorite
            favorite ={favorite}
            key = {favorite.id}
           />
          ))
        }
        <WeatherCardFavorite></WeatherCardFavorite>
      </Row>
    </div>
  );
};

export default Favorite;