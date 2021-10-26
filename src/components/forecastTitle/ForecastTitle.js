import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const SectionTitle = styled(Typography)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 54px;
  line-height: 36px;

  @media (min-width: 350px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    margin-top: 20px;
  }

  @media (min-width: 520px) {
    font-weight: 700;
    font-size: 19px;
    line-height: 14px;
    margin-top: 30px;
    margin-left: 20px;
  }

`;

const ForecastTitle = ( ) => {
  const { Title } = Typography;
  return (
    <div className="container">
      <SectionTitle  style={{ color: '#5467b8', margin: '80px 0 0 500px'}}>
        Five Days Forecast
      </SectionTitle >
    </div>
  );
}

export default ForecastTitle;