'use strict'

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}



/*****     HTML ELEMENTS     *****/
// INDEX

// ALPHABET SOUP
const nameInfo = {
	A: { name: 'Admiral Ackbar', color: 'orange' }, //
	B: { name: 'Bossk', color: 'yellow' },
	C: { name: 'Chewie', color: 'purple' },
	D: { name: 'Darth Maul', color: 'red' },
	E: { name: 'Ewok', color: 'orange' }, //

	F: { name: 'Boba Fett', color: 'blue' }, //
	G: { name: 'General Greivous', color: 'red' }, //
	H: { name: 'Han Solo', color: 'blue' }, //
	I: { name: 'IG-88', color: 'red' },
	J: { name: 'Jawa', color: 'yellow' },

	K: { name: 'Kit Fisto', color: 'green' },
	L: { name: 'Luke and Leia', color: 'purple' }, //
	M: { name: 'Millenium Falcon', color: 'white' }, //white
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
	Z: { name: 'Zuckuss', color: 'orange' } //orange
}

function setColor (c, div) {
	if (!div) { const div = document.getElementById('content') };
	const colors = {purple:'bf40bf', blue:'0000cc', green:'00ff00', yellow:'ffff00', orange:'ff6600', red:'ff0000', white: 'fff'};
	div.querySelectorAll('.text-decoration').forEach( function (curr) { curr.style = `text-shadow: 0 -2px 5px #${colors[c]}` });
}

(function () {
	const content = document.getElementById('content');
	content.querySelectorAll('button')
		.forEach( function (curr) { curr.addEventListener( 'click', function (e) {

			// Store letter and remove content
			let letter = nameInfo[e.target.value];
			let children = content.childNodes;
			for (let i = children.length; i > 0; --i) {
				if ( i != 2 && i != 4 ) { content.removeChild(children[i-1]) } };

			// Create and render new elements
			const img = document.createElement('img');
			img.src = `./images/${e.target.value.toLowerCase()}.jpg`;
			img.alt = letter.name;
			img.className = 'alphabet-image';
			content.insertBefore(img, children[1]);

			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'alphabet-button yellow';
			button.textContent = 'Next!';
			content.appendChild(button);

      // Add listener for button
			button.addEventListener('click', function () {
				const div = document.getElementById('content');
				const alphabetImage = content.querySelector('.alphabet-image');
				const oldLetter = alphabetImage.src.split('images/')[1].split('.')[0].toUpperCase();
				let newLetter;
				if ( !oldLetter || oldLetter === 'Z' ) newLetter = 'A';
					else newLetter = String.fromCharCode( oldLetter.charCodeAt() + 1 );
				alphabetImage.src=`./images/${newLetter.toLowerCase()}.jpg`;
				updateText(newLetter, nameInfo[newLetter], div);
			});

			updateText(e.target.value, letter, content);
		})
	});
})()

function updateText (letter, object, div) {
	const name = object.name.split(' ');
	let html = `<span class="text-decoration">${letter}</span> is for`;
	name.forEach( function (curr, i) {
    // If a word starts with the correct letter, add a span for decoration
		if (curr.startsWith( letter )) name[i] = `<span class="text-decoration">${curr[0]}</span>${curr.substring(1)}`; });
	for (let i = 0; i < name.length; i++) html += ` ${name[i]}`;
	div.querySelector('.alphabet-text').innerHTML = html;
	const color = setColor(object.color, div);
}

// ABOUT
