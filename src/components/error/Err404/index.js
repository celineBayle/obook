import React from 'react';
import errObook from 'src/assets/img/404.png';

import './style.scss';

const err404 = () => (
  <section className="err404">
    <img src={errObook} alt="page_404" className="err404__img" />
  </section>
);

export default err404;
