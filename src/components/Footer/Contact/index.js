import React from 'react';

import TextArea from 'src/components/Assets/TextArea';
import Button from 'src/components/Assets/Button';

import Input from 'src/components/Assets/Input';

import './style.scss';

const Contact = () => (
  <div className="contact">
    <Input
      value=""
      inputColor="dark"
      isLabel
      label="PRENOM"
      placeholder="Votre prénom"
      type="text"
      name="firstname"
      className="contact__input--firstname"
    />
    <Input
      value=""
      inputColor="dark"
      isLabel
      label="NOM"
      placeholder="Votre nom"
      type="text"
      name="name"
      className="contact__input--name"
    />
    <Input
      value=""
      inputColor="dark"
      isLabel
      label="MAIL"
      placeholder="Votre Mail"
      type="email"
      name="mail"
      className="contact__input--email"
    />
    <TextArea
      value=""
      inputColor="dark"
      isLabel
      label="MESSAGE"
      placeholder="Votre Message"
      type="text"
      name="text"
      className="contact__input--message"
    />

    <Button
      text="ENVOYER"
      buttonColor="dark"
      isPlain
      type="button"
      className="contact__submit"
    />
  </div>
);

export default Contact;
