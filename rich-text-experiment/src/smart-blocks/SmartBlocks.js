import React, { Fragment } from 'react';

import SmartBlocksEditor from './SmartBlocksEditor';
import SmartBlocksOutput from './SmartBlocksOutput';
import Panel from '../components/Panel/Panel';

const SmartBlocks = () => (
  <Fragment>
    <Panel title="Editor">
      <SmartBlocksEditor />
    </Panel>
    <Panel title="Output">
      <SmartBlocksOutput />
    </Panel>
  </Fragment>
);

export default SmartBlocks;
