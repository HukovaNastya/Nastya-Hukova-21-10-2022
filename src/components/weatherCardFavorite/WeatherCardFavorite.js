import React from 'react';
import { Card, Image, Space  } from 'antd';
import weatherToday from '../../img/weatherToday.svg';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const ContainerForWeatherCard = styled.div `
  max-width: 1200px;
  font-family: 'Montserrat', sans-serif;
  margin: 80px 0 0 150px ;
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

const StyledCard = styled(Card) `
  width: 450px;
  border-radius: 10%;
  background: transparent !important;
  box-shadow: -6px -6px 20px rgba(255, 255, 255,1),
              -6px -6px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const WeatherCardFavorite = ( ) => {
  return (
    <ContainerForWeatherCard>
       <StyledCard>
         <Space size={32}>
          <Image
            width={100}
            src={weatherToday}
            preview={false}
          />
          <div >
            <p className="weather-data-city-favorite"><span>City:</span> Санкт-Петербург</p>
            <p className="weather-data-temp-favorite"><span>Temperature:</span> 38F</p>
          </div>
        </Space>
      </StyledCard >
    </ContainerForWeatherCard>
  );
}

export default WeatherCardFavorite;