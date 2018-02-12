var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "TREATS", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MEESERS", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
var guessesLeft = 15;
var wins = 0;
var spaces = [" ", "_", "_ _", "_ _ _", "_ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _"];
var guesses = [];

// Picking a random word from the words array
var wordNum = Math.floor(Math.random() * words.length); 
var word = words[wordNum];

function beginGame() {
	document.addEventListener("keyup", function() {
		makeWord();
		spaceOut();
	}, false);
};

// putting word onto board
function makeWord() {
	document.getElementById("wordspace").innerHTML = word;
	console.log(word);
};

// putting spaces in place of letters
function spaceOut() {
	document.getElementById("wordspace").innerHTML = spaces[word.length];
};

document.onkeyup = function(event) {
    var letter = event.key;
    letter = letter.toUpperCase();
    console.log(letter);
	for (var i = 0; i < word.length; i++) {
		if (letter === word.charAt()) {
			for (var i = 0; i < word.length; i++) {
				if (word[i] === letter) {
					word[i] = letter;
				}
			}
		}
		else if (word.indexOf(letter) === -1) { // letter is NOT in the word
    guesses.push(letter); // update letters guessed
    guesses.innerHTML = guesses.join(', ');
    document.getElementById("guesses").innerHTML = guesses[i];
    document.getElementById("guesses-left").innerHTML = guessesLeft--;
		} 
	}
};

for (var i = 0; i < guesses.length; i++) {
	letter.toUpperCase();
	(letter.push(guesses) + (i + 1));
};

// Begins game when user presses any key
beginGame();










/*	word.charAt[i];

	guess: function() {
		document.onkeypress = function(event) {
			spaces.textContent = event.key;
		}
	};



// guessedLets.includes(word.charAt[i])
// join()

document.create.element("div"); */