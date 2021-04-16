import React, { useState } from 'react';

import Input from 'src/components/Assets/Input';
import Button from 'src/components/Assets/Button';
import TextArea from 'src/components/Assets/TextArea';
// import Dropdown from 'src/components/Assets/DropDown';
// import Radio from 'src/components/Assets/Radio';

import './style.scss';

const SubscribeForm = () => {
  const [currentPage, setCurrentPage] = useState(false);
  const handleChangeSubscribePage = () => {
    setCurrentPage(!currentPage);
  };

  return (
    <form action="" className="formSubscribe">
      <div className="formSubscribe__fields">
        <Input
          inputColor="dark"
          isLabel
          label="NOM"
          placeholder="Votre nom"
          type="text"
          name="lastname"
          className={`formSubscribe__fields--input ${currentPage ? 'error' : ''}`}
          value={sessionStorage.getItem('user_lastname')}
        />
        <Input
          inputColor="dark"
          isLabel
          label="PRÉNOM"
          placeholder="Votre prénom"
          type="text"
          name="firstname"
          className={`formSubscribe__fields--input ${currentPage ? 'error' : ''}`}
          value={sessionStorage.getItem('user_firstname')}
        />
        <Input
          inputColor="dark"
          isLabel
          label="MAIL"
          placeholder="Votre Mail"
          type="mail"
          name="mail"
          className={`formSubscribe__fields--input ${currentPage ? 'error' : ''}`}
          value={sessionStorage.getItem('user_email')}
        />
        <TextArea
          inputColor="dark"
          isLabel
          label="DESCRIPTION DE TON PROFIL"
          placeholder="D'écrit toi en quelque mots ;)"
          type="text"
          name="lastname"
          className={`formSubscribe__fields--input ${currentPage ? 'error' : ''}`}
          value={sessionStorage.getItem('user_story')}
        />
      </div>
      <Input
        inputColor="dark"
        isLabel
        label="CHANGER DE MOT DE PASSE "
        placeholder="Entre ton nouveau mot de passe ici"
        type="password"
        name="password"
        className={`formSubscribe__fields--input ${currentPage ? 'error' : ''}`}
      />
      {currentPage && (
        <div className="errorText">"Tu n'as rien à modifier ! Passe à la suite de la présentation"</div>
      )}
      <div className="formSubscribe__control">
        <Button
          text="ENVOYER"
          buttonColor="dark"
          isPlain
          type="button"
          className="formSubscribe__control--button"
          onClick={handleChangeSubscribePage}
        />
      </div>
    </form>
  );
};

export default SubscribeForm;
