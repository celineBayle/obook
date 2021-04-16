import React from 'react';
import Button from './Button';

import jsImg from '../../../assets/img/js.png';
import reactImg from '../../../assets/img/react.png';
import symfonyImg from '../../../assets/img/symfony.png';
import codeImg from '../../../assets/img/code.png';
import './style.scss';

const LastProducts = () => (
  <section className="search">
    <div className="search__content">
      <h1 className="search__content--bigTitle">Les étudiants o'clock sont vraiment les meilleurs</h1>
      <p className="search__content--subtitle">
        Les O'clockiens sont bourrés d’inspiration.
        Pour mettre en avant leurs talents nous avons
        décidé de créer une plate-forme qui leur est dédiée
      </p>
      <div action="" className="search__content--form">
        <Button isPlain buttonColor="light" text="NOS ETUDIANTS" className="search__content--form-btn studentbtn" link="/nos-etudiants" />
        <Button isPlain isLink buttonColor="light" text="NOS PROJETS" className="search__content--form-btn projectbtn" link="/nos-projets" />
      </div>
    </div>
    <img src={jsImg} alt="" className="search__content--image search__content--image-js" />
    <img src={reactImg} alt="" className="search__content--image search__content--image-react" />
    <img src={symfonyImg} alt="" className="search__content--image search__content--image-symfony" />
    <img src={codeImg} alt="" className="search__content--image search__content--image-code" />
  </section>
);

export default LastProducts;
