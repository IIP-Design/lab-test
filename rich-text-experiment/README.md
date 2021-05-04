## Installation

Pull down the latest version of the lab-test repo, navigate to root directory, and install the project dependencies:

```bash
git clone git@github.com:IIP-Design/lab-test.git
cd lab-test
npm install
```

Note that this will install the project root dependencies (necessary for linting) as well as those for the rich text editor subdirectory.

## Usage

After the dependencies have been installed, you can run the test page by navigating to the `rich-text-experiment` directory and running the start script.

```bash
cd rich-text-experiment
npm run start
```

This will started a development server and make the test page available at [localhost:1234](http://localhost:1234). The development bundle is compiled by [Parcel](https://v2.parceljs.org/) which supports hot module reloading and common patterns like the use of `component.module.scss` files for styling using CSS modules.

### Project Structure:

This project provides some basic scaffolding on which to render several rich text editors for comparison. Most of your work will occur in the `editors` directory, where you will copy the boilerplate and create your own components as [described below](#create-a-new-editor-directory).

```bash
└── src
    ├── index.html # Test page HTML - do not change.
    ├── index.js # Test page JS entrypoint - do not change.
    ├── components # Shared components used by the test page.
    │   ├── App # Should only be altered to add editor options.
    │   └── Panel
    │
    └── editors # Each rich test editor library gets its own directory here.
        └── example # <--- Boilerplate dir. Make a copy as a sibling and put all your code there.
```

### Create a New Editor Directory:

1. Install any needed libraries at the `rich-text-experiment` directory level. Note that React and any build tools you may need should already be installed.
1. In the `src/editors` directory, copy the `example` directory as a sibling directory named after the library you are testing.
1. In your new directory, rename the boilerplate example components to match the library you are testing.

For example if you were to create a new test directory for SmartBlocks it would look something like this:

```bash
└── editors
    ├── example
    └── smart-blocks
        ├── SmartBlocks.js # Container to render the side-by-side of the rich text editor and the output window. State management should occur here.
        ├── SmartBlocksEditor.js # The editor window, where a user can input content.
        └── SmartBlocksOutput.js # A preview window that demonstrates the output of the editor.
```

### Add Editor to the Test Page:

Once you have set your boilerplate directory, you will need to take three steps to add your rich text editor to the test page. Continuing with SmartBlocks as an example, in the `App` component (`src/components/App/App.js`):

1. Import your base component.
1. Add your editor as one of the options in the dropdown.
1. Add a conditional render statement to show your component if it is selected.

There are comments in the `App.js` file to direct you, and the result should look like so:

```jsx
import SmartBlocks from '../../editors/smart-blocks/SmartBlocks';

const App = () => {
  // Other boilerplate.

  const options = [
    { val: 'example', label: 'Example' },
    { val: 'smart-blocks', label: 'Smart Blocks' },
  ];

  return (
    <main>
    { /* Other markup. */}

    { selected === 'smart-blocks' && (
      <SmartBlocks />;
    ) }

    { /* Other markup. */}
    </main>
  )
}
```

## Assessment Criteria

- What formatting options (ex. headings, lists, bold, italics) are available out of the box?
- Does it support content blocks? If so, how does one configure them?
- How is data stored/saved?
- Can we manipulate the editor styling?
- Is it extensible (can we add custom styles, toolbar buttons, blocks, etc.)?
- How does it handle preformatted text?

## Possible Editor Libraries

- [Alloy Editor](https://github.com/liferay/alloy-editor)
- [CKEditor 5](https://github.com/ckeditor/ckeditor5-react)
- [Dante2](https://github.com/michelson/dante2)
- [Draft.js](https://draftjs.org/)
- [Jodit React](https://github.com/jodit/jodit-react)
- [React Draft WYSIWYG](https://github.com/jpuri/react-draft-wysiwyg)
- [React Froala](https://github.com/froala/react-froala-wysiwyg)
- [React Page](https://github.com/react-page/react-page)
- [React ProseMirror](https://github.com/hubgit/react-prosemirror)
- [React Quill](https://github.com/zenoamaro/react-quill)
- [React RTE](https://github.com/sstur/react-rte)
- [React Summernote](https://github.com/summernote/react-summernote)
- [Slate](https://github.com/ianstormtaylor/slate)
- [SmartBlock](https://github.com/appleple/smartblock/)
- [SunEditor React](https://github.com/mkhstar/suneditor-react)
- [TinyMCE React](https://github.com/tinymce/tinymce-react)
- [WordPress Gutenberg](https://github.com/WordPress/gutenberg)
