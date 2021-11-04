import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Space, Typography, Button } from 'antd';
import { Layout } from 'antd';
import './appHeader.css';
const { Header } = Layout;


const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;
const StyledNavLink = styled(NavLink )`


`;

const StyledTitle = styled(Typography)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 26px;

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
  }

`;

const AppHeader = () => {

  return (
    <StyledHeader>
      <StyledTitle style={{ color: '#5467b8' }}>Herolo weather task</StyledTitle>
      <Space size={20}>
        <StyledNavLink  to ={`/home`} activeClassName="active">Home</StyledNavLink>
         <StyledNavLink to={`/favorite`} activeClassName="active">Favorites</StyledNavLink>
      </Space>
    </StyledHeader>
  );
};

export default AppHeader;
