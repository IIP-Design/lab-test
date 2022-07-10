const gpalabForms = document.querySelectorAll( 'form' );

const toggleResult = ( id, isCorrect ) => {
  const result = document.getElementById( `${id}-result` );

  if ( result && isCorrect ) {
    result.innerText = 'Correct!';
  } else {
    result.innerText = 'Wrong!';
  }
};

if ( gpalabForms && gpalabForms.length ) {
  [...gpalabForms].forEach( form => {
    const { id } = form;
    const answer = form.dataset.correct;

    form.addEventListener( 'submit', e => {
      const data = new FormData( form );

      for ( const entry of data ) {
        const selection = entry[1];

        const isCorrect = answer === selection;

        toggleResult( id, isCorrect );
      }

      e.preventDefault();
    } );
  } );
}
