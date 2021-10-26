import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const key = '215854';
  const city = 'Tel Aviv';

  useEffect(() => {
      dispatch(getSearchedWeather('215854', 'Tel Aviv'));
    }
  );

  return (
    <Wrapper>
      <Search />
      <div>
        <Row justify="space-between" gutter={12} >
          <div style={{margin: '20px 0px 0px 172px'}}>
            <WeatherCard></WeatherCard>
          </div>
          <Space size={10}>
            {/* <FontAwesomeIcon icon={faHeart} size="3x" style={{ color: '#dea310' }}/> */}
            <FavoriteButton></FavoriteButton>
          </Space>
        </Row>
      </div>
      <div>
       < ForecastTitle/>
      </div>
      <div>
        <ForecastList></ForecastList>
      </div>
    </Wrapper>
  );
};

export default Home;

