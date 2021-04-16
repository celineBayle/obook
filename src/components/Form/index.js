import React from 'react';
import PropTypes from 'prop-types';
import { GoX } from 'react-icons/go';

import './style.scss';

const Form = ({ children, title, handleClose }) => (
  <div className="theForm">
    <div className="backgroud">
      <div className="popUpContainer">
        <div className="popUpContainer__close" onClick={handleClose}>
          <GoX size="1.5em" color="black" className="popUpContainer__close--cross" />
        </div>
        <h2 className="popUpContainer__title">{title}</h2>
        <div className="popUpContainer__content">
          {children}
        </div>
      </div>
    </div>
  </div>
);

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Form;
