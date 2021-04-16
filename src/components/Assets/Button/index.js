/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Button = ({
  text,
  isPlain,
  buttonColor,
  className,
  onClick,
  type,
  isLink,
  link,
}) => (
  <div>
    {!isLink && (
    <button
      onClick={onClick}
      type={type}
      className={`btn-${buttonColor}${isPlain ? '-plain' : ''} ${className}`}
    >{text}
    </button>
    )}
    {isLink && (
    <Link
      to={link}
      className={`btn-${buttonColor}${isPlain ? '-plain' : ''} ${className}`}
    >{text}
    </Link>
    )}
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isPlain: PropTypes.bool.isRequired,
  buttonColor: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isLink: PropTypes.bool,
  link: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  isLink: false,
  link: '',
  onClick: () => {
    console.log('');
  },
};

export default Button;
