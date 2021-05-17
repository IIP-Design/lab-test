import React from 'react';
import propTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';

/* The first import is for the default class build, while the
 * second is for a custom build.
 */
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as ClassicEditor from './custom-classic-build/ckeditor';

import { config } from './config';
import styles from './CKEClassic.module.scss';

const CKEClassicEditor = ( { content, handler } ) => {
  const handleReady = editor => {
    console.log( ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ) );
    console.log( Array.from( editor.ui.componentFactory.names() ) );
  };

  return (
    <div className={ styles.editor }>
      <CKEditor
        config={ config }
        data={ content }
        editor={ ClassicEditor }
        onChange={ handler }
        onReady={ handleReady }
        // onBlur={handleBlur}
        // onFocus={handleFocus}
      />
    </div>
  );
};

CKEClassicEditor.propTypes = {
  content: propTypes.string,
  handler: propTypes.func,
};

export default CKEClassicEditor;
