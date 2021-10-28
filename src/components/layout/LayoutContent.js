import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../Header/AppHeader';
import styled from 'styled-components';

const { Content, Header } = Layout;

const StyledLayout = styled(Layout)`
  background-color: #fff;
`;

const StyledContent = styled(Content)`
  width: 80%;
  margin: 0 auto;
  min-height: calc(100vh - 56px);
  background-color: transparent;
`;

const LayoutContent = ({ children }) => {
  return (
    <StyledLayout>
      <AppHeader />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
};

export default LayoutContent;
