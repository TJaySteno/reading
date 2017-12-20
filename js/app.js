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
