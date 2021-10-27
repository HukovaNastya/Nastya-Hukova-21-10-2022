import React, {useState, useEffect} from 'react';
import WeatherCardFavorite from '../../components/weatherCardFavorite/WeatherCardFavorite.js';
import { Row } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {getFavouriteLocations} from '../../store/actions/FavouritesActions';
import {localStorageMethods} from '../../plugins/localStorageMethods';



const Favorite = () => {
  const dispatch = useDispatch();
  const loadFromStorage = () => {
  let val = localStorageMethods.getItem('cities');
    return val ? JSON.parse(val) : [];
  };
  const [favorites, setFavorites] = useState(loadFromStorage());


  // useEffect(() => {
  //   dispatch(getFavouriteLocations());
  // }, [favorites, dispatch]);

//  const {favoritesForecast} = useSelector( state => state.favoritesForecast);
//  const dispatch = useDispatch();
  useEffect(() => dispatch(getFavouriteLocations(favorites)),[]);

  return (
    <div className="weather-card-wrap" style={{margin: '40px 0px 0px 0px'}}>
      <Row justify="center" gutter={12} >
        {cities.map((favorite) =>
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
