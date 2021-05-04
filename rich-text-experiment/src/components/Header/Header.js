import React from 'react';

import seal from 'url:../../assets/dos_seal.svg'; // eslint-disable-line import/no-unresolved

import styles from './Header.module.scss';

const Header = () => (
  <header role="banner" className={ styles.header }>
    <div className={ styles.content }>
      <img
        alt="U.S. Department of State seal"
        src={ seal }
        className={ styles.seal }
      />
      <h1 className={ styles.title }>Rich Text Editor Experiment</h1>
    </div>
  </header>
);

export default Header;
