import React, { Fragment, useState } from 'react';

import Notes from '../../components/Notes/Notes';
import Panel from '../../components/Panel/Panel';
import SlateEditor from './SlateEditor';
import SlateNotes from './SlateNotes.mdx';
import SlateOutput from './SlateOutput';

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
      <Panel title="Editor" style={ { gridArea: 'editor' } }>
        <SlateEditor content={ content } handler={ setContent } />
      </Panel>
      <Panel title="Output" style={ { gridArea: 'output' } }>
        <SlateOutput content={ content } />
      </Panel>
      <Notes>
        <SlateNotes />
      </Notes>
    </Fragment>
  );
};

export default Slate;
