import React from 'react';
import { Input} from 'antd';
import {getSearchedWeather} from '../../store/actions/WeatherActions';
import { useDispatch } from "react-redux";
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const { Search } = Input;
  const onSearch = (value) => {
    dispatch(getSearchedWeather(value))
  }
  return(
    <div>
      <Search
        className="weather-search"
        placeholder="input search city weather"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: 800, margin: '60px 0px 0px 200px'}}
      />
    </div>
  )
}

export default Search;
