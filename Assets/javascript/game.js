var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "HUNGRY", "TUNA", "FUZZY", "CRAZY", "WEIRD", "MEOW", "FLOOF"];
//var guess = event.key;
var guesses = [];

var wordNum = Math.round((Math.random() * words.length) + 1); 
var word = words[wordNum];
var spaces = document.getElementById("wordspace");
var letterbox = document.getElementById("guesses");

var setUpWord = function (word) {
	word.toUpperCase();
	spaces.toUpperCase();
}


var guess = function feedLetters() {
	document.onkeypress = function(event) {
		spaces.textContent = event.key;
	}
};

function guessedLetters() {
	for (var i = 0; i < guess.length; i++) {
			(guesses.push(guess) + (i + 1));
		}
		letterbox.innerHTML.toUpperCase();
}



//for (i = 0; i < word.length; i++) {
	spaces.innerHTML = spaces;

// document.create.element("div");


