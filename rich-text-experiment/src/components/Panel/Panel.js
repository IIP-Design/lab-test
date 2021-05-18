import React from 'react';
import propTypes from 'prop-types';

import style from './Panel.module.scss';

const Panel = ( { children, title, ...rest } ) => (
  <section className={ style.section } { ...rest }>
    <h2 className={ style.header }>{ title }</h2>
    { children }
  </section>
);

Panel.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
};

export default Panel;
