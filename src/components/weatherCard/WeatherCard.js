import React, { useMemo } from 'react';
import { Card, Image, Space  } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { iconUrl } from '../../services/index';

const WeatherCardContainer = styled.div`
  max-width: 1200px;
  margin-top: 60px;
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
  @media (max-width: 780px) {
    max-width: 600px;
    margin-left: -90px;
  }
  @media (max-width: 350px) {
    max-width: 300px;
    margin-left: -90px;
  }
`;

const StyledWeatherCard = styled(Card)`
  width: 450px;
  border-radius: 10%;
  background: transparent !important;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1), -6px -6px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  @media (max-width: 780px) {
    width: 320px;
  }
  @media (max-width: 350px) {
    width: 200px;
   margin-left: 30px;
  }
`;


const WeatherCard = ({ searchedForecast, city} ) => {
  const iconUrlForWeatherCard = useMemo(() => iconUrl(searchedForecast?.[0]?.Day.Icon), [searchedForecast?.[0]?.Day.Icon]);
  const tenperatureForWeatherCard = searchedForecast[0]?.Temperature.Maximum.Value;
  const unitForTenperatureInWeatherCard = searchedForecast[0]?.Temperature.Maximum.Unit;
  return (
    <WeatherCardContainer>
      <StyledWeatherCard >
        <Space size={32}>
          <Image
            className="weather-img"
            width={100}
            src={iconUrlForWeatherCard}
            preview={false}
          />
          <div>
            <p ><span>City:</span> {city}</p>
            <p ><span>Temperature: </span> {tenperatureForWeatherCard}{unitForTenperatureInWeatherCard }</p>
          </div>
        </Space>
      </StyledWeatherCard >
    </WeatherCardContainer>
  );
}

export default WeatherCard;