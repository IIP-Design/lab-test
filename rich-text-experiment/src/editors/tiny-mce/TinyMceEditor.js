import React from 'react';
import propTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { init } from './init';

import styles from './TinyMce.module.scss';

const TinyMceEditor = ( { content, handler } ) => (
  <div className={ styles.editor }>
    <Editor
      init={ init }
      onEditorChange={ handler }
      value={ content }
    />
  </div>
);

TinyMceEditor.propTypes = {
  content: propTypes.string,
  handler: propTypes.func,
};

export default TinyMceEditor;
