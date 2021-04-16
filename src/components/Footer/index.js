import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'src/components/Assets/Button';
import Form from 'src/components/Form';
import Contact from './Contact';
import './style.scss';

const Footer = () => {
  // definition du state
  const [isOpenContact, setisOpenContact] = useState(false);

  // fonction qui permet de gérer l'affichage du formulaire de contact
  const handleCloseContact = () => {
    window.scrollTo(0, 0);
    setisOpenContact(!isOpenContact);
  };

  return (
    <footer className="footer">
      <Link to="/team"><Button text="TEAM" isPlain={false} buttonColor="light" className="footer__button" /></Link>
      <Link to="/CGU"><Button text="CGU" isPlain={false} buttonColor="light" className="footer__button" /></Link>
      <Link to="/mentions"><Button text="MENTIONS LÉGALES" isPlain={false} buttonColor="light" className="footer__button" /></Link>
      <Link to="/coockies"><Button text="COOKIES" isPlain={false} buttonColor="light" className="footer__button" /></Link>
      <Button
        text="CONTACT"
        isPlain={false}
        buttonColor="light"
        className="footer__button"
        onClick={handleCloseContact}
      />{isOpenContact && (
        <Form title="CONTACT" handleClose={handleCloseContact} className="contact_form">
          <Contact />
        </Form>
      )}
    </footer>
  );
};

export default Footer;
