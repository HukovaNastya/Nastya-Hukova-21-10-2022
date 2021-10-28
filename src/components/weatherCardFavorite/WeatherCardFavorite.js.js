import React from 'react';
import { Card, Image, Space, Button  } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { iconUrl } from '../../Services/Index';
import {useSelector, useDispatch} from 'react-redux';

const ContainerForWeatherCard = styled.div`
  max-width: 1200px;
  font-family: 'Montserrat', sans-serif;
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

const StyledCard = styled(Card)`
  width: 450px;
  border-radius: 10%;
  background: transparent !important;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1), -6px -6px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const WeatherCardFavorite = ({ favorite, city}) => {

  return (
    <ContainerForWeatherCard>
      <StyledCard>
        <Space size={32}>
          <Image width={100} src='' preview={false} />
          <div>
            <p className="weather-data-city-favorite">
              <span>City: {city}</span> Санкт-Петербург
            </p>
            <p className="weather-data-temp-favorite">
              <span>Temperature:</span>
            </p>
          </div>
        </Space>
        <Button type="dashed" size={200}>
          Delete
        </Button>
      </StyledCard>
    </ContainerForWeatherCard>
  );
};

export default WeatherCardFavorite;
