# Radio Options with Submit Button Quiz

This simple quiz implementation provides the user with a list of radio button options. Once they have selected one of the options, they can click the `Check Answer` button to confirm that their answer is correct.

There are several obvious shortcomings to this implementation. Namely, it is lacking in all but the most basic styling. A more robust implementation would also disable the radio options and the submit button upon submission. Another useful option would be a reset button to clear all selections.

**Note:** The query identifying the form elements (line 2 of `quiz.js`) is probably overly broad as it cues on the `form` element. This will therefore add the answer checking event listener to any form on the page, whether it is part of the quiz or not. We may want to increase specificity in case there are other forms on the page, possibly by querying for a class rather than just the `form` element.
