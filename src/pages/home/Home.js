import React from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';

const Home = ( ) => {
  return (
    <div className="container">
      <Header></Header>
      <div className="container">
        <Search></Search>
      </div>
    </div>
  );
}

export default Home;
