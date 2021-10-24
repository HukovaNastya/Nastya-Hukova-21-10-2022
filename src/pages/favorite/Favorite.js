import React from 'react';
import Header from '../../components/header/Header';
import WeatherCardFavorite from '../../components/weatherCardFavorite/WeatherCardFavorite';
import { Row } from 'antd';

const Favorite = ( ) => {
  return (
    <div className="container">
      <Header></Header>
      <div className="weather-card-wrap">
        <Row  gutter={12}>
          <WeatherCardFavorite></WeatherCardFavorite>
          <WeatherCardFavorite></WeatherCardFavorite>
        </Row>
      </div>
    </div>
  );
}

export default Favorite;
