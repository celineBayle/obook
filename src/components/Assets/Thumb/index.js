import React from 'react';

import Button from 'src/components/Assets/Button';
import thumb from 'src/assets/img/thumb.jpg';

import './style.scss';

const Thumb = () => (
  <div className="thumb">
    <img className="thumb__img" src={thumb} alt="vignette du projet" />
    <p className="thumb__name">nom super long du projet</p>
    <Button text="Voir le projet" isPlain buttonColor="light" className="thumb__button" />
  </div>
);

export default Thumb;
