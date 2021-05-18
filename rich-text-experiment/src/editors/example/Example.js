import React, { Fragment, useState } from 'react';

import ExampleEditor from './ExampleEditor';
import ExampleOutput from './ExampleOutput';
import Panel from '../../components/Panel/Panel';

const Example = () => {
  // State managed at this level to facilitate simultaneously demonstrating input/output.
  const [content, setContent] = useState( 'Replace me with your rich text editor.' );

  const handleInput = e => {
    const input = e.target.value;

    setContent( input );
  };

  return (
    <Fragment>
      <Panel title="Editor" style={ { gridArea: 'editor' } }>
        <ExampleEditor content={ content } handler={ handleInput } />
      </Panel>
      <Panel title="Output" style={ { gridArea: 'output' } }>
        <ExampleOutput content={ content } />
      </Panel>
    </Fragment>
  );
};

export default Example;
