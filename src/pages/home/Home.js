import React from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import WeatherCard  from '../../components/weatherCard/WeatherCard';
import FavoriteButton from '../../components/favoriteBatton/FavoriteButton';
import { Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ForecastTitle from '../../components/forecastTitle/ForecastTitle';
import CardsForForecas from '../../components/cardsForForecast/CardsForForecas';

const Home = ( ) => {
  return (
    <div className="container">
      <Header></Header>
      <div className="search-weather">
        <Search></Search>
      </div>
      <div>
        <Space size={120}>
          <WeatherCard></WeatherCard>
          <Space size={25}>
          <FontAwesomeIcon icon={faHeart} size="3x" style={{ color: '#dea310' }}/>
            <FavoriteButton></FavoriteButton>
          </Space>
        </Space>
      </div>
      <div>
       < ForecastTitle/>
      </div>
      <div>
        <CardsForForecas></CardsForForecas>
      </div>
    </div>
  );
}

export default Home;
