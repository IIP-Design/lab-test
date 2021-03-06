import React from 'react';
import propTypes from 'prop-types';

const ExampleEditor = ( { content, handler } ) => (
  <div style={ { minHeight: '200px', width: '100%' } }>
    <textarea
      value={ content }
      onChange={ handler }
      style={ { minHeight: '200px', padding: '0.5rem', width: '100%' } }
    />
  </div>
);

ExampleEditor.propTypes = {
  content: propTypes.string,
  handler: propTypes.func,
};

export default ExampleEditor;
