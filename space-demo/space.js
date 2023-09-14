/* SCROLL ANIMATION */
const circles = document.querySelectorAll( '.scroll-progress-circle' );

window.addEventListener( 'scroll', () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const progress = ( scrollTop / scrollableHeight ) * ( circles.length - 1 );

  circles.forEach( ( circle, index ) => {
    if ( index <= progress ) {
      circle.classList.add( 'scroll-progress-active' );
    } else {
      circle.classList.remove( 'scroll-progress-active' );
    }
  } );
} );

/* AUDIO HANDLER */
const audio = document.getElementById( 'backgroundAudio' );
const toggleButton = document.getElementById( 'toggleButton' );

toggleButton.addEventListener( 'click', () => {
  if ( audio.paused ) {
    audio.play();
    toggleButton.classList.remove( 'play' );
    toggleButton.classList.add( 'pause' );
  } else {
    audio.pause();
    toggleButton.classList.remove( 'pause' );
    toggleButton.classList.add( 'play' );
  }
} );

/* SPACE ANIMATION */
const randomPercentage = () => `${Math.random() * 100}%`;
const randomPixels = () => `${Math.random() * 2}px`;

// Function to create random stars on the background
function createStars( el ) {
  const numStars = 500; // Reduce the number of stars

  for ( let i = 0; i < numStars; i++ ) {
    const star = document.createElement( 'div' );

    star.classList.add( 'star' );
    star.style.left = randomPercentage();
    star.style.top = randomPercentage();
    star.style.width = randomPixels();
    star.style.height = randomPixels();

    el.appendChild( star );
  }
}

// Function to add shooting stars at intervals
function addShootingStars( el ) {
  const SHOOTING_STAR_DURATION = 2000; // milliseconds
  const shootingStar = document.createElement( 'div' );

  shootingStar.classList.add( 'shooting-star' );
  shootingStar.style.left = randomPercentage();
  shootingStar.style.top = randomPercentage();

  shootingStar.animate( [
    {
      opacity: 1,
      width: '3px',
      height: '3px',
    },
    {
      opacity: 0.5,
      width: '7px',
      height: '7px',
    },
    {
      left: randomPercentage(),
      top: randomPercentage(),
      opacity: 0,
      width: '1px',
      height: '1px',
    },
  ], {
    duration: SHOOTING_STAR_DURATION,
    iterations: 1,
  } );

  el.appendChild( shootingStar );

  setTimeout( () => {
    shootingStar.remove();
  }, SHOOTING_STAR_DURATION ); // Duration of shooting star animation in milliseconds
}

// Function to add floating images at random intervals
function addFloatingImages( el ) {
  const floatingImage = document.createElement( 'div' );

  floatingImage.classList.add( 'floating-image' );

  const imageClasses = [
    'spaceship', 'satellite', 'asteroid', 'satellite2', 'astronaut',
  ];

  const randomImageClass = imageClasses[Math.floor( Math.random() * imageClasses.length )];

  floatingImage.classList.add( randomImageClass );

  const side = Math.floor( Math.random() * 4 ); // 0: top, 1: right, 2: bottom, 3: left

  let randomStartX; let randomStartY; let randomEndX; let
    randomEndY;

  if ( side === 1 ) {
    randomStartX = `${window.innerWidth + 50}px`; // Start from outside the right margin
    randomStartY = `${Math.random() * document.body.clientHeight}px`;
    randomEndX = '-50px'; // End outside the left margin
    randomEndY = randomStartY;
  } else if ( side === 2 ) {
    randomStartX = `${Math.random() * window.innerWidth}px`;
    randomStartY = `${document.body.clientHeight + 50}px`; // Start from below the bottom margin
    randomEndX = randomStartX;
    randomEndY = '-50px'; // End above the top margin
  } else {
    randomStartX = '-50px'; // Start from outside the left margin
    randomStartY = `${Math.random() * document.body.clientHeight}px`;
    randomEndX = `${window.innerWidth + 50}px`; // End outside the right margin
    randomEndY = randomStartY;
  }

  floatingImage.style.left = randomStartX;
  floatingImage.style.top = randomStartY;

  // Calculate the animation duration based on distance
  const deltaX = Math.abs( parseFloat( randomEndX ) - parseFloat( randomStartX ) );
  const deltaY = Math.abs( parseFloat( randomEndY ) - parseFloat( randomStartY ) );
  const distance = Math.sqrt( deltaX * deltaX + deltaY * deltaY );
  const animationDuration = Math.max( 10000, distance * 10 ); // Minimum 8 seconds

  floatingImage.animate( [
    { transform: 'scale(0.5)' },
    { transform: 'scale(1)' },
    { left: randomEndX, top: randomEndY, transform: 'scale(0.5)' },
  ], {
    duration: animationDuration,
    easing: 'ease-in',
    iterations: 1,
  } );

  el.appendChild( floatingImage );

  // Remove the image after animation duration + buffer time
  setTimeout( () => {
    floatingImage.remove();
  }, animationDuration );
}

const initializeAnimations = el => {
  createStars( el );
  // // Add shooting stars every 30 seconds to reduce the frequency
  setInterval( () => {
    addShootingStars( el );
  }, 8000 ); // 10 seconds
};

window.onload = () => {
  const sections = document.querySelectorAll( '.Theme-TextSection' );

  [...sections].forEach( section => initializeAnimations( section ) );

  const body = document.querySelector( 'body' );

  // Add floating images at random intervals
  setInterval( () => {
    addFloatingImages( body );
  }, 10000 );
};

/* VIDEO EMBED */
// Adjust video player size based on window width
function adjustVideoSize() {
  const video = document.querySelector( 'video' );
  const videoEmbed = document.querySelector( '.video-embed' );
  const videoWidth = Math.min( videoEmbed.offsetWidth - 20, 600 ); // Max width of 600px

  video.style.width = `${videoWidth}px`;
}

// Play video when scrolled into view and pause when out of view
function playVideoOnScroll( entries, observer ) {
  entries.forEach( entry => {
    const video = entry.target.querySelector( 'video' );

    if ( entry.isIntersecting ) {
      if ( video.paused ) {
        video.play();
      }
    } else if ( !video.paused ) {
      video.pause();
      video.currentTime = 0; // Reset video to beginning
    }
  } );
}

// Set up Intersection Observer to watch for the video element
const videoObserver = new IntersectionObserver( playVideoOnScroll, {
  threshold: 0.5, // Play video when at least 50% visible
} );

const videoWrapper = document.querySelector( '.video-wrapper' );

videoObserver.observe( videoWrapper );

window.onload = function() {
  // Change this value to however many seconds you want to delay the text by.
  const theDelay = 5;
  const timer = setTimeout( showText, theDelay * 1000 );
};

function showText() {
  const delayedText = document.getElementById( 'delayedText' );

  delayedText.style.visibility = 'visible';
  delayedText.style.opacity = '1';
}
