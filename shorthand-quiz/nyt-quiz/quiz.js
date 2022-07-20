let count = 0; /** score of the user, starting at 0 * */
const current = 1; /** number of the current question * */
const total = 8; /** number of total questions UPDATE THIS!!! * */


/**
* Function: disableButton
* Input: the IDs of four elements to be disabled.
* Output: the disabled attribute of each element
* is set to true.
* Useage: to disable clickability of the four answer choices.
* */
function disableButton( answerA, answerB, answerC, answerD ) {
  answerA.disabled = true;
  answerB.disabled = true;
  answerC.disabled = true;
  answerD.disabled = true;
}

/**
* Function: wrongAnswer
* Input: the ID of the answer the user selects.
* Output: the answer is changed to reflect a wrong selection.
* Useage: when a user selects the wrong answer, this changes
* the element to the red wrong answer display.
* */
function wrongAnswer( element ) {
  // var element = document.getElementById(id);
  element.style.color = 'white';
  element.style.backgroundColor = 'rgba(220,20,60, 0.4)';
}

/**
* Function: actualAnswer
* Input: the ID of the answer the user selects.
* Output: the answer is changed to reflect a wrong selection.
* Useage: when a user selects the wrong answer, this changes
* the element of the correct answer to green.
* */
function actualAnswer( element ) {
  // var element = document.getElementById(id);
  element.style.color = 'rgb(34,139,34)';
  element.style.backgroundColor = 'lightgrey';
}

/**
* Function: rightAnswer
* Input: the ID of the answer the user selects.
* Output: the answer is changed to reflect a correct selection.
* Useage: when a user selects the correct answer, this changes
* the element the user selected to green.
* */
function rightAnswer( element ) {
  // var element = document.getElementById(id);
  element.style.fontWeight = 'bold';
  element.style.color = 'white';
  element.style.backgroundColor = 'rgba(34,139,34, 0.4)';
}

/**
* Function: counter
* Input: the ID of the explanation, the amount of points to give
* to the user, and the ID of the element displaying the score.
* Output: the explanation and score are both revealed to the user.
* Useage: when a user selects an answer, the score is updated
* appropriately, and the explanation is revealed.
* */
function counter( explanation, amount, reveal ) {
  count += amount;

  explanation.style.setProperty( 'display', 'inline-block', 'important' );
  /**
  reveal.style.setProperty('display', 'inline-block', 'important');
  reveal.innerHTML = "You have answered " + count + " out of " + total + " questions correctly.";
  * */
}

/**
* Function: checkAnswer
* Input: the IDs of the HTML that needs modification
* when an answer is selected by the user.
* Output: the answer the user selects is marked as being
* either correct or incorrect, the correct answer is marked,
* the explanation is displayed, and the current score of the
* user is revealed.
* Useage: the answer the user input is compared to the correct
* answer, and based on that comparison, style elements for
* the answers will change accordingly. Furthermore, the
* explanation and score will be revealed to the user.
* */
function checkAnswer( selected ) {
  const section = selected.parentElement;
  const questions = section.getElementsByClassName( 'question' );
  const answers = section.getElementsByClassName( 'answer' );
  const explanations = section.getElementsByClassName( 'explanation' );

  console.log( selected.parentElement );
  console.log( questions );
  console.log( answers );
  console.log( explanations );

  let correct;

  const answerA = answers[0];
  const answerB = answers[1];
  const answerC = answers[2];
  const answerD = answers[3];

  const explanation = explanations[0];
  const reveal = explanations[1];

  if ( answerA.value === 'true' ) {
    correct = answerA;
  } else if ( answerB.value === 'true' ) {
    correct = answerB;
  } else if ( answerC.value === 'true' ) {
    correct = answerC;
  } else {
    correct = answerD;
  }

  if ( selected === correct ) {
    rightAnswer( selected );
    counter( explanation, 1, reveal );
  } else {
    wrongAnswer( selected );
    actualAnswer( correct );
    counter( explanation, 0, reveal );
  }
  disableButton( answerA, answerB, answerC, answerD );
}

/**
* Function: grader
* Input: the ID of the final score to be displayed, and the ID of the
* message to be shown to the user depending on the score.
* Output: the final score and message are both revealed to the user.
* Useage: this is where a user can be told they're a diplomat.
* */
function grader( finalID, revealID ) {
  /** the below is calculated from the global variables * */
  const percent = ( count / total );

  const message = `You finished the quiz, your answered ${count} out of ${total} questions correctly! <br>`;

  if ( percent <= 0.33 ) {
    /** modify string for a lower third percentage score * */
    document.getElementById( revealID ).innerHTML = `${message}You're in the bottom third.`;
  } else if ( percent <= 0.66 ) {
    /** modify string for a middle third percentage score * */
    document.getElementById( revealID ).innerHTML = `${message}You're in the middle third.`;
  } else {
    /** modify string for an upper third percentage score * */
    document.getElementById( revealID ).innerHTML = `${message}You're a diplomat.`;
  }

  document.getElementById( finalID ).disabled = true;
}
