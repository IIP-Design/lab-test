import React, { Fragment, useState } from 'react';

import Header from '../Header/Header';

/** IMPORT YOUR COMPONENT BELOW */
import Gutenberg from '../../editors/gutenberg/Gutenberg';
import Example from '../../editors/example/Example';
import Slate from '../../editors/slate/Slate';

import style from './App.module.scss';

const App = () => {
  const [selected, setSelected] = useState( 'example' );

  const switchEditor = e => {
    setSelected( e.target.value );
  };

  /** ADD YOUR COMPONENT AS AN OPTION BELOW */
  const options = [
    { val: 'example', label: 'Example' },
    { val: 'gutenberg', label: 'Gutenberg' },
    { val: 'slate', label: 'Slate' },
  ];

  return (
    <Fragment>
      <Header />
      <main>
        <label htmlFor="editor-select">
          { 'Select an Editor to Test: ' }
          <select
            className={ style.select }
            id="editor-select"
            onBlur={ switchEditor }
            onChange={ switchEditor }
            value={ selected }
          >
            { options.map( opt => (
              <option key={ opt.val } value={ opt.val }>{ opt.label }</option>
            ) ) }
          </select>
        </label>
        <div className={ style['section-container'] }>
          { selected === 'example' && (
            <Example />
          ) }

          { /** ADD YOUR COMPONENT'S CONDITIONAL RENDER BELOW */ }

          { selected === 'gutenberg' && (
            <Gutenberg />
          ) }

          { selected === 'slate' && (
            <Slate />
          ) }
        </div>
      </main>
    </Fragment>
  );
};

export default App;
