// Identify all form elements on the page
const gpalabForms = document.querySelectorAll( 'form' );

// Show whether the selected answer is correct or not.
const toggleResult = ( id, isCorrect ) => {
  const result = document.getElementById( `${id}-result` );

  if ( result && isCorrect ) {
    result.innerText = 'Correct!';
  } else {
    result.innerText = 'Wrong!';
  }
};

// Compare the selected value to the correct answer.
const handleSubmit = ( e, form ) => {
  // Extract the group id and correct answer from the form element.
  const { id } = form;
  const answer = form.dataset.correct;

  const data = new FormData( form );

  /*
   * The form submission will return an array with two values:
   *  1. The radio group
   *  2. The selected radio option
   *
   * Below we pull off the second value (i.e. the selected option)
   * and compare it to the the correct value.
   */
  // eslint-disable-next-line no-restricted-syntax
  for ( const entry of data ) {
    const selection = entry[1];

    const isCorrect = answer === selection;

    toggleResult( id, isCorrect );
  }

  // Prevent default so that the page does not refresh post-submit.
  e.preventDefault();
};

// If there are forms on the page, add an event listener to
// each one in order to check the answer on submission.
if ( gpalabForms && gpalabForms.length ) {
  [...gpalabForms].forEach( form => {
    form.addEventListener( 'submit', e => handleSubmit( e, form ) );
  } );
}
