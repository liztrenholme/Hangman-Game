var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "TREATS", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MEESERS", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
var guessesLeft = 15;
var wins = 0;
var guesses = [];
var incorrectLetters = [];
var correctLetters = [];
var letter;
var wordAsSpaces = [];

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
		wordAsSpaces.push("_");
	}
// turns wordAsSpaces into string from array
document.getElementById("wordspace").textContent = wordAsSpaces.join(" ");
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
	
// for debugging purposes
console.log(alphabet.indexOf(letter));
console.log(letter);


// if letter guessed is correct
if (word.includes(letter)) {
	var breakdown = word.split('');
	var correctGuess = breakdown.indexOf(letter);

	console.log(breakdown);

	// guesses.push(letter);

	wordAsSpaces[correctGuess] = letter;
	console.log(wordAsSpaces);

	document.getElementById("wordspace").textContent = wordAsSpaces.join(" ");
	// document.getElementById("guesses").textContent = guesses.join(" ");

}

else { // if letter is null, do not register it as a guess
	if (letter === null) {
		guessesLeft = guessesLeft - 0;
	}
	else { // but if letter is a valid guess but incorrect, send it to guesses array
		guessesLeft--;
		document.getElementById("guesses-left").textContent = guessesLeft;
		guesses.push(letter);
		document.getElementById("guesses").textContent = guesses.join(" ");
	}

};

// game win/lose
if (guessesLeft === 0) {
	alert("You lost this round!");
	beginGame();
}
else if (wordAsSpaces === word) {
	alert("You won this round!");
	makeWord();
	wins++;
	document.getElementById("wins").textContent = "Wins: " + wins;
}
}
beginGame(); // starts the game!
