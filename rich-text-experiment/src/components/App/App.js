import React, { useState } from 'react';

import Gutenberg from '../../gutenberg/Gutenberg';
import SmartBlocks from '../../smart-blocks/SmartBlocks';

import style from './App.module.scss';

const App = () => {
  const [selected, setSelected] = useState( 'gutenberg' );

  const switchEditor = e => {
    setSelected( e.target.value );
  };

  return (
    <main>
      <h1>Rich Text Editor</h1>
      <label htmlFor="editor-select">
        { 'Select an Editor to Test: ' }
        <select
          className={ style.select }
          id="editor-select"
          onBlur={ switchEditor }
          onChange={ switchEditor }
          value={ selected }
        >
          <option value="gutenberg">Gutenberg</option>
          <option value="smart-blocks">Smart Blocks</option>
        </select>
      </label>
      <div className={ style['section-container'] }>
        { selected === 'gutenberg' && (
          <Gutenberg />
        ) }

        { selected === 'smart-blocks' && (
          <SmartBlocks />
        ) }
      </div>
    </main>
  );
};

export default App;
