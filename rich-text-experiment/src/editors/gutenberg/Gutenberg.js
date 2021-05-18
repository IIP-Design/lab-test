import React, { Fragment } from 'react';

import GutenbergEditor from './GutenbergEditor';
import GutenbergOutput from './GutenbergOutput';
import Panel from '../../components/Panel/Panel';

const Gutenberg = () => (
  <Fragment>
    <Panel title="Editor" style={ { gridArea: 'editor' } }>
      <GutenbergEditor />
    </Panel>
    <Panel title="Output" style={ { gridArea: 'output' } }>
      <GutenbergOutput />
    </Panel>
  </Fragment>
);

export default Gutenberg;
