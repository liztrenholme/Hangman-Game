var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "TREATS", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MEESERS", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
var guessesLeft = 15;
var wins = 0;
var guesses = [];
var incorrectLetters = [];
var letter;
var spacedWord;
var lettersInWord = [];

// picking a random word from the words array
var wordNum = Math.floor(Math.random() * words.length); 
var word = words[wordNum];

// listens for keystroke to signal start of game
function beginGame() {
	document.addEventListener("keyup", function() {
	}, false);
};

// putting word onto board	
function makeWord() {
	for (var i = 0; i < word.length; i++) {
		lettersInWord.push("_");
	}
	document.getElementById("wordspace").textContent = lettersInWord.join(" ");
	console.log(word);
};
makeWord();

// registers that keystroke is a guess
document.onkeyup = function(event) {
	letter = event.key;
	letter = letter.toUpperCase();
	console.log(letter);
	console.log(word);

// sees if guess is actually a letter
if (alphabet.indexOf(letter) === -1) {
		letter = null; // assigns a null value if key pressed isn't a letter
		guessesLeft = guessesLeft - 0; // keeps guessesLeft from decrementing if letter is null
	}

	if (guesses.indexOf(letter) !== -1) {
		letter = null;
		guessesLeft = guessesLeft - 0;
	}

// need to exclude repeat guesses
console.log(letter);
if (word.includes(letter)) { 
	for (var i = 0; i < word.length; i++) {
		if (word.charAt(i) === letter) {
			lettersInWord.slice(i, i + 1);
			return word;
		}
	}
}
else { // if letter is null, do not register it as a guess
	if (letter === null) {
		guessesLeft = guessesLeft - 0;
	}
	else { // but if letter is a valid guess but incorrect, send it to guesses array
		guessesLeft--;
		document.getElementById("guesses-left").textContent = guessesLeft;
		guesses.push(letter) + (i + 1);
		document.getElementById("guesses").textContent = guesses + " ";
	}

};


// game win/lose
if (guessesLeft === 0) {
	alert("You lost this round!");
	beginGame();
}
else if (lettersInWord.indexOf("_") === -1) {
	alert("You won this round!");
	makeWord();
	wins++;
	document.getElementById("wins").textContent = "Wins: " + wins;
}
}
beginGame(); // starts the game!
