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
    document.addEventListener("keyup", function() {}, false);
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
    console.log(alphabet.letter);
    console.log(letter);


    // if letter guessed is correct
    
    if (word.includes(letter)) {
    	for (var i = 0; i < word.length; i++) {
    	if (letter.includes(word.charAt(i))) {
        var breakdown = word.split('');
        var correctGuess = breakdown.indexOf(letter);

        console.log(breakdown);
        console.log(correctGuess);

        // guesses.push(letter);
        console.log(letter);
        wordAsSpaces[correctGuess] = letter;
        
        var completeWord = wordAsSpaces.join("");
        console.log(completeWord);
        document.getElementById("wordspace").textContent = wordAsSpaces.join(" ");
}
        // document.getElementById("guesses").textContent = guesses.join(" ");
}
    } else { // if letter is null, do not register it as a guess
        if (letter === null) {
            guessesLeft = guessesLeft - 0;
        } else { // but if letter is a valid guess but incorrect, send it to guesses array
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
        guessesLeft = 15;
        document.getElementById("guesses-left").textContent = guessesLeft;
    } else if (completeWord === word) {
        alert("You won this round!");
        var blank = word.replace(word, " ");
        console.log(blank);
        var element = document.getElementById("wordspace");
        element.parentNode.removeChild(wordspace);
        var gameboard = document.getElementById("gameboard");
        wordspace = document.createElement("wordspace");
        document.getElementById("gameboard")
        document.getElementById("wordspace").textContent = blank;
        makeWord();
        wins++;
        document.getElementById("wins").textContent = wins;
    }
}
beginGame(); // starts the game!