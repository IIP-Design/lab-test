import React, { Fragment, useState } from 'react';

import Header from '../Header/Header';

/** IMPORT YOUR COMPONENT BELOW */
import Gutenberg from '../../editors/gutenberg/Gutenberg';
import Example from '../../editors/example/Example';
import CKEClassic from '../../editors/cke-classic/CKEClassic';
import ReactDraftWysiwyg from '../../editors/react-draft-wysiwyg/ReactDraftWysiwyg';
import Slate from '../../editors/slate/Slate';
import TinyMce from '../../editors/tiny-mce/TinyMce';

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
    { val: 'cke-classic', label: 'CKEditor 5 Classic' },
    { val: 'react-draft-wysiwyg', label: 'React Draft WYSIWYG' },
    { val: 'slate', label: 'Slate' },
    { val: 'tiny-mce', label: 'Tiny MCE' },
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

          { selected === 'cke-classic' && (
            <CKEClassic />
          ) }

          { selected === 'react-draft-wysiwyg' && (
            <ReactDraftWysiwyg />
          ) }

          { selected === 'slate' && (
            <Slate />
          ) }

          { selected === 'tiny-mce' && (
            <TinyMce />
          ) }
        </div>
      </main>
    </Fragment>
  );
};

export default App;
