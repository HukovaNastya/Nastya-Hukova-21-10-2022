import React from 'react';
import { Card, Image, Space  } from 'antd';
import weatherToday from '../../img/weatherToday.svg';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const WeatherCardContainer = styled.div`
  max-width: 1200px;
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
`;


const WeatherCard = ( ) => {
  return (
    <WeatherCardContainer>
      <StyledWeatherCard >
        <Space size={32}>
          <Image
            width={100}
            src={weatherToday}
            preview={false}
           />
          <div>
            <p ><span>City:</span> Санкт-Петербург</p>
            <p ><span>Temperature:</span> 38F</p>
          </div>
        </Space>
      </StyledWeatherCard >
    </WeatherCardContainer>
  );
}

export default WeatherCard;