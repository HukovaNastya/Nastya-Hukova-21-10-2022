import React from 'react';
import CardsForForecast  from '../cardsForForecast/cardsForForecas';
import { Row, Col } from 'antd';


const ForecastList = ({ searchedForecast }) => {
  return (
    <div>
      <Row justify="center" gutter={12}>
        {searchedForecast.map((item, index) =>
          (
            <Col key={index}>
              <CardsForForecast searchedForecas={item} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default ForecastList;