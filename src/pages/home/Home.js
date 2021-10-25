import React from 'react';
import styled from 'styled-components';

import Search from '../../components/search/Search';
import WeatherCard from '../../components/weatherCard/WeatherCard';
import FavoriteButton from '../../components/favoriteBatton/FavoriteButton';
import { Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ForecastTitle from '../../components/forecastTitle/ForecastTitle';
import { Row, Col } from 'antd';
import CardsForForecas from '../../components/cardsForForecast/CardsForForecas';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;


const Home = () => {
  return (
    <Wrapper>
      <Search />
      <div>
        <Space size={144}>
          <div style={{margin: '80px 0px 0px 172px'}}>
          <WeatherCard></WeatherCard>
          </div>
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
    </Wrapper>
  );
};

export default Home;

