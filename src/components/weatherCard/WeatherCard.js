import React from 'react';
import { Card, Image, Space  } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {useSelector} from 'react-redux';
import {iconUrl} from '../../services/index';

const WeatherCardContainer = styled.div`
  max-width: 1200px;
  margin-top: 80px;
  margin-left: 30px;
  & p {
    font-weight: 500;
    font-size: 16px;
    color: #dea310;
  }
  & span {
    font-weight: 700;
    font-size: 16px;
    color: #5467b8;
  }
`;

const StyledWeatherCard = styled(Card)`
  width: 450px;
  border-radius: 10%;
  background: transparent !important;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1), -6px -6px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;

  @media (min-width: 1040px) {

  }
`;

const WeatherCard = ( ) => {
  const {searchedForecast, city} = useSelector(state => state.weather);

  return (
    <WeatherCardContainer>
      <StyledWeatherCard >
        <Space size={32}>
          <Image
            width={100}
            src={iconUrl(searchedForecast[0]?.Day.Icon)}
            preview={false}
          />
          <div>
            <p ><span>City:</span> {city}</p>
            <p ><span>Temperature: </span> {searchedForecast[0]?.Temperature.Maximum.Value}{searchedForecast[0]?.Temperature.Maximum.Unit}</p>
          </div>
        </Space>
      </StyledWeatherCard >
    </WeatherCardContainer>
  );
}

export default WeatherCard;