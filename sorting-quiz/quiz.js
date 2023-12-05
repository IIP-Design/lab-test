// Identify the quiz buttons.
const startButton = document.getElementById( 'startButton' );
const checkOrderButton = document.getElementById( 'checkOrderButton' );
const resetButton = document.getElementById( 'resetButton' );

// Identify other important page elements.
const eventsContainer = document.getElementById( 'eventsContainer' );
const messageContainer = document.getElementById( 'messageContainer' );

// Define the quiz content.
const EVENTS_DATA = [
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/Wright-Brothers.jpg',
    caption: 'Caption 1',
    alt: 'Alt text 1',
    copy: '<strong>Wright 1903 Flyer</strong>  The Wright Flyer (also known as the Kitty Hawk) made the first sustained flight by a manned, heavier-than-air flying machine, or airplane. Invented and flown by brothers Orville and Wilbur Wright, it ushered in the pioneer era of aviation. The Wright brothers’ seminal accomplishment encompassed not only the breakthrough first flight of an airplane, but also the equally important achievement of establishing the foundation of aeronautical engineering. (First flight: December 17, 1903)',
    simplified: 'Wright Flyer (First flight: December 17, 1903)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/Douglas-World-Cruiser.jpg',
    caption: 'Caption 2',
    alt: 'Alt text 2',
    copy: '<strong>Douglas World Cruiser.</strong>  First aircraft to fly around the world. 1924',
    simplified: 'Douglas World Cruiser (First global flight: began April 6, 1924; completed September 23, 1924)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/Spirit-of-St.-Louis.jpg',
    caption: 'Caption 3',
    alt: 'Alt text 3',
    copy: '<strong>Ryan NYP &quot;Spirit of St. Louis&quot;</strong>  The aircraft in which Charles Lindbergh completed the first non-stop solo flight across the Atlantic. 1927  Inspired expansion of air routes during the following &quot;Lindbergh Boom.&quot;',
    simplified: 'Ryan NYP “Spirit of St. Louis” (First solo, nonstop transatlantic flight: began May 20, 1927; completed May 21, 1927)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/Bell-X-1.jpg',
    caption: 'Caption 4',
    alt: 'Alt text 4',
    copy: '<strong>Bell X-1</strong>  The first aircraft to fly faster than the speed of sound.  Pilot Captain Charles E. &quot;Chuck&quot; Yeager. 1947',
    simplified: 'Bell X-1 (First flight: October 14, 1947)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/707.jpg',
    caption: 'Caption 5',
    alt: 'Alt text 5',
    copy: '<strong>Boeing 367-80, prototype 707.</strong>  Prototype for America’s first jet transport, revolutionized civil air travel and introduced the Jet Age 1954',
    simplified: 'Boeing 367-80, prototype 707 (First flight: July 15, 1954)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/Cessna.jpg',
    caption: 'Caption 6',
    alt: 'Alt text 6',
    copy: '<strong>Cessna 152/172</strong>  Most widely produced aircraft of any kind, 44,000+ built so far.  1955 – present',
    simplified: 'Cessna 152/172 (Introduced: 1956, Cessna 172; 1977; Cessna 152)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/X-15.jpg',
    caption: 'Caption 7',
    alt: 'Alt text 7',
    copy: '<strong>North American X-15</strong>  Rocket powered research aircraft. First hypersonic aircraft capable of flying 5 times the speed of sound.  Faster aircraft in the world at Mach 6.7 i.e. 4520 mph.  1959-1967  Helped pioneer technology for the space program.',
    simplified: 'North American X-15 (First flight: June 8, 1959)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/747.jpg',
    caption: 'Caption 8',
    alt: 'Alt text 8',
    copy: '<strong>Boeing 747</strong>  First wide-bodied jet airliner.  Greatly reduced air fares because of its economies of scale making commercial flight available to millions more people. Revolutionized air travel. 1969',
    simplified: 'Boeing 747 (First flight: February 9, 1969)',
  },
  {
    image: 'https://staticcontent.america.gov/uploads/2023/11/787.jpg',
    caption: 'Caption 9',
    alt: 'Alt text 9',
    copy: '<strong>Boeing 787</strong>  First airliner built primarily of lighter and stronger composites materials, rather than aluminum alloys.  Greatly reduced weight and increased efficiency.  2009',
    simplified: 'Boeing 787 (First flight: December 15, 2009)',
  },
];

