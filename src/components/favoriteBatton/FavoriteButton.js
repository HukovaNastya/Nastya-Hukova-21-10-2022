import React from 'react';
import {  Button } from 'antd';
import styled from 'styled-components';

const AddFavoriteButton = styled (Button)`


`;

const FavoriteButton = ( ) => {
  return (
    <div className="container">
      <AddFavoriteButton  type="dashed" size="large">Add to Favorites</AddFavoriteButton >
    </div>
  );
}

export default FavoriteButton;