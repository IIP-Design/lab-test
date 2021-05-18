import React, { useCallback } from 'react';
import { Editable } from 'slate-react';
import propTypes from 'prop-types';

import BoldElement from './BoldElement';
import CodeBlock from './CodeBlock';
import DefaultElement from './DefaultElement';
import ItalicElement from './ItalicElement';
import { transformBold, transformCode, transformItalics } from '../utils/transforms';

const EditableArea = ( { editor } ) => {
  const RenderElement = useCallback( props => {
    switch ( props.element.type ) { // eslint-disable-line react/prop-types
      case 'code':
        return <CodeBlock { ...props } />;
      case 'em':
        return <ItalicElement { ...props } />;
      case 'strong':
        return <BoldElement { ...props } />;
      default:
        return <DefaultElement { ...props } />;
    }
  }, [] );

  const keyActions = e => {
    if ( e.key === '`' && e.ctrlKey ) {
      transformCode( e, editor );
    }

    if ( e.key === 'i' && e.ctrlKey ) {
      transformItalics( e, editor );
    }

    if ( e.key === 'b' && e.ctrlKey ) {
      transformBold( e, editor );
    }
  };

  return (
    <Editable
      onKeyDown={ e => keyActions( e ) }
      renderElement={ RenderElement }
    />
  );
};

EditableArea.propTypes = {
  editor: propTypes.object,
};

export default EditableArea;