// Define the results rankings.
const RANKINGS = {
  fourth: {
    title: '4th-Class Cadet',
    message: 'You need to work on your order. Keep learning and try again!',
  },
  cadet: {
    title: 'Cadet',
    message: 'Starting slowly, but with a little extra study, you’ll be a candidate for flight school!',
  },
  captain: {
    title: 'Captain',
    message: 'Impressive! You have a solid grasp of U.S. aviation history, so build on it and prepare to advance.',
  },
  squadLeader: {
    title: 'Squadron Leader',
    message: 'Aced it! You know your stuff, and you’re ready for takeoff!',
  },
  commander: {
    title: 'Wing commander',
    message: 'Exceptional. You have the makings of an aviation superstar!',
  },
};

/* --- Initialize the two lists that the quiz compares. --- */
let displayOrder = []; // i.e. the shuffled list
let correctOrder = [];

/* --- UTILITY FUNCTIONS --- */

/**
 * Scrolls the user to the top of the page.
 */
const scrollToTop = () => {
  window.scrollTo( { top: 0, behavior: 'smooth' } );
};

/**
 * Checks whether the selected key is the 'Enter' key, in which case
 *  it simulates a click on the target element.
 * @param {KeyboardEvent} event A keydown event.
 */
const handleKeydown = event => {
  if ( event.key === 'Enter' ) {
    // Trigger the button's click event on pressing Enter
    event.preventDefault(); // Prevents triggering the default button click behavior
    event.target.click();
  }
};

/**
 * Randomizes the content in a given array.
 * @param {any[]} arr Any array.
 */
