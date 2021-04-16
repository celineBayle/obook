/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Button = ({
  text,
  className,
  link,
}) => (
  <Link
    to={link}
    className={`btncomponent ${className}`}
  >{text}
  </Link>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  link: '',
};

export default Button;
