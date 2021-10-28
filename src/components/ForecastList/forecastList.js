import React from 'react';
import { useSelector } from 'react-redux';
import CardsForForecas from '../cardsForForecast/cardsForForecas';
import { Row } from 'antd';


const ForecastList = ( ) => {

  const {searchedForecast} = useSelector(state => state.weather);

  return (
    <div>
      <Row justify="center" gutter={12}>
        {searchedForecast.map((searchedForecas) =>
          (<CardsForForecas
             searchedForecas = {searchedForecas}
             key = {searchedForecas.id}
           />
          ))
        }
      </Row>
    </div>
  );
}

export default ForecastList;
