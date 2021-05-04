import React, { Fragment, useState } from 'react';

import ReactDraftWysiwygEditor from './ReactDraftWysiwygEditor';
import ReactDraftWysiwygOutput from './ReactDraftWysiwygOutput';
import Panel from '../../components/Panel/Panel';

const ReactDraftWysiwyg = () => {
  // State managed at this level to facilitate simultaneously demonstrating input/output.
  const [content, setContent] = useState( 'Replace me with your rich text editor.' );

  const handleInput = e => {
    const input = e.target.value;

    setContent( input );
  };

  return (
    <Fragment>
      <Panel title="Editor">
        <ReactDraftWysiwygEditor content={ content } handler={ handleInput } />
      </Panel>
      <Panel title="Output">
        <ReactDraftWysiwygOutput content={ content } />
      </Panel>
    </Fragment>
  );
};

export default ReactDraftWysiwyg;
