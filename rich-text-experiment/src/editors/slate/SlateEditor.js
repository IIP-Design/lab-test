import React, { useEffect, useMemo } from 'react';
import { createEditor } from 'slate';
import propTypes from 'prop-types';
import { Slate, Editable, withReact } from 'slate-react';

const SlateEditor = ( { content, handler } ) => {
  const editor = useMemo( () => withReact( createEditor() ), [] );

  return (
    <div style={ { minHeight: '200px', width: '100%' } }>
      <Slate
        editor={ editor }
        value={ content }
        onChange={ newValue => handler( newValue ) }
      >
        <Editable />
      </Slate>
    </div>
  );
};

SlateEditor.propTypes = {
  content: propTypes.array,
  handler: propTypes.func,
};

export default SlateEditor;
