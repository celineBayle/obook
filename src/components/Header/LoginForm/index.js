import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Input from './Input';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,

  ErrorOnSubmitLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <form action="" className="formLogin" onSubmit={handleSubmit}>
      <Input
        value={email}
        inputColor="dark"
        isLabel
        label="MAIL"
        placeholder="Votre Mail"
        type="mail"
        name="email"
        className={`formLogin__input ${ErrorOnSubmitLogin ? 'error' : ''}`}
        onChange={changeField}
      />
      <Input
        value={password}
        inputColor="dark"
        isLabel
        label="Mot de passe"
        placeholder="Votre mot de passe"
        type="password"
        name="password"
        className={`formLogin__input ${ErrorOnSubmitLogin ? 'error' : ''}`}
        onChange={changeField}
      />
      {ErrorOnSubmitLogin && (
        <div className="errorText">Ton mot de passe ou ton mail n'est pas correct</div>
      )}
      <Button
        text="ME CONNECTER"
        buttonColor="dark"
        isPlain
        type="submit"
        className="formLogin__button"
      />
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,

  ErrorOnSubmitLogin: PropTypes.bool.isRequired,
};

export default LoginForm;
