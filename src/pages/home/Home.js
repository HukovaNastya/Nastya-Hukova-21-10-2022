import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import Search from '../../components/search/Search';
import WeatherCard from '../../components/weatherCard/WeatherCard';
import FavoriteButton from '../../components/favoriteBatton/FavoriteButton';
import { Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ForecastTitle from '../../components/forecastTitle/ForecastTitle';
import { Row, Col } from 'antd';
import ForecastList from '../../components/ForecastList/ForecastList';
import {getSearchedWeather } from '../../store/actions/WeatherActions';
import {useDispatch, useSelector} from "react-redux";
import {localStorageMethods} from '../../plugins/localStorageMethods';
import {addLocationToFavourites } from '../../store/actions/FavouritesActions';
import useGeolocation from  '../../services/Geolocation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const {searchedForecast, city} = useSelector(state => state.weather);

  const geolocationPosition = useGeolocation()



  // useEffect(() => {
  //     dispatch(getSearchedWeather('Tel Aviv'));
  //   },[]);
    useEffect(() => {

      const geolocationEnabled = geolocationPosition.coords && 'Tel Aviv'

      if (geolocationEnabled) {
        const { latitude, longitude } = geolocationPosition.coords
        dispatch(getSearchedWeather({ latitude, longitude }))
      } else if ('Tel Aviv') {
        dispatch(getSearchedWeather('Tel Aviv'))
      }
    }, [dispatch, geolocationPosition.coords])

  const onClick = () => {
    // dispatch(addLocationToFavourites('cities'));
    const favorites = localStorageMethods.getItem('cities') || [];
    localStorageMethods.setItem('cities', [...favorites, city]);
  }

  return (
    <Wrapper>
      <Search />
      <div>
        <Row justify="space-between" gutter={12} >
          <div style={{margin: '20px 0px 0px 172px'}}>
            <WeatherCard searchedForecast={searchedForecast} city={city}/>
          </div>
          <Space size={10}>
            {/* <FontAwesomeIcon icon={faHeart} size="3x" style={{ color: '#dea310' }}/> */}
            <FavoriteButton onClick={onClick}/>
          </Space>
        </Row>
      </div>
      <div>
       < ForecastTitle/>
      </div>
      <div>
        <ForecastList/>
      </div>
    </Wrapper>
  );
};

export default Home;

