import React, {useState} from 'react';
import  { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import { PageHeader, Space, Typography, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const StyledHeader = styled(PageHeader) `
  padding: 40px 0px;
  font-family: 'Montserrat', sans-serif;
`;

const StyledTitle = styled(Typography) `
  text-transform: uppercase;
  font-weight: 700;
  font-size: 26px;
`;

const Header = ( ) => {

  const { Title } = Typography;

  const history = useHistory();

  const [favorite, setFavorite]=useState(false)
  const [home, setHome]= useState(false)

  const homeClickHandler = () => {
    history.push('/');
    setHome(!home);
  }

  const favouriteClickHandler= () =>{
    history.push('/favorite')
    setFavorite(!favorite)
  }

  return (
    <div className="container">
      <StyledHeader
        extra={[
          <Space  align="center" size={760}>
            <StyledTitle style={{color: '#5467b8'}}>Herolo weather task</StyledTitle>
              <Space size={10}>
                <Button type="dashed" size="large" onClick={homeClickHandler} style={{backgroundColor: home == true  ? "green": ""}}>
                  Home
                 </Button>
                 <Button type="dashed" size="large" onClick={favouriteClickHandler} style={{backgroundColor: favorite ? "green": ""}}>
                    Favorites
                 </Button>
              </Space>
          </Space>
        ]}
      />
    </div>
  );
}

export default Header;

