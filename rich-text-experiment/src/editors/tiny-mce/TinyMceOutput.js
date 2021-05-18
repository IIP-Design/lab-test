import React from 'react';
import propTypes from 'prop-types';

const style = {
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '200px',
  width: '100%',
};

const TinyMceOutput = ( { content } ) => (
  <div style={ style }>
    <pre style={ { padding: '0.5rem', width: '100%', whiteSpace: 'pre-wrap', wordBreak: 'breakWord' } }>
      { content }
    </pre>
    <small style={ { textAlign: 'center' } }>
      <em>* The rendered input should show up here.</em>
    </small>
  </div>
);

TinyMceOutput.propTypes = {
  content: propTypes.string,
};

export default TinyMceOutput;
