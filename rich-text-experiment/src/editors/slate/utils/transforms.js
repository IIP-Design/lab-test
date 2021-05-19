import { Editor, Transforms } from 'slate';

const setTypes = ( e, editor, type ) => {
  e.preventDefault();

  const [match] = Editor.nodes( editor, {
    match: n => n.type === type,
  } );

  Transforms.setNodes(
    editor,
    { type: match ? 'paragraph' : type },
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
