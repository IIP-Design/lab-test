import React, { Fragment, useState } from 'react';

import SlateEditor from './SlateEditor';
import SlateOutput from './SlateOutput';
import Panel from '../../components/Panel/Panel';

const Slate = () => {
  // State managed at this level to facilitate simultaneously demonstrating input/output.
  const [content, setContent] = useState( [
    {
      type: 'paragraph',
      children: [{ text: 'Replace me with your rich text editor.' }],
    },
  ] );

  return (
    <Fragment>
      <Panel title="Editor">
        <SlateEditor content={ content } handler={ setContent } />
      </Panel>
      <Panel title="Output">
        <SlateOutput content={ content } />
      </Panel>
    </Fragment>
  );
};

export default Slate;
