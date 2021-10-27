import React, {useEffect} from 'react';
import styled from 'styled-components';
import WeatherCard from '../../components/weatherCard/WeatherCard';
import { Row } from 'antd';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getFavouriteLocations} from '../../store/actions/FavouritesActions';


const Favorite = () => {
  const  {favourites} = useSelector( state => state.favourites);
 const dispatch = useDispatch();
  useEffect(() => dispatch(getFavouriteLocations()),[])


  return (
    <div className="weather-card-wrap" style={{margin: '40px 0px 0px 0px'}}>
      <Row justify="center" gutter={12} >
        {favourites.map(favourite => {
          <WeatherCard key={favourite.id} searchedForecast={favourite} city={favourite.city}/>
        })}
      </Row>
    </div>
  );
};

export default Favorite;
