import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink, useLocation, Link,
} from 'react-router-dom';

import Button from 'src/components/Assets/Button';
import logo from 'src/assets/img/logo.png';
import Form from 'src/components/Form';
import LoginForm from 'src/containers/Header/LoginForm';
import SubscribeForm from 'src/containers/Header/SubscribeForm';

import { GoThreeBars, GoPerson } from 'react-icons/go';

import './style.scss';

const Header = ({ logged, logout }) => {
  // définition du state
  const [isMenu, setMenu] = useState(true);
  const [headerActualizeMobile, setHeaderActualizeMobile] = useState(false);
  const [isOpenLoginForm, setisOpenLoginForm] = useState(false);
  const [isOpenSubscribeForm, setisOpenSubscribeForm] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [offset, setOffset] = useState(0);

  // function pour activer desactiver l'affichage du menu avec le buger menu
  const handleMenu = () => {
    setMenu(!isMenu);
  };

  // verifie que losque arrive sur le site en version mobile le menu n'est pas affiché par défaut
  if (window.innerWidth <= 1200 && isMenu === true && headerActualizeMobile === false) {
    setMenu(false);
    setHeaderActualizeMobile(true);
  }

  useEffect(() => {
    // fonction qui permet de connaitre le scroll de la page
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    // fonction qui permet de gérer l'affichage du menu en responseive
    window.onresize = () => {
      if (window.innerWidth <= 1200 && isMenu === true) {
        setMenu(false);
      }

      if (window.innerWidth >= 1200) {
        setMenu(true);
      }
    };

    if (logged) {
      setisOpenLoginForm(false);
    }
  });

  // fonction qui permet de gérer l'affichage du formilaire de connexion
  const handleCloseLoginForm = () => {
    setisOpenLoginForm(!isOpenLoginForm);
  };

  // fonction qui permet de gérer l'affichage du formilaire d'inscription
  const handleCloseSubscribeForm = () => {
    setisOpenSubscribeForm(!isOpenSubscribeForm);
  };

  // fonction qui permet de gérer la fermeture du menu au click sur un lien
  const handleCloseMenuOnClickALink = () => {
    if (window.innerWidth <= 1200) {
      setMenu(!isMenu);
    }
  };

  const location = useLocation().pathname;
  const headerColor = () => {
    if (location === '/nos-etudiants' || location === '/nos-projets') {
      return ('orange-background');
    }
    if (location.substr(0, 13) === '/nos-projets/') {
      return ('green-background');
    }
    if (location.substr(0, 15) === '/nos-etudiants/') {
      return ('yellow-background');
    }
    if (window.pageYOffset < 849) {
      return ('default');
    }
    if (window.pageYOffset >= 850 && window.pageYOffset < 2219) {
      return ('green-background');
    }
    if (window.pageYOffset >= 2200) {
      return ('orange-background');
    }
    return ('default');
  };

  return (
    <header className={`header ${headerColor()}`}>
      <div className={`header__left ${headerColor()}`}>

        {isOpenLoginForm && (
        <Form title="CONNEXION" handleClose={handleCloseLoginForm}>
          <LoginForm />
        </Form>
        )}

        {isOpenSubscribeForm && (
        <Form title="S'INSCRIRE" handleClose={handleCloseSubscribeForm}>
          <SubscribeForm />
        </Form>
        )}

        <div className="header__left--burgerMenu" onClick={handleMenu}>
          <GoThreeBars size="1.7em" />
        </div>
        <div className="header__left--logo">
          <NavLink exact to="/">
            <img src={logo} alt="logo" className="header__left--logo-image" />
          </NavLink>
        </div>
      </div>
      { isMenu && (
      <nav className={`header__nav ${headerColor()}`}>
        <ul className="header__nav--list">
          <li className="header__nav--list-link" onClick={handleCloseMenuOnClickALink}>
            <NavLink
              exact
              to="/"
              className="header__nav--list-link_text"
              activeClassName="selected"
            >
              Accueil
            </NavLink>
          </li>
          <li className="header__nav--list-link" onClick={handleCloseMenuOnClickALink}>
            <NavLink
              exact
              to="/nos-projets"
              activeClassName="selected"
              className="header__nav--list-link_text"
            >
              Projet
            </NavLink>
          </li>
          <li className="header__nav--list-link" onClick={handleCloseMenuOnClickALink}>
            <NavLink
              exact
              to="/nos-etudiants"
              activeClassName="selected"
              className="header__nav--list-link_text"
            >
              Etudiants
            </NavLink>
          </li>
          <li className="header__nav--list-link">
            <a href="https://oclock.io/" className="header__nav--list-link_text">L'école O'clock</a>
          </li>
        </ul>
        {!logged && (
        <div className="header__nav--connect">
          <Button
            text="JE ME CONNECTE"
            isPlain={false}
            buttonColor="light"
            className="header__nav--connect-button"
            onClick={handleCloseLoginForm}
          />
          <a className="header__nav--connect-subscribe" onClick={handleCloseSubscribeForm}>JE M'INSCRIS</a>
        </div>
        )}
        {logged && (
        <div className="header__nav--connect">
          <Button
            text="DÉCONNEXION"
            isPlain={false}
            buttonColor="light"
            className="header__nav--connect-button"
            onClick={logout}
          />
          <p className="goodmorning">Bonjour, {sessionStorage.getItem('user_firstname')}</p>
          <button type="button" className="button__profil">
            <Link
              to={`/nos-etudiants/${sessionStorage.getItem('user_id')}`}
              className="header__connect--subscribe link-account"
            >
              <GoPerson size="1.6em" />
            </Link>
          </button>
        </div>
        )}
      </nav>
      )}
      {!logged && (
      <div className="header__connect">
        <a className="header__connect--subscribe" onClick={handleCloseSubscribeForm}>JE M'INSCRIS</a>
        <Button
          text="JE ME CONNECTE"
          isPlain={false}
          buttonColor="light"
          className="header__connect--button"
          onClick={handleCloseLoginForm}
        />
      </div>
      )}
      {logged && (
      <div className="header__connect">
        <p className="goodmorning">Bonjour, {sessionStorage.getItem('user_firstname')}</p>
        <button type="button" className="button__profil">
          <Link
            to={`/nos-etudiants/${sessionStorage.getItem('user_id')}`}
            className="header__connect--subscribe link-account"
          >
            <GoPerson size="1.6em" />
          </Link>
        </button>
        <Button
          text="DÉCONNEXION"
          isPlain={false}
          buttonColor="light"
          className="header__connect--button"
          onClick={logout}
        />
      </div>
      )}
    </header>
  );
};

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
