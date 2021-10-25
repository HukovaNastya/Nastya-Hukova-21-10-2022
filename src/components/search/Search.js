import React from 'react';
import { Input} from 'antd';
import {getSearchedWeather} from '../../store/actions/WeatherActions';
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const { Search } = Input;
  const onSearch = (value) => {
    dispatch(getSearchedWeather(value))
  }
  return(
    <div>
      <Search
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
