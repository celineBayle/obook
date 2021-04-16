import React, {useEffect} from 'react';
import coockie from 'src/assets/img/coockie.png';

import './style.scss';

const Coockies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
  <div className="coockies">
    <h1 className="coockies__title">Ici on t'informe sur les :</h1>
    <div className="coockies__img">
      <img src={coockie} alt="Coockie" className="coockies__coockie" />
    </div>
  </div>
);
};

export default Coockies;
