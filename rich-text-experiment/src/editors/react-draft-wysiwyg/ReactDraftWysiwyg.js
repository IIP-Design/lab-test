import React, { Fragment, useState } from 'react';

// import { EditorState } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
import Notes from '../../components/Notes/Notes';
import ReactDraftWysiwygEditor from './ReactDraftWysiwygEditor';
import ReactDraftWysiwygOutput from './ReactDraftWysiwygOutput';
import ReactDraftWysiwygNotes from './ReactDraftWysiwygNotes.mdx';
import Panel from '../../components/Panel/Panel';

/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
const ReactDraftWysiwyg = () => {
  // State managed at this level to facilitate simultaneously demonstrating input/output.
  const [content, setContent] = useState( 'See: https://codesandbox.io/s/react-draft-wysiwyg-4bfwu?file=/src/App.js' );

  const handleInput = e => {
    const input = e.target.value;

    setContent( input );
  };

  // const [editorState, setEditorState] = useState( EditorState.createEmpty() );
  // const [contentState, setContentState] = useState( null );

  // const handleContentStateChange = () => {
  //   const markup = draftToHtml( contentState );

  //   setContentState( markup );
  // };

  // const handleEditorStateChange = () => {
  //   setEditorState( editorState );
  // };

  return (
    <Fragment>
      <Panel title="Editor" style={ { gridArea: 'editor' } }>
        <ReactDraftWysiwygEditor
          content={ content }
          handler={ handleInput }
        />
        { /* <ReactDraftWysiwygEditor
          content={ editorState }
          onEditorStateChange={ handleEditorStateChange }
          onContentStateChange={ handleContentStateChange }
        /> */ }
      </Panel>
      <Panel title="Output" style={ { gridArea: 'output' } }>
        <ReactDraftWysiwygOutput content={ content } />
        { /* <ReactDraftWysiwygOutput content={ contentState } /> */ }
      </Panel>
      <Notes>
        <ReactDraftWysiwygNotes />
      </Notes>
    </Fragment>
  );
};

export default ReactDraftWysiwyg;
