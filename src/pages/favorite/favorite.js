import React from 'react';
import { Row, Col } from 'antd';
import {useSelector} from 'react-redux';
import WeatherCard from "../../components/weatherCard/weatherCard";
import FavoriteButton from "../../components/favoriteBatton/favoriteButton";

const Favorite = () => {
    const { favoriteForecasts } = useSelector((state) => state.favorites)

    return (
      <div className="weather-card-wrap" style={{margin: '80px 0px 0px 0px'}}>
        <Row justify="center" gutter={48}>
          {favoriteForecasts.map((favorite, index) =>
            (
              <Col key={index} >
                <WeatherCard
                   searchedForecast={favorite.weather}
                   city={favorite.city.name}
                />
                <div style={{ "margin-top": 20 }}>
                   <FavoriteButton currentCityKey={favorite.city.key}/>
                 </div>
              </Col>
            ))
            }
          </Row>
        </div>
    );
};

export default Favorite;
