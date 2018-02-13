var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "TREATS", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MEESERS", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
var guessesLeft = 15;
var wins = 0;
var spaces = [" ", "_", "_ _", "_ _ _", "_ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _"];
var guesses = [];
var incorrectLetters = [];

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

// make sure key pressed is actually a letter
function validateLetter() {
	for (i = 0; i < alphabet.length; i++) {
		if (letter === alphabet[i]) {
			letter = letter;
		}
		else {
			letter = null;
		}
	}
};

// determine if letter is in word or not
function judgeLetter() {
	for (var i = 0; i < word.length; i++) {
		if (letter === word.charAt()) { // if letter is in word
			spaceToLetter();
		}
		else {
			noBueno();
		}
	}
};


// put correct letter guessed in word
function spaceToLetter() {

};


// put incorrect letter guessed into guesses array, decrement chances left
function noBueno() {

};

// if all letters are guessed, increment wins number
function score() {
	if (word === word) {
		wins = wins + 1;
		document.getElementById("wins").innerHTML = wins;
	}
};

beginGame();

document.onkeyup = function(event) {
	var letter = event.key;
	letter = letter.toUpperCase();
	console.log(letter);
	console.log(word);
};
