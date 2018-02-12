var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "TREATS", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MAINE COON", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
var guesses = [];
var wins = [];
var spaces = ["_ ", "_ _", "_ _ _", "_ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _"];

// Picking a random word from the words array
var wordNum = Math.floor(Math.random() * words.length); 
var word = words[wordNum];



// function for putting word onto board
function makeWord() {
	document.getElementById("wordspace").innerHTML = word;
};

function spaceOut() {
	//for (i = 0; i < word.length; i++) {
	//spaces.innerHTML = spaces[word.length];
	//}
	document.getElementById("wordspace").innerHTML = spaces[word.length];
};

function guessedLetters() {
	for (var i = 0; i < guesses.length; i++) {
		(guesses.push(guesses) + (i + 1));
	}
	//guesses.toUpperCase();
	document.getElementById("guesses").innerHTML = guesses[i];
};

// Begins game when user presses any key
document.addEventListener("keyup", function() {
	makeWord();
	spaceOut();
}, false);

// Lists each guessed letter
document.addEventListener("keyup", function() {
	guessedLetters();
}, false);









//	word.charAt[i];


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