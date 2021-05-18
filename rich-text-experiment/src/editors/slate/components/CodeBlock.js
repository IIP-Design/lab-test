import React from 'react';
import propTypes from 'prop-types';

const CodeBlock = ( { attributes, children } ) => (
  <pre { ...attributes }>
    <code>{ children }</code>
  </pre>
);

CodeBlock.propTypes = {
  attributes: propTypes.object,
  children: propTypes.node,
};

export default CodeBlock;
