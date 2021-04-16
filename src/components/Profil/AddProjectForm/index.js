import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/components/Assets/Button';
import Input from './Input';
import Radio from './Radio';
// import TextArea from 'src/components/Assets/TextArea';
// import Dropdown from 'src/components/Assets/DropDown';
// import Radio from 'src/components/Assets/Radio';

import './style.scss';

const AddProjectForm = ({
  name,
  description,
  youtube,
  github,
  prod,

  changeInpuValue,
  createProject,

  projectCreated,
  ErrorOnTheProjectCreation,
}) => {
  const handleSubmit = () => {
    createProject();
  };

  return (
    <form action="" className="formSubscribe">
      {!projectCreated
        && (
        <div>
          <div className="formSubscribe__fields">
            <Input
              inputColor="dark"
              isLabel
              label="NOM"
              placeholder="Nom du projet"
              type="text"
              name="name"
              className={`formSubscribe__fields--input ${ErrorOnTheProjectCreation ? 'error' : ''}`}
              value={name}
              onChange={changeInpuValue}
            />
            <Input
              inputColor="dark"
              isLabel
              label="DESCRIPTON"
              placeholder="Décrivez votre projet"
              type="text"
              name="description"
              className={`formSubscribe__fields--input ${ErrorOnTheProjectCreation ? 'error' : ''}`}
              value={description}
              onChange={changeInpuValue}
            />
            <Input
              inputColor="dark"
              isLabel
              label="YOUTUBE"
              placeholder="lien youtube"
              type="text"
              name="youtube"
              className={`formSubscribe__fields--input ${ErrorOnTheProjectCreation ? 'error' : ''}`}
              value={youtube}
              onChange={changeInpuValue}
            />
            <Input
              inputColor="dark"
              isLabel
              label="GITHUB"
              placeholder="lien github"
              type="text"
              name="github"
              className={`formSubscribe__fields--input ${ErrorOnTheProjectCreation ? 'error' : ''}`}
              value={github}
              onChange={changeInpuValue}
            />
            <Input
              inputColor="dark"
              isLabel
              label="PRODUCTION"
              placeholder="lien de production"
              type="text"
              name="prod"
              className={`formSubscribe__fields--input ${ErrorOnTheProjectCreation ? 'error' : ''}`}
              value={prod}
              onChange={changeInpuValue}
            />
            <Radio
              isLabel
              label="PROJET D'APOTHÉOSE"
              name="is_apotheose"
              className="formSubscribe__fields--input"
              options={[{ id: 0, value: 'true', name: 'Oui' }, { id: 1, value: 'false', name: 'Non' }]}
              changeOneChoiceValue={changeInpuValue}
            />
          </div>
          {ErrorOnTheProjectCreation && (
            <div className="errorText">Oops, je crois qu'il y a une erreur quelque part</div>
          )}
          <div className="formSubscribe__control">
            <Button
              text="CRÉER"
              buttonColor="dark"
              isPlain
              type="button"
              className="formSubscribe__control--button"
              onClick={handleSubmit}
            />
          </div>
        </div>
        )}
      {projectCreated
        && (
          <div className="CreatiionOk">Ton projet à bien été créé !</div>
        )}
    </form>
  );
};

AddProjectForm.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  prod: PropTypes.string.isRequired,

  changeInpuValue: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,

  projectCreated: PropTypes.bool.isRequired,
  ErrorOnTheProjectCreation: PropTypes.bool.isRequired,
};

export default AddProjectForm;
