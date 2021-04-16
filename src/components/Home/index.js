import React, { useEffect } from 'react';

import LastProducts from 'src/containers/Home/LastProducts';
import Search from './Search';
import Description from './Description';

import './style.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="homeContainer">
      <Search />
      <LastProducts />
      <Description />
    </div>
  );
};

export default Home;
