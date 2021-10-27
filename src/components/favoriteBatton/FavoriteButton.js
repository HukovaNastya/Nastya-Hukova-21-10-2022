import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const AddFavoriteButton = styled (Button)`
  margin-top: 90px;
  margin-left: 190px;
  @media (max-width: 1000px) {
    margin-top: 90px;
    margin-left: 190px;
  }

  @media (max-width: 780px) {
    margin-top: 90px;
    margin-left: 150px;
  }
  @media (max-width: 505px) {
    margin-top: 90px;
    margin-left: 20px;
  }
`;

const FavoriteButton = ({ onClick }) => {
  return (
    <div className="container">
      <AddFavoriteButton  type="dashed" size="large"  onClick={onClick}>Add to Favorites</AddFavoriteButton >
    </div>
  );
}

export default FavoriteButton;