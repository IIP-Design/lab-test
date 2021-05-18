import React from 'react';
import propTypes from 'prop-types';

import Panel from '../Panel/Panel';

import styles from './Notes.module.scss';

const Notes = ( { children } ) => (
  <Panel style={ { gridArea: 'notes' } } title="Notes">
    <div className={ styles.container }>
      { children }
    </div>
  </Panel>
);

Notes.propTypes = {
  children: propTypes.node,
};

export default Notes;
