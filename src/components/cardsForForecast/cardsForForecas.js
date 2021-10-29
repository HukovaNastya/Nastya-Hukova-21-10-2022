import React, {useMemo} from 'react';
import { Card, Image, Space  } from 'antd';
import styled from 'styled-components';
import {iconUrl} from '../../services/iconService';

const ContainerForecast = styled.div`
  max-width: 1200px;
`;

const CardBodyForecast = styled(Card)`
  width: 160px;
  height: 200px;
  border-radius: 10%;
  margin: 40px 0 0 0 ;
  background: transparent !important;
  box-shadow: -6px -6px 20px rgba(255, 255, 255,1),
              -6px -6px 20px rgba(0, 0, 0, 0.1);
  padding: 5px;

  & p {
    font-size: 18px;
    font-weight: 500;
    color: #dea310;
    margin-bottom: 40px;
  }

  & h5{
    font-weight: 700;
    font-size: 16px;
    color: #5467b8;
  }
`;

const CardsForForecast = (props) => {
  const date = new Date(props.searchedForecas.Date).toLocaleDateString();
  const iconUrlForForecastCard = useMemo(() => iconUrl(props.searchedForecas.Day.Icon), [props.searchedForecas.Day.Icon]);
  const temperatureValue = props.searchedForecas?.Temperature.Maximum.Value;
  const temperatureUnit = props.searchedForecas?.Temperature.Maximum.Unit;

  return (
    <ContainerForecast>
      <CardBodyForecast>
          <p className="weather-data-day">{date}</p>
          <Space size={5}>
            <Image
              width={40}
              src={iconUrlForForecastCard}
              preview={false}
            />
            <div className="weather-data-forecast">
              <h5 className="weather-data-forecast-temp"> {temperatureValue}{temperatureUnit}</h5>
            </div>
          </Space>
        </CardBodyForecast>
    </ContainerForecast>
  );
}

export default CardsForForecast;