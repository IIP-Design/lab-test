import React, { Fragment, useState } from 'react';

import CKEClassicEditor from './CKEClassicEditor';
import CKEClassicOutput from './CKEClassicOutput';
import Panel from '../../components/Panel/Panel';

const CKEClassic = () => {
  // State managed at this level to facilitate simultaneously demonstrating input/output.
  const [content, setContent] = useState( '<p>CKEditor 5 Classic</p>' );

  const handleChange = ( event, editor ) => {
    const data = editor.getData();

    setContent( data );
  };

  return (
    <Fragment>
      <Panel title="Editor">
        <CKEClassicEditor content={ content } handler={ handleChange } />
        <ol>
          <li>
            <p><strong>What formatting options (ex. headings, lists, bold, italics) are available out of the box?</strong></p>
            <p>Here is an array with the defaults: <code>["selectAll", "undo", "redo", "bold", "italic", "blockQuote", "imageTextAlternative", "link", "ckfinder", "uploadImage", "imageUpload", "heading", "imageStyle:full", "imageStyle:side", "indent", "outdent", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells"]</code>.</p>
            <p>A full list of options and documentation can be found on the <a href="https://ckeditor.com/docs/ckeditor5/latest/features/index.html">features page</a>.</p>
          </li>
          <li>
            <p><strong>Does it support content blocks? If so, how does one configure them?</strong></p>
            <p>CKEditor has several different types of editors: Classic, Inline, Balloon block, Balloon, Document, or Custom. They have an <a href="https://ckeditor.com/docs/ckeditor5/latest/examples/index.html">interactive examples page</a> that demonstrates each of these editors.</p>
            <p>I implemented the Classic editor above since it's the most similar to our mockups, but the Balloon block editor seems like it could meet our needs for content blocks.</p>
            <p>Also, they have a couple tutorials on <a href="https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-a-block-widget.html">implementing a block widget</a> and <a href="https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/using-react-in-a-widget.html">using a React component in a widget</a> that seem like they'd be useful for developing content blocks.</p>
          </li>
          <li>
            <p><strong>How is data stored/saved?</strong></p>
            <p>Stores data as a string of HTML content, which would work well with the <code>DocumentConversionFormat</code> used on the Commons server.</p>
          </li>
          <li>
            <p><strong>Can we manipulate the editor styling?</strong></p>
            <p>Yes, via a stylesheet.</p>
          </li>
          <li>
            <p><strong>Is it extensible (can we add custom styles, toolbar buttons, blocks, etc.)?</strong></p>
            <p>It's relatively easy to customize which formatting options appear in the toolbar via its <code>config</code> prop.</p>
            <p>Alternatively, they provide an online builder to create custom builds. Basically, you select various formatting options and then export a <code>ckeditor5</code> folder.</p>
            <p>Place the custom minified build file somewhere in the app and import it in our <code>TextEditor</code> component and use it as the <code>CKEditor</code> component's <code>editor</code> prop.</p>
            <p>Then use the configuration object in the provided <code>sample/index.html</code> file as the <code>config</code> prop.</p>
            <p>This is the approach that I used for the classic editor; it's quick and dirty for this test. However, a better workflow might be to set up the provided custom build directory as a gpa-lab npm package that can be imported into a project as a dependency.</p>
            <p>There also appears to be a way to replace their toolbar icons with our own. The method they suggest involves <a href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/faq.html#how-to-customize-the-ckeditor-5-icons">using Webpack's <code>NormalModuleReplacementPlugin</code></a>.</p>
            <p>They document a way to <a href="https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html">create custom plugins</a> that appears like it could meet our needs</p>
            <p>See comment above about implementing block widget and using React component in a block widget.</p>
          </li>
          <li>
            <p><strong>How does it handle preformatted text?</strong></p>
            <p>It handles preformatted text very well. They provide a sample Word document with a heading, unordered list, text, and a table, and brought over all of the formatting correctly. I tried it with a link, and it handled that as well.</p>
            <p>They have separate plugins for pasting from Word, Google Docs, and plain text, but pasting from Word worked for me by default.</p>
          </li>
          <li>
            <p><strong>Miscellaneous</strong></p>
            <p><a href="https://ckeditor.com/docs/ckeditor5/latest/features/autoformat.html#block-formatting">Supports entering text with markdown</a> by default.</p>
            <p>Has pretty good <a href="https://ckeditor.com/docs/ckeditor5/latest/features/keyboard-support.html">keyboard support</a>.</p>
            <p>Overall, CKEditor is quite powerful and complex to fully grasp and set up. It seems to be professionally developed and maintained actively and has documentation that's fairly extensive and generally clear. I think this is because they sell commerical licenses for their editor in addition open source, which provides them with a source of revenue to support their work.</p>
          </li>
        </ol>
      </Panel>
      <Panel title="Output">
        <CKEClassicOutput content={ content } />
      </Panel>
    </Fragment>
  );
};

export default CKEClassic;
