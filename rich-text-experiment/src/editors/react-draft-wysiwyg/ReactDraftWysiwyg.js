import React, { Fragment, useState } from 'react';

// import { EditorState } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
import ReactDraftWysiwygEditor from './ReactDraftWysiwygEditor';
import ReactDraftWysiwygOutput from './ReactDraftWysiwygOutput';
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
      <Panel title="Editor">
        <ReactDraftWysiwygEditor
          content={ content }
          handler={ handleInput }
        />
        { /* <ReactDraftWysiwygEditor
          content={ editorState }
          onEditorStateChange={ handleEditorStateChange }
          onContentStateChange={ handleContentStateChange }
        /> */ }
        <ol>
          <li>
            <p><strong>What formatting options (ex. headings, lists, bold, italics) are available out of the box?</strong></p>
            <p>Here is the <code>options</code> array with the defaults: <code>['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history']</code>.</p>
            <p>The <code>inline</code> item refers to bold, italics, and underline.</p>
            <p>The <code>blockType</code> item refers to a dropdown with Normal, H1 to H6, and Blockquote, and the headings can be customized to display only H1 to H3.</p>
            <p>The <code>list</code> item refers to bulleted and numbered lists as well as indent and outdent.</p>
          </li>
          <li>
            <p><strong>Does it support content blocks? If so, how does one configure them?</strong></p>
            <p>No</p>
          </li>
          <li>
            <p><strong>How is data stored/saved?</strong></p>
            <p>Stores data as a string of HTML content or as JSON. A string of HTML would work well with the <code>DocumentConversionFormat</code> used on the Commons server. According to the package docs, the JSON object is useful for populating the editor state on component mount/remount.</p>
          </li>
          <li>
            <p><strong>Can we manipulate the editor styling?</strong></p>
            <p>Yes, via a stylesheet. The editor can be assigned a custom <code>class</code> value that can be used to scope styles to control the appearance of the content. I was able to get it to match the UXPin mockup with little difficulty.</p>
          </li>
          <li>
            <p><strong>Is it extensible (can we add custom styles, toolbar buttons, blocks, etc.)?</strong></p>
            <p>It's easy to customize which formatting options appear in the toolbar. The <code>Editor</code> component has a <code>toolbar</code> prop that handles this. Likewise, it has a <code>localization</code> prop that allows for customization of various labels, e.g., changing the H1 label to Heading 1.</p>
            <p>There doesn't appear to be a way to customize the toolbar icons, but there does appear to be a way to add a new formatting option to the toolbar or replace a default option with a custom one.</p>
          </li>
          <li>
            <p><strong>How does it handle preformatted text?</strong></p>
            <p>It accepts preformatted text, i.e., copied from Word doc, but it inserts <code>&lt;br&gt;</code> tags in places. Copied links come over well, but lists come over as paragraphs with a bullet inside of the paragraph. So the markup isn't accurate for lists. Existing formatting is retained by adding inline styles to a paragraph tag wrapper.</p>
            <p>There is an option to strip formatting from pasted text, which works well, but of course, the user would have to reformat all of the text.</p>
          </li>
          <li>
            <p><strong>Miscellaneous</strong></p>
            <p>I couldn't get this package to work in this <code>lab-test</code> site; I commented out the implementation in these components. However, I was able to get it to work in this <a href="https://codesandbox.io/s/react-draft-wysiwyg-4bfwu?file=/src/App.js">CodeSandbox</a>.</p>
            <p>The <code>remove</code> option never worked for me.</p>
            <p>The <code>image</code> upload never worked, but an <code>image</code> URL seemed to worked fine. However, the image was wrapped in a <code>div</code> in the output.</p>
            <p>The <code>embed</code> option didn't work for Twitter embeds but seemed to handle YouTube embed URLs just fine.</p>
            <p>Deleting content can be somewhat particular. Deleting after using <kbd>command-a</kbd> to select everything worked fine, but manually selecting everything didn't work consistently. Double-clicking and deleting a selected word seemed to work okay</p>
            <p>The toolbar options can't be accessed with the keyboard, and the markup uses <code>aria</code> attributes strangely.</p>
            <p>While this package has a <code>blockquote</code> option, there doesn't appear to be an option for an inline <code>quote</code>, which is one of the options in the mockup and would wrap inline text in a <code>q</code> tag. It may be possible to add it as a custom toolbar option. However, I think users would probably just handle quotes by manually entering a quote like "some quote" rather than highlighting some text and selecting a <code>quote</code> option from the toolbar.</p>
            <p>The package repo doesn't appear to be as actively maintained as it was in the past (over 400 issues). Based on a comment in an issue posted on October 20, 2020, "<a href="https://github.com/jpuri/react-draft-wysiwyg/issues/1039">Is this repository maintained?</a>", the maintainer seems to have moved on to <a href="https://nibedit.com/">Nib</a>, which is another React-based text editor built on Prosemirror.</p>
          </li>
        </ol>
      </Panel>
      <Panel title="Output">
        <ReactDraftWysiwygOutput content={ content } />
        { /* <ReactDraftWysiwygOutput content={ contentState } /> */ }
      </Panel>
    </Fragment>
  );
};

export default ReactDraftWysiwyg;
