export const toolbar = {
  options: [
    'blockType',
    'inline',
    'list',
    'link',
    'image',
  ],
  blockType: {
    inDropdown: true,
    options: [
      'H2', 'H3', 'H4', 'Normal', 'Blockquote',
    ],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: [
      'bold', 'italic', 'underline',
    ],
  },
  link: {
    options: ['link', 'unlink'],
    showOpenOptionOnHover: false,
  },
  list: {
    options: ['ordered', 'unordered'],
  },
  image: {
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    alignmentEnabled: true,
    uploadCallback: undefined,
    previewImage: false,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png',
    alt: { present: true, mandatory: true },
    defaultSize: {
      height: 'auto',
      width: 'auto',
    },
  },
};

export const localization = {
  locale: 'en-us',
  translations: {
    'generic.add': 'Add',
    'generic.cancel': 'Cancel',

    'components.controls.blocktype.normal': 'Normal',
    'components.controls.blocktype.h2': 'Heading 1',
    'components.controls.blocktype.h3': 'Heading 2',
    'components.controls.blocktype.h4': 'Heading 3',
    'components.controls.blocktype.blockquote': 'Blockquote',

    'components.controls.embedded.embedded': 'Embedded',
    'components.controls.embedded.embeddedlink': 'Embedded Link',
    'components.controls.embedded.enterlink': 'Enter link',

    'components.controls.link.linkTitle': 'Link Title',
    'components.controls.link.linkTarget': 'Link Target',
    'components.controls.link.linkTargetOption': 'Open link in new window',
    'components.controls.link.link': 'Link',
    'components.controls.link.unlink': 'Unlink',

    'components.controls.image.image': 'Image',
    'components.controls.image.fileUpload': 'File Upload',
    'components.controls.image.byURL': 'URL',
    'components.controls.image.dropFileText': 'Drop the file or click to upload',
  },
};
