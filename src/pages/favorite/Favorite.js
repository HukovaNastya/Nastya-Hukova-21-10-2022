import React, {useEffect} from 'react';
import WeatherCardFavorite from '../../components/weatherCardFavorite/WeatherCardFavorite.js';
import { Row } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {getFavoriteLocations} from '../../store/actions/FavouritesActions';


const Favorite = () => {

//  const {favoritesForecast} = useSelector( state => state.favoritesForecast);
//  const dispatch = useDispatch();
//   useEffect(() => dispatch(getFavoriteLocations()),[]);

  return (
    <div className="weather-card-wrap" style={{margin: '40px 0px 0px 0px'}}>
      <Row justify="center" gutter={12} >
        {/* {favoritesForecast.map((favoriteForecast) =>
          (<WeatherCardFavorite
            favoriteForecast ={favoriteForecast}
             key = {favoriteForecast.id}
           />
          ))
        } */}
        <WeatherCardFavorite></WeatherCardFavorite>
      </Row>
    </div>
  );
};

export default Favorite;
