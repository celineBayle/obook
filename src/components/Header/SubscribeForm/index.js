import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from 'src/components/Assets/Button';
import Dropdown from './DropDown';
import Radio from './Radio';
import TextArea from './TextArea';
import Input from './Input';

import './style.scss';

const SubscribeForm = ({
  subscribe,
  changeField,
  fetchSpe,
  fetchTechno,
  fetchContract,
  changeOneChoiceValue,
  changeMultichoiceValue,

  listOfSpe,
  listOfTechno,
  listOfContract,

  email,
  password,
  lastname,
  firstname,
  description,

  subscribed,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSpe();
    fetchTechno();
    fetchContract();
  }, []);

  const handleChangeSubscribePage = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
    }
    else {
      setCurrentPage(1);
    }
  };
  // console.log(listOfTechno, orientation, fetchContract, listOfContract);

  return (
    <form action="" className="formSubscribe">
      <div className="formSubscribe__stape"><p>Étape {currentPage}/2</p></div>
      {currentPage === 1 && !subscribed && (
      <div className="formSubscribe__fields">
        <Input
          inputColor="dark"
          isLabel
          label="NOM"
          placeholder="Votre nom"
          type="text"
          name="lastname"
          className="formSubscribe__fields--input"
          onChange={changeField}
          value={lastname}
        />
        <Input
          inputColor="dark"
          isLabel
          label="PRÉNOM"
          placeholder="Votre prénom"
          type="text"
          name="firstname"
          className="formSubscribe__fields--input"
          onChange={changeField}
          value={firstname}
        />
        <Input
          inputColor="dark"
          isLabel
          label="MAIL"
          placeholder="Votre Mail"
          type="mail"
          name="email"
          className="formSubscribe__fields--input"
          onChange={changeField}
          value={email}
        />
        <Input
          inputColor="dark"
          isLabel
          label="MOT DE PASSE"
          placeholder="Votre mot de passe"
          type="password"
          name="password"
          className="formSubscribe__fields--input"
          onChange={changeField}
          value={password}
        />
      </div>
      )}

      {currentPage === 2 && !subscribed && (
        <div className="formSubscribe__fields">
          <TextArea
            inputColor="dark"
            isLabel
            label="DESCRIPTION DE TON PROFIL"
            placeholder="D'écrit toi en quelque mots ;)"
            type="text"
            name="description"
            className="formSubscribe__fields--input"
            onChange={changeField}
            value={description}
          />
          <Dropdown
            inputColor="dark"
            isLabel
            label="VOS TECHNOS"
            placeholder="Choisissez "
            type="text"
            name="technos"
            className="formSubscribe__fields--input"
            options={listOfTechno}
            changeMultichoiceValue={changeMultichoiceValue}
          />
          <Radio
            isLabel
            label="SPÉCIALITÉ"
            name="orientation"
            className="formSubscribe__fields--input"
            options={listOfSpe}
            changeOneChoiceValue={changeOneChoiceValue}
          />
          <Radio
            isLabel
            label="ÊTES VOUS EN RECHERCHE D'EMPLOI ?"
            name="is_search_job"
            className="formSubscribe__fields--input"
            options={[{ id: 0, name: 'Oui', value: true }, { id: 1, name: 'Non', value: false }]}
            changeOneChoiceValue={changeOneChoiceValue}
          />
          <Dropdown
            inputColor="dark"
            isLabel
            label="QUELS TYPES DE CONTRAT PRÉFÈRES-TU ?"
            placeholder="Choisissez"
            type="text"
            name="contract"
            className="formSubscribe__fields--input"
            options={listOfContract}
            changeMultichoiceValue={changeMultichoiceValue}
          />
        </div>
      )}

      {currentPage === 1 && !subscribed && (
      <div className="formSubscribe__control">
        <Button
          text="SUIVANT"
          buttonColor="dark"
          isPlain
          type="button"
          className="formSubscribe__control--button"
          onClick={handleChangeSubscribePage}
        />
      </div>
      )}
      {currentPage === 2 && !subscribed && (
      <div className="formSubscribe__control">
        <Button
          text="PRÉCÉDENT"
          buttonColor="dark"
          isPlain={false}
          type="button"
          className="formSubscribe__control--button"
          onClick={handleChangeSubscribePage}
        />
        <Button
          text="M'INSCRIRE"
          buttonColor="dark"
          isPlain
          type="button"
          className="subscribe formSubscribe__control--button"
          onClick={subscribe}
        />
      </div>
      )}

      {subscribed && (
        <h1>Parfait tu fais maintenant partit de l'équipe. Go te connecter</h1>
      )}

    </form>
  );
};

SubscribeForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  listOfSpe: PropTypes.array.isRequired,
  listOfTechno: PropTypes.array.isRequired,
  listOfContract: PropTypes.array.isRequired,

  changeField: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
  fetchSpe: PropTypes.func.isRequired,
  fetchTechno: PropTypes.func.isRequired,
  fetchContract: PropTypes.func.isRequired,
  changeOneChoiceValue: PropTypes.func.isRequired,
  changeMultichoiceValue: PropTypes.func.isRequired,

  subscribed: PropTypes.bool.isRequired,
};

export default SubscribeForm;
