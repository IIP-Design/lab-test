let score = 0; // score of the user, starting at 0

// Dynamically calculate to number of questions on the page.
const total = document.querySelectorAll( '.question-container' ).length;

/**
 * Disable the four answer choices when a user makes a selection.
 * @param {HTMLElement[]} answers The list of answer elements.
 * @param {HTMLElement} selected The answer chosen by the user.
 */
function disableButton( answers, selected ) {
  answers.forEach( answer => {
    answer.disabled = true;

    // De-emphasize the unselected answers.
    if ( answer !== selected && answer.dataset.correct !== 'true' ) {
      answer.style.opacity = '0.55';
    }
  } );
}

/**
 * Change element styling to indicate it is an incorrect answer.
 * @param {HTMLElement} element The HTML element that should be altered.
 */
function wrongAnswer( element ) {
  element.classList.add( 'incorrect' );
}

/**
 * Change element styling to indicate it is the correct answer.
 * @param {HTMLElement} element The HTML element that should be altered.
 */
function rightAnswer( element ) {
  element.classList.add( 'correct' );
}

/**
 * Keep track of the user's score and reveal the explanation.
 * @param {HTMLElement} explanation The element that displays the question's explanation
 * @param {number} amount The points to give the user.
 */
function counter( explanation, amount ) {
  score += amount;

  explanation.style.setProperty( 'display', 'inline-block', 'important' );
}

/**
 * Checks whether the chosen answer is correct.
 * @param {HTMLElement} element The selected answer.
 * @returns {boolean} True if the answer is correct.
 */
function isCorrect( element ) {
  const { correct } = element.dataset;

  return correct === 'true';
}

/**
 * Checks whether the chosen answer is correct.
 * @param {HTMLElement[]} elements A list of HTML elements.
 * @returns {HTMLElement} The correct answer.
 */
function getCorrectAnswer( elements ) {
  const correct = elements.filter( element => isCorrect( element ) );

  return correct[0]; // We assume there is only one correct answer in the array.
}

/**
 * Checks whether the chosen answer is correct and updates the page appropriately.
 * @param {HTMLElement} selected The answer clicked by the user.
 */
function checkAnswer( selected ) {
  const section = selected.parentElement;
  // Spread the returned HTML elements into an array so we can iterate over them.
  const [...answers] = section.getElementsByClassName( 'answer' );
  const explanations = section.getElementsByClassName( 'explanation' );

  const explanation = explanations[0];

  if ( isCorrect( selected ) ) {
    rightAnswer( selected );
    counter( explanation, 1 );
  } else {
    wrongAnswer( selected );
    rightAnswer( getCorrectAnswer( answers ) );
    counter( explanation, 0 );
  }

  disableButton( answers, selected );
}

/**
 * Assign the user a rank based on the number of correct answers.
 * @param {number} correct The number of correct answers.
 */
function calculateRank( correct ) {
  let rank = '';

  if ( correct === total ) {
    rank = 'Ambassador'; // all 12 correct
  } else if ( correct > ( total - 5 ) ) {
    rank = 'Diplomat'; // 8 - 11 correct
  } else if ( correct > ( total - 9 ) ) {
    rank = 'Negotiator'; // 4-7 correct
  } else {
    rank = 'Model UN participant'; // < 3 correct
  }

  return rank;
}

/**
 * Check's the user's score and displays the rank they have earned.
 * @param {string} finalID The ID of the final score to be displayed
 * @param {string} revealID The ID of the message to be shown to the user depending on the score.
 */
function grader( finalID, revealID ) {
  const message = `Congratulations! You answered ${score} out of ${total} questions correctly and have earned the rank of ${calculateRank( score )}.`;

  document.getElementById( revealID ).innerHTML = message;
  document.getElementById( finalID ).disabled = true;
}
