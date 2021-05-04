import React from 'react';
import propTypes from 'prop-types';

const ExampleOutput = ( { content } ) => (
  <div>
    The rendered input should show up here:
    <pre style={ { whiteSpace: 'pre-wrap' } }>
      { content }
    </pre>
  </div>
);

ExampleOutput.propTypes = {
  content: propTypes.string,
};

export default ExampleOutput;
