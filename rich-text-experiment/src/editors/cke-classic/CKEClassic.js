import React, { Fragment, useState } from 'react';

import Notes from '../../components/Notes/Notes';
import CKEClassicEditor from './CKEClassicEditor';
import CKEClassicOutput from './CKEClassicOutput';
import CKENotes from './CKENotes.mdx';
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
      <Panel title="Editor" style={ { gridArea: 'editor' } }>
        <CKEClassicEditor content={ content } handler={ handleChange } />
      </Panel>
      <Panel title="Output" style={ { gridArea: 'output' } }>
        <CKEClassicOutput content={ content } />
      </Panel>
      <Notes>
        <CKENotes />
      </Notes>
    </Fragment>
  );
};

export default CKEClassic;
