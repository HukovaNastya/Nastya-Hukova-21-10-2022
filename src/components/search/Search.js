import React, { useState } from 'react';
import { Input } from 'antd';
import { getSearchedWeather } from '../../Store/Actions/WeatherActions';
import { useDispatch } from "react-redux";
import './Search.css';

const Search = () => {

  const [text, setText] = useState('')
  const dispatch = useDispatch();
  const { Search } = Input;

  const onSearch = (value) => {
    dispatch(getSearchedWeather(value))
    setText('')
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
