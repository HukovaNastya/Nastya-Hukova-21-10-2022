import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Space, Typography, Button } from 'antd';
import { Layout } from 'antd';
const { Header } = Layout;

const NAV_LINKS = {
  home: 'home',
  favourites: 'favourites'
};

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

const StyledButton = styled(Button)`
  background-color: ${props => (props.bgColor ? '#4793ff' : '#fff')};
  border: none;
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
    margin-top: 30px;
  }

`;

const AppHeader = () => {
  const history = useHistory();

  const [activeLink, setActiveLink] = useState(NAV_LINKS.home);

  const redirectToHomePage = () => {
    setActiveLink(NAV_LINKS.home);
    history.push('/home');
  };

  const redirectToFavouritesPage = () => {
    setActiveLink(NAV_LINKS.favourites);
    history.push('/favorite');
  };

  return (
    <StyledHeader>
      <StyledTitle style={{ color: '#5467b8' }}>Herolo weather task</StyledTitle>
      <Space size={10}>
        <StyledButton size="large" onClick={redirectToHomePage} bgColor={activeLink === NAV_LINKS.home}>
          Home
        </StyledButton>
        <StyledButton size="large" onClick={redirectToFavouritesPage} bgColor={activeLink === NAV_LINKS.favourites}>
          Favorites
        </StyledButton>
      </Space>
    </StyledHeader>
  );
};

export default AppHeader;
