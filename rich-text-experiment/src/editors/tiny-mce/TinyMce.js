import React, { Fragment, useState } from 'react';

import Notes from '../../components/Notes/Notes';
import TinyMceEditor from './TinyMceEditor';
import TinyMceOutput from './TinyMceOutput';
import TinyMceNotes from './TinyMceNotes.mdx';
import Panel from '../../components/Panel/Panel';

const TinyMce = () => {
  // State managed at this level to facilitate simultaneously demonstrating input/output.
  const [content, setContent] = useState( 'React Tiny MCE' );

  const handleInput = newValue => {
    setContent( newValue );
  };

  return (
    <Fragment>
      <Panel title="Editor" style={ { gridArea: 'editor' } }>
        <TinyMceEditor content={ content } handler={ handleInput } />
      </Panel>
      <Panel title="Output" style={ { gridArea: 'output' } }>
        <TinyMceOutput content={ content } />
      </Panel>
      <Notes>
        <TinyMceNotes />
      </Notes>
    </Fragment>
  );
};

export default TinyMce;
