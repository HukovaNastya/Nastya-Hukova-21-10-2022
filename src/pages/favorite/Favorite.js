import React, {useState, useEffect} from 'react';
import WeatherCardFavorite from '../../Components/WeatherCardFavorite/WeatherCardFavorite.js.js';
import { Row } from 'antd';
import { useDispatch } from 'react-redux';
import { getFavouriteLocations } from '../../Store/Actions/FavouritesActions';
import {localStorageMethods} from '../../Plugins/LocalStorageMethods';

const Favorite = () => {

  const dispatch = useDispatch();
  const loadFromStorage = () => {
  let val = localStorageMethods.getItem('cities');
    return val ? JSON.parse(val) : [];
  };
  const [cities, setCities] = useState(loadFromStorage());

  useEffect(() => {
    dispatch(getFavouriteLocations());
  }, [cities, dispatch]);

//  const {favoritesForecast} = useSelector( state => state.favoritesForecast);
//  const dispatch = useDispatch();
  useEffect(() => dispatch(getFavouriteLocations(cities)),[]);

  return (
    <div className="weather-card-wrap" style={{margin: '40px 0px 0px 0px'}}>
      <Row justify="center" gutter={12} >
        {cities.map((citi) =>
          (<WeatherCardFavorite
            citi ={citi}
             key = {citi.id}
           />
          ))
        }
        <WeatherCardFavorite></WeatherCardFavorite>
      </Row>
    </div>
  );
};

export default Favorite;
