
/**
* Function: disableButton
* Input: the IDs of four elements to be disabled.
* Output: the disabled attribute of each element
* is set to true.
* Useage: to disable clickability of the four answer choices.
**/

function disableButton(id1, id2, id3, id4) {
   document.getElementById(id1).disabled = true;
   document.getElementById(id2).disabled = true;
   document.getElementById(id3).disabled = true;
   document.getElementById(id4).disabled = true;
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
**/

 function checkAnswer(inputID, rightID, captionID, scoreID) {

  if (inputID == rightID) {
    rightAnswer(inputID);
    counter(captionID, 1, scoreID);
  } else {
    wrongAnswer(inputID);
    actualAnswer(rightID);
    counter(captionID, 0, scoreID);
  }
}

/**
* Function: wrongAnswer
* Input: the ID of the answer the user selects.
* Output: the answer is changed to reflect a wrong selection.
* Useage: when a user selects the wrong answer, this changes
* the element to the red wrong answer display.
**/

function wrongAnswer(id) {
   var element = document.getElementById(id);
   element.style.color='white';
   element.style.backgroundColor='rgba(220,20,60, 0.4)';
}

/**
* Function: actualAnswer
* Input: the ID of the answer the user selects.
* Output: the answer is changed to reflect a wrong selection.
* Useage: when a user selects the wrong answer, this changes
* the element of the correct answer to green.
**/

function actualAnswer(id) {
  var element = document.getElementById(id);
   element.style.color='rgb(34,139,34)';
   element.style.backgroundColor='lightgrey';
}

/**
* Function: rightAnswer
* Input: the ID of the answer the user selects.
* Output: the answer is changed to reflect a correct selection.
* Useage: when a user selects the correct answer, this changes
* the element the user selected to green.
**/

function rightAnswer(id) {
  var element = document.getElementById(id);
   element.style.fontWeight='bold';
   element.style.color='white';
   element.style.backgroundColor='rgba(34,139,34, 0.4)';
}

/**
* Function: counter
* Input: the ID of the explanation, the amount of points to give
* to the user, and the ID of the element displaying the score.
* Output: the explanation and score are both revealed to the user.
* Useage: when a user selects an answer, the score is updated
* appropriately, and the explanation is revealed.
**/

  let count = 0; /** score of the user, starting at 0 **/
  let total = 4; /** total number of questions, MUST BE UPDATED **/
function counter(captionID, amount, scoreID) {
  count+=amount;
  document.getElementById(captionID).style.setProperty('display', 'inline-block', 'important');
  document.getElementById(scoreID).style.setProperty('display', 'inline-block', 'important');
  document.getElementById(scoreID).innerHTML = "You have answered " + count + " out of " + total + " questions correctly.";

}

/**
* Function: grader
* Input: the ID of the final score to be displayed, and the ID of the
* message to be shown to the user depending on the score.
* Output: the final score and message are both revealed to the user.
* Useage: this is where a user can be told they're a diplomat.
**/

function grader(finalID, revealID) {
  /** the below is calculated from the global variables **/
  var percent = (count / total);

  var message = "You finished the quiz, your answered " + count + " out of " + total + " questions correctly! <br>";

  if (percent <= 0.33) {
    /** modify string for a lower third percentage score **/
    document.getElementById(revealID).innerHTML = message + "You're in the bottom third.";
  } else if (percent <= 0.66) {
    /** modify string for a middle third percentage score **/
    document.getElementById(revealID).innerHTML = message + "You're in the middle third.";
  } else {
    /** modify string for an upper third percentage score **/
    document.getElementById(revealID).innerHTML = message + "You're a diplomat.";
  }

  document.getElementById(finalID).disabled = true;
}
