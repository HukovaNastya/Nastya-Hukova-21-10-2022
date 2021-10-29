import React, {useMemo, useState} from 'react';
import {AutoComplete, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import './search.css';
import {searchCities, setSelectedCity} from "../../store/actions/citiesActions";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const { citiesList } = useSelector((store) => store.cities )
  const options = useMemo(() => {
    return citiesList.map((city) => ({ label: city.LocalizedName, value: city.Key }))
  }, [citiesList])

  const dispatch = useDispatch();

  const onSelect = (value) => {
    const selectedOption = options.find(option => option.value === value)
    setSearchValue(selectedOption.label)
    dispatch(setSelectedCity({ name: selectedOption.label, key: selectedOption.value }))
    props.onSearchSelect(selectedOption)
  }

  const onChange = (value) => {
    setSearchValue(value)
  }

  const onSearch = (value) => {
    if (value.trim().length > 0) {
      dispatch(searchCities(value))
    }
  }

  return(
    <div className="search-wrap">
      <AutoComplete
        className="weather-search"
        value={searchValue}
        onSelect={onSelect}
        onChange={onChange}
        options={options}
      >
        <Input.Search size="large" placeholder="Input city" enterButton onSearch={onSearch} allowClear={true}/>
      </AutoComplete>
    </div>
  )
}

export default Search;
