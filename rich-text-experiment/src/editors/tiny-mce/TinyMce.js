import React, { Fragment, useState } from 'react';

import TinyMceEditor from './TinyMceEditor';
import TinyMceOutput from './TinyMceOutput';
import Panel from '../../components/Panel/Panel';

const TinyMce = () => {
  // State managed at this level to facilitate simultaneously demonstrating input/output.
  const [content, setContent] = useState( 'React Tiny MCE' );

  const handleInput = newValue => {
    setContent( newValue );
  };

  return (
    <Fragment>
      <Panel title="Editor">
        <TinyMceEditor content={ content } handler={ handleInput } />
        <ol>
          <li>
            <p><strong>What formatting options (ex. headings, lists, bold, italics) are available out of the box?</strong></p>
            <p>Here is a list of toolbar  defaults: <code>undo, redo, formatselect, bold, italic, backcolor, alignleft, aligncenter, alignright, alignjustify, bullist, numlist, outdent, indent, removeformat, help</code>.</p>
            <p>These defaults are made available by this array of plugins: <code>[
             'advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount']</code>.</p>
            <p>A full list of formatting options and documentation is quite extensive and can be found on the <a href="https://www.tiny.cloud/docs/configure/content-formatting/">content formats page</a>.</p>
          </li>
          <li>
            <p><strong>Does it support content blocks? If so, how does one configure them?</strong></p>
            <p>They have documented techniques for <a href="https://www.tiny.cloud/docs/demo/custom-toolbar-button/">creating customized toolbar buttons</a> and <a href="https://www.tiny.cloud/docs/demo/custom-menu-item/">menu items</a>. While this isn't the same as content block, it does provide some flexibility.</p>
          </li>
          <li>
            <p><strong>How is data stored/saved?</strong></p>
            <p>Stores data as a string of HTML content, which would work well with the <code>DocumentConversionFormat</code> used on the Commons server.</p>
          </li>
          <li>
            <p><strong>Can we manipulate the editor styling?</strong></p>
            <p>Yes, but it's not great for maintainability. A traditional CSS module or stylesheet doesn't work since the Tiny MCE text editor is an <code>iframe</code>.</p>
            <p>Their prescribed method is to to use a configuration object that gets passed to the component's <code>init</code> prop. The configuration object has a <code>content_style</code> property that takes a string of CSS style rules that will be added to the <code>head</code> tag of the text editor's <code>iframe</code>.</p>
            <p>This method is awkward, but it may not be a big deal if the styling doesn't change often.</p>
          </li>
          <li>
            <p><strong>Is it extensible (can we add custom styles, toolbar buttons, blocks, etc.)?</strong></p>
            <p>It's relatively easy to customize with a configuration object that gets passed to the component's <code>init</code> prop</p>
            <p>See comment above about implementing customized toolbar buttons and menu items.</p>
          </li>
          <li>
            <p><strong>How does it handle preformatted text?</strong></p>
            <p>It handles preformatted text pretty well.</p>
          </li>
          <li>
            <p><strong>Miscellaneous</strong></p>
            <p>It comes with a nice help button on the toolbar that opens a modal with keyboard shortcuts, etc.</p>
            <p>There are quite a few keyboard shortcuts, but they didn't seem that intuitive to me. And interactive content within the text editor's <code>iframe</code> wasn't accessible. Though, I could be missing something here.</p>
            <p>Pasting the URL of an image displays the image in the text editor, which is nice, but the <code>img</code> tag in the output is missing an <code>alt</code> attribute.</p>
            <p>Overall, Tiny MCE is full featured and wasn't too difficult to setup. It's professional developed and has documentation that's generally clear.</p>
            <p>There's a nagging alert to set up an account with its cloud services that needs to be manually dismissed before using the editor. I'm sure there is a way to make it not appear without using their cloud services, but I missed that.</p>
            <p>It requires attribution according to its <a href="https://github.com/tinymce/tinymce/blob/develop/LICENSE.TXT#L278">LGPL 2.1 license</a>. Their recommendation is to use the default "Powered by Tiny" text in the lower right corner of the text editor.</p>
          </li>
        </ol>
      </Panel>
      <Panel title="Output">
        <TinyMceOutput content={ content } />
      </Panel>
    </Fragment>
  );
};

export default TinyMce;
