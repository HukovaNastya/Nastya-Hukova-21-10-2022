import React from 'react';
import { Input} from 'antd';

const Search = () => {
  const { Search } = Input;
  const onSearch = value => console.log(value);
  return(
    <div>
      <Search
        placeholder="input search city weather"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: 800, margin: '60px 0px 0px 280px'}}
      />
    </div>
  )
}

export default Search;
