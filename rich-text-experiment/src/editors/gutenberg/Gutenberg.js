import React, { Fragment } from 'react';

import GutenbergEditor from './GutenbergEditor';
import GutenbergOutput from './GutenbergOutput';
import Panel from '../../components/Panel/Panel';

const Gutenberg = () => (
  <Fragment>
    <Panel title="Editor">
      <GutenbergEditor />
    </Panel>
    <Panel title="Output">
      <GutenbergOutput />
    </Panel>
  </Fragment>
);

export default Gutenberg;
