var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "TREATS", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MEESERS", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
var guessesLeft = 15;
var wins = 0;
var spaces = [" ", "_", "_ _", "_ _ _", "_ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _"];
var guesses = [];
var incorrectLetters = [];
var letter;
var spacedWord;

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
	document.getElementById("wordspace").textContent = word;
	console.log(word);
};

// putting spaces in place of letters
function spaceOut() {
	document.getElementById("wordspace").textContent = spaces[word.length];
};


document.onkeyup = function(event) {
	letter = event.key;
	letter = letter.toUpperCase();
//	console.log(letter);
	console.log(word);
	spacedWord = spaces[word.length];
	console.log(spacedWord);

// letters not being validated?
	for (i = 0; i < letter.length; i++) {
		if (letter === alphabet[i]) {
			letter = letter;
		}
		else {
			//letter = "blah";
			console.log(letter);
		}
	}
console.log(letter);
	if (word.includes(letter)) { 
		for (var i = 0; i < word.length; i++) {
		if (word.charAt(i) === letter) {
			spacedWord.slice(i, i + 1);
		}
	}
}
	else {
		guessesLeft--;
		document.getElementById("guesses-left").textContent = guessesLeft;
		guesses.push(letter) + (i + 1);
		document.getElementById("guesses").textContent = guesses + " ";

	};
}

beginGame();