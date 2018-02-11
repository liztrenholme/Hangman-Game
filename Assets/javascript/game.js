var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "HUNGRY", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MAINE COON", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
//var guess = event.key;
var guesses = [];
var wins = [];

// Picking a random word from the words array
var wordNum = Math.floor(Math.random() * words.length); 
var word = words[wordNum];
//var spaces = document.getElementById("wordspace");



var wordspace = document.getElementById("wordspace");

function makeWord() {
	document.getElementById("wordspace").innerHTML = word;
};
//wordspace.onkeypress = 

//document.onkeypress = makeWord();

document.getElementById("wordspace").addEventListener("keypress", makeWord, false);

function guessedLetters() {
	for (var i = 0; i < guess.length; i++) {
		(guesses.push(guess) + (i + 1));
	}
	guesses.innerHTML.toUpperCase();
};

 //makeWord();

document.getElementById("guesses").innerHTML = guesses;









/*
	setUpWord: function(word) {
		word.toUpperCase();
		spaces.toUpperCase();
	}

	guess: function() {
		document.onkeypress = function(event) {
			spaces.textContent = event.key;
		}
	};



// guessedLets.includes(word.charAt[i])
// join()

for (i = 0; i < word.length; i++) {
	spaces.innerHTML = spaces;
	word.charAt[i];

document.create.element("div"); */