import React, { useEffect } from "react";
import styled from 'styled-components';
import Search from '../../components/search/search';
import WeatherCard from '../../components/weatherCard/weatherCard';
import FavoriteButton from '../../components/favoriteBatton/favoriteButton';
import {Alert, Space} from 'antd';
import ForecastTitle from '../../components/forecastTitle/forecastTitle';
import { Row } from 'antd';
import ForecastList from '../../components/ForecastList/forecastList';
import { getCityWeatherByKey } from '../../store/actions/weatherActions';
import {useDispatch, useSelector} from "react-redux";
import {setSelectedCity} from "../../store/actions/citiesActions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const DEFAULT_CITY_KEY = "215854"
const DEFAULT_CITY_NAME = "Tel Aviv"

const Home = () => {
  const dispatch = useDispatch();
  const { searchedForecast } = useSelector(state => state.weather);
  const { selectedCity } = useSelector(state => state.cities);

  useEffect(() => {
    dispatch(setSelectedCity({ name: DEFAULT_CITY_NAME, key: DEFAULT_CITY_KEY }))
    dispatch(getCityWeatherByKey(DEFAULT_CITY_KEY))
  }, [])

  const onSearchSelect = (selectedCity) => {
    dispatch(getCityWeatherByKey(selectedCity.value))
  }

  return (
    <Wrapper>
      <Search onSearchSelect={onSearchSelect} />
        { selectedCity ? (
            <>
              <div>
                <Row justify="space-between" gutter={12} >
                  <div style={{margin: '20px 0px 0px 200px'}}>
                    <WeatherCard searchedForecast={searchedForecast} city={selectedCity.name}/>
                  </div>

                    <FavoriteButton currentCityKey={selectedCity.key} />

                </Row>
              </div>
              <div>
               <ForecastTitle/>
              </div>
              <div>
                <ForecastList searchedForecast={searchedForecast}/>
              </div>
            </>
        ) : (
            <div style={{width: "100%"}}>
              <Alert message="No city selected" type="info" />
            </div>
        ) }
    </Wrapper>
  );
};

export default Home;

