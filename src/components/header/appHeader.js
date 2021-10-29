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
        <Button size="large" onClick={redirectToHomePage} type={activeLink === NAV_LINKS.home ? "primary": "default"}>
          Home
        </Button>
        <Button size="large" onClick={redirectToFavouritesPage} type={activeLink === NAV_LINKS.favourites ? "primary": "default"}>
          Favorites
        </Button>
      </Space>
    </StyledHeader>
  );
};

export default AppHeader
