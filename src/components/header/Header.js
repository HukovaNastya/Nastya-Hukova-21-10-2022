import React, {useState} from 'react';
import  { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import { PageHeader, Space, Typography, Button } from 'antd';

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
      <PageHeader
        className="header"
        extra={[
          <Space  align="center" size={830}>
            <Title className="header-title">Herolo weather task</Title>
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
