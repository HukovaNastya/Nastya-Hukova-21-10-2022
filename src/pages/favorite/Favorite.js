import React from 'react';
import styled from 'styled-components';
import WeatherCard from '../../components/weatherCard/WeatherCard';
import { Row } from 'antd';

const WeatherCardWrapper = styled.div`
  margin: 80px px 0px 0px;

`;


const Favorite = () => {
  return (
    <WeatherCardWrapper>
      <Row gutter={24}>
        <WeatherCard ></WeatherCard>
        <WeatherCard></WeatherCard>
      </Row>
    </WeatherCardWrapper>
  );
};

export default Favorite;
