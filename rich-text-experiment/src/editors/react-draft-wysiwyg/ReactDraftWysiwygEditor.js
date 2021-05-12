import React from 'react';
import propTypes from 'prop-types';

// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import * as config from './config';

const ReactDraftWysiwygEditor = ( { content, handler } ) => (
  <div style={ { minHeight: '200px', width: '100%' } }>
    <textarea
      value={ content }
      onChange={ handler }
      style={ { minHeight: '200px', padding: '0.5rem', width: '100%' } }
    />
    { /* <Editor
      style={ { minHeight: '200px', padding: '0.5rem', width: '100%' } }
      toolbarClassName="editor-toolbar"
      wrapperClassName="editor-wrapper"
      editorClassName="editor"
      editorState={ content }
      onEditorStateChange={ onEditorStateChange }
      onContentStateChange={ onContentStateChange }
      toolbar={ config.toolbar }
      localization={ config.localization }
      spellCheck
    /> */ }
  </div>
);

ReactDraftWysiwygEditor.propTypes = {
  content: propTypes.string,
  handler: propTypes.func,
  // onContentStateChange: propTypes.func,
  // onEditorStateChange: propTypes.func,
};

export default ReactDraftWysiwygEditor;
