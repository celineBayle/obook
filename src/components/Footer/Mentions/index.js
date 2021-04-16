import React, {useEffect} from 'react';
import policeman from 'src/assets/img/policeman.png';
import logo from 'src/assets/img/logo.png';
import './style.scss';

const Mentions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
  <div className="mentions">
    <h1 className="mentions__title">Mentions Légales</h1>
    <p>A forciori, vos papiers s'il vous plait </p>
    <div className="mentions__img">
      <img src={policeman} alt="policeman" className="mentions__policeman" />
      <img src={ logo } alt="logo" className="mentions__logo" />
    </div>
  </div>
  );
};

export default Mentions;
