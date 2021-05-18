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

const SlateOutput = ( { content } ) => (
  <div style={ style }>
    <pre style={ { padding: '0.5rem', width: '100%', whiteSpace: 'pre-wrap' } }>
      { JSON.stringify( content, null, 2 ) }
    </pre>
  </div>
);

SlateOutput.propTypes = {
  content: propTypes.array,
};

export default SlateOutput;
