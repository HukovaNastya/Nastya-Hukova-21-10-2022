import React from 'react';
import { Card, Image, Button, Space , Row } from 'antd';
import './CardsForForecas.css';
import weatherToday from '../../img/weatherToday.svg';

const CardsForForecas = ( ) => {
  return (
    <div className="container-forecast">
      <Row justify="center" gutter={12}>
      <Card  className='card-body-forecast'  >
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <p className="weather-data-forecast-temp"> 38F</p>
            </div>
          </Space>
        </Card>
        <Card  className='card-body-forecast'  >
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <p className="weather-data-forecast-temp"> 38F</p>
            </div>
          </Space>
        </Card>
        <Card  className='card-body-forecast'  >
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <p className="weather-data-forecast-temp"> 38F</p>
            </div>
          </Space>
        </Card>
        <Card  className='card-body-forecast'  >
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <p className="weather-data-forecast-temp"> 38F</p>
            </div>
          </Space>
        </Card>
        <Card  className='card-body-forecast'  >
          <p className="weather-data-day">Mn</p>
          <Space size={35}>
            <Image
              width={40}
              src={weatherToday}
              preview={false}
            />
            <div className="weather-data-forecast">
              <p className="weather-data-forecast-temp"> 38F</p>
            </div>
          </Space>
        </Card>
      </Row>
    </div>
  );
}

export default CardsForForecas;