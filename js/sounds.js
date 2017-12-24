'use strict'

/*****     SOUNDS     *****/

// Create array of words
const words = [
  'CAT', 'VAN', 'DAD', 'CAR', 'APE', 'PAY',
  'PET', 'ELF', 'BEE', 'EMU',
  'HIT', 'KID', 'PIG', 'ICE', 'PIE',
  'MOM', 'FOX', 'DOG', 'ROW', 'OIL',
  'BUG', 'HUT', 'CUB', 'SUN'
]

// Find and store HTML nodes for later
const image = document.querySelector('img');
const word = image.parentNode.nextElementSibling.lastElementChild;
const button = image.parentNode.nextElementSibling.nextElementSibling;

// Advance page on button click, enter, spacebar, or right arrow
button.addEventListener('click', advancePage);
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 || e.keyCode == 13 || e.keyCode == '39' ) { advancePage } }

let i = 0; // Iterator that will track progress through 'words' array
let lowerCase = true; // Var that will cycle through upper/lower cases

// Alter image, button text, and the word being sounded
function advancePage () {
  if ( button.textContent === 'Guess' ) {
    // If button says 'guess', display pic of current word
    image.src = `./images/${word.textContent.toLowerCase()}.jpg`;
    button.textContent = 'Next!';
  } else {
    // Otherwise, display next word to guess
    image.src = './images/thinking.jpg';
    i++;
    if ( i >= words.length ) {
      i = 0;
      if ( lowerCase === true ) lowerCase = false;
      else lowerCase = true;
    }
    word.innerHTML = getWord();
    button.textContent = 'Guess';
  }
}

// Pull word from array and add a span around vowels
function getWord () {
  let w = words[i].split('');
  let newHTML = '';
  for (let i = 0; i < w.length; i++) {
    if (w[i] === 'A' || w[i] === 'E' || w[i] === 'I' ||
        w[i] === 'O' || w[i] === 'U' ) {
      w[i] = `<span class='sounds-vowel'>${w[i]}</span>`;
    }
    if ( lowerCase === true ) newHTML += w[i].toLowerCase();
    else newHTML += w[i];
  }
  return newHTML;
}
