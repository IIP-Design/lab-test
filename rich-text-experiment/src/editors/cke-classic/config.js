export const config = {
  toolbar: {
    items: [
      'heading', '|', 'bold', 'italic', 'underline', 'link', 'blockQuote', '|', 'bulletedList', 'numberedList',
    ],
    // items: [
    //   'heading', '|', 'bold', 'italic', 'underline', 'link', 'blockQuote', '|', 'bulletedList', 'numberedList', '|','uploadImage', 'mediaEmbed', '|', 'undo', 'redo',
    // ],
  },
  language: 'en',
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side',
    ],
  },
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Normal',
        'class': 'ck-heading_paragraph',
      },
      {
        model: 'heading1',
        view: 'h2',
        title: 'Heading 1',
        'class': 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h3',
        title: 'Heading 2',
        'class': 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h4',
        title: 'Heading 3',
        'class': 'ck-heading_heading3',
      },
    ],
  },
};
