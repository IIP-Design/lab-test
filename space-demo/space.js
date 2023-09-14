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


const sections = document.querySelectorAll( '.Theme-TextSection' );

// Function to create random stars on the background
function createStars() {
  console.log( 'stars' );
  const numStars = 7500; // Reduce the number of stars

  for ( const section of sections ) {
    for ( let i = 0; i < numStars; i++ ) {
      const star = document.createElement( 'div' );

      star.classList.add( 'star' );
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2}px`;
      star.style.height = `${Math.random() * 2}px`;
      section.appendChild( star );
    }
  }
}

// Function to add shooting stars at intervals
function addShootingStars() {
  for ( const section of sections ) {
    const shootingStar = document.createElement( 'div' );

    shootingStar.classList.add( 'shooting-star' );

    // Randomize the starting position of the shooting star
    const randomStartX = `${Math.random() * 100}%`;
    const randomStartY = `${Math.random() * 100}%`;

    shootingStar.style.setProperty( '--startX', randomStartX );
    shootingStar.style.setProperty( '--startY', randomStartY );

    // Randomize the ending position of the shooting star
    const randomEndX = `${Math.random() * 100}%`; // Random end X position
    const randomEndY = `${Math.random() * 100}%`; // Random end Y position

    shootingStar.style.setProperty( '--endX', randomEndX );
    shootingStar.style.setProperty( '--endY', randomEndY );

    section.appendChild( shootingStar );
    setTimeout( () => {
      shootingStar.remove();
    }, 5000 ); // Duration of shooting star animation in milliseconds
  }
}

// Add shooting stars every 30 seconds to reduce the frequency
setInterval( () => {
  addShootingStars();
}, 8000 ); // 10 seconds

// Initial setup
createStars();

// Function to add meteor showers at intervals
function addMeteorShowers() {
  for ( const section of sections ) {
    const meteor = document.createElement( 'div' );

    meteor.classList.add( 'meteor' );
    meteor.style.left = `${Math.random() * 100}%`;
    meteor.style.top = `${Math.random() * 100}%`;
    section.appendChild( meteor );
    setTimeout( () => {
      meteor.remove();
    }, 5000 ); // Duration of meteor shower in milliseconds
  }
}

// Add meteor showers every 15 seconds to reduce the frequency
setInterval( () => {
  addMeteorShowers();
}, 12000 );


// Function to add floating images at random intervals
function addFloatingImages() {
  for ( const section of sections ) {
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
    floatingImage.style.setProperty( '--endX', randomEndX );
    floatingImage.style.setProperty( '--endY', randomEndY );

    section.appendChild( floatingImage );

    // Calculate the animation duration based on distance
    const deltaX = Math.abs( parseFloat( randomEndX ) - parseFloat( randomStartX ) );
    const deltaY = Math.abs( parseFloat( randomEndY ) - parseFloat( randomStartY ) );
    const distance = Math.sqrt( deltaX * deltaX + deltaY * deltaY );
    const animationDuration = Math.max( 10000, distance * 10 ); // Minimum 8 seconds

    // Start the animation
    requestAnimationFrame( () => {
      floatingImage.style.transition = `transform ${animationDuration}ms linear`;
      floatingImage.style.transform = `translate(${randomEndX}, ${randomEndY})`;
    } );

    // Remove the image after animation duration + buffer time
    setTimeout( () => {
      floatingImage.remove();
    }, animationDuration + 8000 ); // Add some buffer time
  }
}

// Add floating images at random intervals
setInterval( () => {
  addFloatingImages();
}, 5000 );

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

function createSpaceDust() {
  const numParticles = 1000;

  for ( const section of sections ) {
    for ( let i = 0; i < numParticles; i++ ) {
      const dust = document.createElement( 'div' );

      dust.classList.add( 'space-dust' );
      dust.style.left = `${Math.random() * 100}%`;
      dust.style.top = `${Math.random() * 100}%`;
      section.appendChild( dust );
    }
  }
}

// Call the function to create space dust particles
createSpaceDust();
