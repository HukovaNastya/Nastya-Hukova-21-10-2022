import React from 'react';
import { Card, Image, Space , Row } from 'antd';
import weatherToday from '../../img/weatherToday.svg';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const ContainerForecast = styled.div`
  max-width: 1200px;
  margin-left: 150px;
`;

const CardBodyForecast = styled(Card)`
  width: 160px;
  height: 200px;
  border-radius: 10%;
  margin: 40px 0 0 20px ;
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

const CardsForForecas = ( ) => {
  const {searchedForecast, city} = useSelector(state => state.weather);

  return (
    <ContainerForecast>
      <Row justify="center" gutter={12}>
      <CardBodyForecast>
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <h5 className="weather-data-forecast-temp"> 38F</h5>
            </div>
          </Space>
        </CardBodyForecast>
        <CardBodyForecast>
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <h5 className="weather-data-forecast-temp"> 38F</h5>
            </div>
          </Space>
        </CardBodyForecast>
        <CardBodyForecast>
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <h5 className="weather-data-forecast-temp"> 38F</h5>
            </div>
          </Space>
        </CardBodyForecast>
        <CardBodyForecast>
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <h5 className="weather-data-forecast-temp"> 38F</h5>
            </div>
          </Space>
        </CardBodyForecast>
        <CardBodyForecast>
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <h5 className="weather-data-forecast-temp"> 38F</h5>
            </div>
          </Space>
        </CardBodyForecast>
      </Row>
    </ContainerForecast>
  );
}

export default CardsForForecas;