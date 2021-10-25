import React from 'react';
import styled from 'styled-components';
import WeatherCard from '../../components/weatherCard/WeatherCard';
import { Row } from 'antd';



const Favorite = () => {
  return (
    <div className="weather-card-wrap" style={{margin: '40px 0px 0px 0px'}}>
      <Row justify="center" gutter={12} >
        <WeatherCard/>
        <WeatherCard/>
      </Row>
    </div>
  );
};

export default Favorite;
