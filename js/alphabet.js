'use strict'

/*****     ALPHABET SOUP     *****/

// Create the list of Star Wars characters and relevant info
const nameInfo = {
	A: { name: 'Admiral Ackbar', color: 'orange' },
	B: { name: 'Bossk', color: 'yellow' },
	C: { name: 'Chewie', color: 'purple' },
	D: { name: 'Darth Maul', color: 'red' },
	E: { name: 'Ewok', color: 'orange' },

	F: { name: 'Boba Fett', color: 'blue' },
	G: { name: 'General Greivous', color: 'red' },
	H: { name: 'Han Solo', color: 'blue' },
	I: { name: 'IG-88', color: 'red' },
	J: { name: 'Jawa', color: 'yellow' },

	K: { name: 'Kit Fisto', color: 'green' },
	L: { name: 'Luke and Leia', color: 'purple' },
	M: { name: 'Millenium Falcon', color: 'white' },
	N: { name: 'Nien Nunb', color: 'red' },
	O: { name: 'Obi-Wan', color: 'blue' },

	P: { name: 'Princess Leia', color: 'red' },
	Q: { name: 'Qui-Gon Jinn', color: 'green' },
	R: { name: 'R2-D2', color: 'blue' },
	S: { name: 'Stormtroopers', color: 'blue' },
	T: { name: 'TIE Fighter', color: 'green' },

	U: { name: 'Luminara Unduli', color: 'red' },
	V: { name: 'Darth Vader', color: 'blue' },
	W: { name: 'Mace Windu', color: 'purple' },
	X: { name: 'X-Wing', color: 'red' },
	Y: { name: 'Yoda', color: 'green' },
	Z: { name: 'Zuckuss', color: 'orange' }
}



// Change to next letter (if b === false, then previous)
function loadNextLetter (b) {
  // Store image element and letter currently displayed
  const div = document.getElementById('alphabet');
  const alphabetImage = div.querySelector('.alphabet-image');
  const currentLetter = alphabetImage.src.split('images/')[1].split('.')[0].toUpperCase();

  let newLetter;

  // Reverse through letters, loop to Z as neccesary
  if ( b === false ) {
    if ( currentLetter === 'A' ) newLetter = 'Z';
      else newLetter = String.fromCharCode( currentLetter.charCodeAt() - 1 ); }
  // Advance through letters, and loop to A as neccesary
  else {
    if ( currentLetter === 'Z' ) newLetter = 'A';
      else newLetter = String.fromCharCode( currentLetter.charCodeAt() + 1 ); }

  // Update page with new values
  alphabetImage.src = `./images/${newLetter.toLowerCase()}.jpg`;
	alphabetImage.alt = nameInfo[newLetter].name;
	updateText(newLetter, nameInfo[newLetter], div);
}



// Add flair to *A* is for *A*ckbar and the like
function updateText (letter, object, div) {
	const name = object.name.split(' ');
	let html = `<span class="text-decoration">${letter}</span> is for`;

  // If a word starts with the correct letter, add html snipet
	name.forEach( function (curr, i) {
		if (curr.startsWith( letter )) name[i] = `<span class="text-decoration">${curr[0]}</span>${curr.substring(1)}`;
  });

  // Add formated name to html string
	for (let i = 0; i < name.length; i++) html += ` ${name[i]}`;

  // Print to page, and add lightsaber effect to letters
	div.querySelector('.alphabet-text').innerHTML = html;
	setColor(object.color, div);
}

// Add lightsaber effect to '.text-decoration'
function setColor (c, div) {
	if (!div) { const div = document.getElementById('alphabet') };

  // Glows passed-in color (${c}), white on inside
    // Thin grey inner-most border for definition
	div.querySelectorAll('.text-decoration')
    .forEach( function (curr) {
      curr.style = `text-shadow:  0 0 2px grey,
                                  0 0 8px #fff,
                                  0 0 12px #fff,
                                  0 0 15px ${c},
                                  0 0 25px ${c};`
  });
}

// On load addEventListener that will load the letter selected by one of two buttons
(function () {
	const alphabet = document.getElementById('alphabet');
	alphabet.querySelectorAll('button')
		.forEach( function (curr) { curr.addEventListener( 'click', function (e) {

			// Store chosen letter and remove content
			let letter = nameInfo[e.target.value];
			let children = alphabet.childNodes;
			for (let i = children.length; i > 0; --i) {
        // Remove all elements besides h2 which will become 'A is for...'
				if ( i != 4 ) { alphabet.removeChild(children[i-1]) } };

			// Create and render image
			const img = document.createElement('img');
			img.src = `./images/${e.target.value.toLowerCase()}.jpg`;
			img.alt = letter.name;
			img.className = 'alphabet-image';
			alphabet.insertBefore(img, children[0]);

      // Create and render button
			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'alphabet-button yellow';
			button.textContent = 'Next!';
			alphabet.appendChild(button);

      // Add listener for button
			button.addEventListener('click', loadNextLetter);

      // Track left and right arrow keys to load previous or next letters
      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '39') { loadNextLetter(); }
          else if (e.keyCode == '37') { loadNextLetter(false); }
      }

			updateText(e.target.value, letter, alphabet);
		})
	});
})()
