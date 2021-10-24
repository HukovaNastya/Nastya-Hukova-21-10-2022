import React from 'react';
import { Card, Image, Space  } from 'antd';
import './WeatherCard.css';
import weatherToday from '../../img/weatherToday.svg';

const WeatherCard = ( ) => {
  return (
    <div className="container">
      <Card  className='card-body-weather'  >
        <Space size={32}>
          <Image
            width={100}
            src={weatherToday}
            preview={false}
           />
          <div className="weather-data">
            <p className="weather-data-city"><span>City:</span> Санкт-Петербург</p>
            <p className="weather-data-temp"><span>Temperature:</span> 38F</p>
          </div>
        </Space>
      </Card>
    </div>
  );
}

export default WeatherCard;