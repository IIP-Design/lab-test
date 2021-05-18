import { Editor, Transforms } from 'slate';

const setTypes = ( e, editor, type ) => {
  e.preventDefault();
  Transforms.setNodes(
    editor,
    { type },
    { match: n => Editor.isBlock( editor, n ) },
  );
};

export const transformBold = ( e, editor ) => {
  setTypes( e, editor, 'strong' );
};

export const transformCode = ( e, editor ) => {
  setTypes( e, editor, 'code' );
};

export const transformItalics = ( e, editor ) => {
  setTypes( e, editor, 'em' );
};
