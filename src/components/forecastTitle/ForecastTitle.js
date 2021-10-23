import React from 'react';
import { Typography } from 'antd';

const ForecastTitle = ( ) => {
  const { Title } = Typography;
  return (
    <div className="container">
       <Title className="header-title" style={{ color: '#5467b8', margin: '80px 0 0 550px'}}>
         Five Days Forecast
       </Title>
    </div>
  );
}

export default ForecastTitle;