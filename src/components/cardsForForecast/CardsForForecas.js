import React from 'react';
import { Card, Image, Space  } from 'antd';
import styled from 'styled-components';
import {iconUrl} from '../../Services/Index';

const ContainerForecast = styled.div`
  max-width: 1200px;
  margin-left: 150px;
`;

const CardBodyForecast = styled(Card)`
  width: 160px;
  height: 200px;
  border-radius: 10%;
  margin: 40px 0 0 0px ;
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

const CardsForForecas = (props) => {

  const date = new Date(props.searchedForecas.Date).toLocaleDateString()

  return (
    <ContainerForecast>
      <CardBodyForecast>
          <p className="weather-data-day">{date}</p>
          <Space size={35}>
            <Image
              width={40}
              src={iconUrl(props.searchedForecas.Day.Icon)}
              preview={false}
            />
            <div className="weather-data-forecast">
              <h5 className="weather-data-forecast-temp"> {props.searchedForecas?.Temperature.Maximum.Value}{props.searchedForecas?.Temperature.Maximum.Unit}</h5>
            </div>
          </Space>
        </CardBodyForecast>
    </ContainerForecast>
  );
}

export default CardsForForecas;