const shuffleArray = arr => {
  for ( let i = arr.length - 1; i > 0; i-- ) {
    const j = Math.floor( Math.random() * ( i + 1 ) );

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

/**
 * Moves the item at a given index in an array either one index forward or back.
 * @param {number} index The current index of the item in the array.
 * @param {string} direction Whether to advance the in a positive of negative direction - accepts the values 'up' and 'down'
 */
const moveEvent = ( index, direction ) => {
  // Ignore up clicks on the first item and down clicks on the final item.
  const isFirstUp = direction === 'up' && index === 0;
  const isLastDown = direction === 'down' && index === displayOrder.length - 1;

  if ( isFirstUp || isLastDown ) {
    return;
  }

  // Update the index of the selected item.
  const newIndex = direction === 'up' ? index - 1 : index + 1;

  [displayOrder[index], displayOrder[newIndex]] = [displayOrder[newIndex], displayOrder[index]];

  // Update the UI.
  renderQuizItems(); // eslint-disable-line no-use-before-define
};

/**
 * Assigns the user a rank based on the number of correct answers they selected.
 * @param {number} correct The number of items in the correct location on the list.
 * @returns The title and message corresponding to that number of correct answers.
 */
const getRank = correct => {
  // Set default rank value.
  let rank = RANKINGS.fourth;

  if ( correct >= 1 && correct <= 3 ) {
    rank = RANKINGS.cadet;
  } else if ( correct >= 4 && correct <= 6 ) {
    rank = RANKINGS.captain;
  } if ( correct >= 7 && correct <= 8 ) {
    rank = RANKINGS.squadLeader;
  } else if ( correct === 9 ) {
    rank = RANKINGS.commander;
  }

  return rank;
};

/* --- CONSTRUCT THE QUIZ --- */

/**
 * Creates a content node corresponding to the provided event.
 * @param {Object} event An object containing information about the given quiz item.
 * @returns {HTMLDivElement} The image and text corresponding to the provided event.
 */
const createItemContent = event => {
  // Create the container for the item content.
  const itemContent = document.createElement( 'div' );

  itemContent.classList.add( 'event-content' );

  // Creates the event image within a figure element.
  const imageContainer = document.createElement( 'figure' );

  imageContainer.classList.add( 'image-container' );
  imageContainer.innerHTML = `<img src="${event.image}" alt="${event.alt}">`;

  const caption = document.createElement( 'figcaption' );

  caption.classList.add( 'caption' );
  caption.innerHTML = event.caption;

  imageContainer.appendChild( caption );

  // Creates an container for the text pertaining to the event.
  const detailsContainer = document.createElement( 'div' );

  detailsContainer.classList.add( 'details-container' );
  detailsContainer.innerHTML = event.copy;

  // Adds the event image and text to the item
  itemContent.appendChild( imageContainer );
  itemContent.appendChild( detailsContainer );

  return itemContent;
};

/**
 * Creates a set of button used to move the given quiz item up or down.
 * @param {number} index The location of the given item in the events array.
 * @returns {HTMLDivElement} The arrow buttons used to reorder the quiz items.
 */
const createItemArrows = index => {
  // Create the container for the up and down arrows
  const arrowsDiv = document.createElement( 'div' );

  arrowsDiv.classList.add( 'arrows' );

  // Create the up arrow.
  const upArrow = document.createElement( 'button' );

  upArrow.classList.add( 'arrow', index === 0 ? 'disabled' : null );
  upArrow.innerHTML = '&#x25B2;';
  upArrow.addEventListener( 'click', () => moveEvent( index, 'up' ) );

  // Create the down arrow.
  const downArrow = document.createElement( 'button' );

  downArrow.classList.add( 'arrow', index === displayOrder.length - 1 ? 'disabled' : null );
  downArrow.innerHTML = '&#x25BC;';
  downArrow.addEventListener( 'click', () => moveEvent( index, 'down' ) );

  // Add both arrows to the arrow container
  arrowsDiv.appendChild( upArrow );
  arrowsDiv.appendChild( downArrow );

  return arrowsDiv;
};

/**
 * Iterates through the list of events rendering each one out as a quiz item.
 */
const renderQuizItems = () => {
  // Clears out the content of the event container before repopulating with updated content.
  eventsContainer.innerHTML = '';

  displayOrder.forEach( ( event, index ) => {
    // Create the division that contains the quiz item.
    const itemDiv = document.createElement( 'div' );

    itemDiv.classList.add( 'event' );

    // Create the item content and control buttons.
    const contentDiv = createItemContent( event );
    const arrowsDiv = createItemArrows( index );

    // Adds the item content and control buttons to the event.
    itemDiv.appendChild( contentDiv );
    itemDiv.appendChild( arrowsDiv );

    // Adds the complete event to the quiz.
    eventsContainer.appendChild( itemDiv );
  } );
};

/**
 * Generates an ordered list of the quiz items in the correct order.
 * @returns {HTMLOListElement} The event summaries in order.
 */
const createCorrectList = () => {
  const correctList = document.createElement( 'ol' );

  correctOrder.forEach( event => {
    const listItem = document.createElement( 'li' );

    listItem.innerHTML = event.simplified;

    correctList.appendChild( listItem );
  } );

  return correctList;
};

/**
 * Creates a HTML node containing the quiz items in the correct order.
 * @returns {HTMLDivElement} The answers div.
 */
const createAnswers = () => {
  const listContainer = document.createElement( 'div' );

  listContainer.id = 'correct-answers';

  const listHeading = document.createElement( 'p' );
  const listHeadingText = document.createTextNode( 'The nine airplanes listed in chronological order are:' );

  listHeading.appendChild( listHeadingText );

  // Create the list of correct answers.
  const list = createCorrectList();


  listContainer.appendChild( listHeading );
  listContainer.appendChild( list );

  return listContainer;
};

/**
 * Toggles the visibility of the answers div on.
 */
const showAnswers = () => {
  const answers = document.getElementById( 'correct-answers' );
  const btn = document.getElementById( 'show-answers-btn' );

  if ( answers ) {
    answers.classList.add( 'show' );

    // Scroll to the answers section.
    answers.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }

  if ( btn ) {
    btn.style.display = 'none';
  }
};

/**
 * Displays the check order message with the user's rank and list in correct order.
 * @param {number} correct The number of quiz items the user placed in the correct order.
 */
const showMessage = correct => {
  // short circuit if message container not found.
  if ( !messageContainer ) {
    return;
  }

  // Clear out the message before updating.
  messageContainer.innerHTML = '';

  const { title, message } = getRank( correct );

  // Create the message text.
  const yourRank = document.createElement( 'p' );
  const yourRankText = document.createTextNode( `Based on your sorting, you've earned the rank of ${title}! ${message}` );

  yourRank.appendChild( yourRankText );

  // Create a button to show the correct answers.
  const showAnswersButton = document.createElement( 'button' );

  showAnswersButton.id = 'show-answers-btn';
  showAnswersButton.innerText = 'Show Answers';
  showAnswersButton.addEventListener( 'click', showAnswers );

  // Create the correct answers list (they are initially hidden).
  const answers = createAnswers();

  // Add the message text and correct answers to the message.
  messageContainer.appendChild( yourRank );
  messageContainer.appendChild( showAnswersButton );
  messageContainer.appendChild( answers );

  // Make the container visible
  messageContainer.classList.add( 'show' );

  // Scroll to the message.
  window.scrollTo( { top: messageContainer.offsetTop, behavior: 'smooth' } );
};

/**
 * Removes the check order message from the user's visibility.
 */
const hideMessage = () => {
  messageContainer.classList.remove( 'show' );
};

/* --- GAME PLAY FUNCTIONS --- */

/**
 * Shuffles the list of events and renders the quiz components onto the page.
 */
const startGame = () => {
  // Initialize the quiz data.
  correctOrder = [...EVENTS_DATA];
  displayOrder = [...EVENTS_DATA];
  shuffleArray( displayOrder );

  // Populate the quiz.
  renderQuizItems();

  // Set quiz buttons to their active state.
  startButton.disabled = true;
  checkOrderButton.disabled = false;
  resetButton.disabled = false;

  // Clear out the message.
  messageContainer.innerHTML = '';
};

/**
 * Checks the user's quiz submission and assigns them a ranking based on how many answers they got right.
 */
const checkOrder = () => {
  const correctCount = displayOrder.reduce(
    ( count, event, index ) => ( event.image === correctOrder[index].image ? count + 1 : count ),
    0,
  );

  showMessage( correctCount );
};

/**
 * Re-initialized the quiz back to it's initial state.
 */
const resetGame = () => {
  // Set quiz buttons to their default state.
  startButton.disabled = false;
  checkOrderButton.disabled = true;
  resetButton.disabled = true;

  // Reset the check order message.
  eventsContainer.innerHTML = '';
  hideMessage();

  // Reset the quiz data.
  displayOrder = [];

  // Scroll to the top of the page.
  scrollToTop();
};

/* --- LET'S PLAY A GAME! --- */

/**
 * Initializes the game by adding the necessary event handlers to the page.
 */
const initGame = () => {
  // Add main button event listeners
  startButton?.addEventListener( 'click', startGame );
  checkOrderButton?.addEventListener( 'click', checkOrder );
  resetButton?.addEventListener( 'click', resetGame );

  // Add keyboard event listeners
  startButton.addEventListener( 'keydown', handleKeydown );
  checkOrderButton.addEventListener( 'keydown', handleKeydown );
  resetButton.addEventListener( 'keydown', handleKeydown );
};

initGame();
