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
	A: 'Admiral Ackbar',
	B: 'Bossk',
	C: 'Chewie',
	D: 'Darth Maul',
	E: 'Ewok',

	F: 'Boba Fett',
	G: 'General Greivous',
	H: 'Han Solo',
	I: 'IG-88',
	J: 'Jawa',

	K: 'Kit Fisto',
	L: 'Luke and Leia',
	M: 'Millenium Falcon',
	N: 'Nien Nunb',
	O: 'Obi-Wan',

	P: 'Princess Leia',
	Q: 'Qui-Gon Jinn',
	R: 'R2-D2',
	S: 'Stormtroopers',
	T: 'TIE Fighter',

	U: 'Luminara Unduli',
	V: 'Darth Vader',
	W: 'Mace Windu',
	X: 'X-Wing',
	Y: 'Yoda',
	Z: 'Zuckuss'
}

// Change to next letter on clicking button on alphabet page
document.querySelector('.alphabet-button')
	.addEventListener('click', function () {
		const alphabetImage = document.querySelector('.alphabet-image');
		const oldLetter = alphabetImage.src.split('images/')[1].split('.')[0];
		let newLetter;
		if ( !oldLetter || oldLetter === 'z' ) newLetter = 'a';
			else newLetter = String.fromCharCode( oldLetter.charCodeAt() + 1 );
		alphabetImage.src=`./images/${newLetter}.jpg`;
		updateText(newLetter.toUpperCase());
});


function updateText (letter) {
	const name = nameInfo[letter].split(' ');
	let html = `<span class="text-decoration">${letter}</span> is for`;
	name.forEach( function (curr, i) {
    // If a word starts with the correct letter, add a span for decoration
		if (curr.startsWith( letter )) name[i] = `<span class="text-decoration">${curr[0]}</span>${curr.substring(1)}`; });
	for (let i = 0; i < name.length; i++) html += ` ${name[i]}`;
	document.querySelector('.alphabet-text').innerHTML = html;
	document.querySelectorAll('.text-decoration').style = 'text-shadow: 0 -2px 5px #bf40bf';
}

// ABOUT
