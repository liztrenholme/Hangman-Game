var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var words = ["HAPPY", "KITTY", "TREATS", "TUNA", "FUZZY", "CRAZY", "SIAMESE", "MEESERS", "BURMESE", "TABBY", "TUXEDO", "MEOW", "FLOOF", "WHISKERS", "PURR", "PAWS"];
var guessesLeft = 15;
var wins = 0;
var guesses = [];
var incorrectLetters = [];
var correctLetters = [];
var letter;
var wordAsSpaces = [];


var wordNum = Math.floor(Math.random() * words.length);
var word = words[wordNum];
var newWord;

// listens for keystroke to signal start of game
function beginGame() {
    document.addEventListener("keyup", function () { }, false);
};

// putting word onto board	
function makeWord() {
    for (var i = 0; i < word.length; i++) {
        wordAsSpaces.push("_");
    }
    // turns wordAsSpaces into string from array
    document.getElementById("wordspace").textContent = wordAsSpaces.join(" ");
    console.log("word = " + word);
    console.log("newWord =" + newWord);
};
makeWord(word);

// registers that keystroke is a guess
document.onkeyup = function (event) {
    letter = event.key;
    letter = letter.toUpperCase();
    // console.log("letter is " + letter);
    console.log("word = " + word);

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
    // console.log("alphabet.letter = " + alphabet.letter);
    // console.log("letter = " + letter);

    // if letter guessed is correct
    if (word.includes(letter)) {
        var correctGuess = [];
        for (var i = 0; i < word.length; i++) {

            // if (letter.includes(word.charAt(i))) {
            if (word[i] === letter) {
                var breakdown = word.split('');
                correctGuess.push(i);
                // var correctGuess = breakdown.indexOf(letter);

                console.log("breakdown = " + breakdown);
                console.log("correctGuess = " + correctGuess);

                // guesses.push(letter);
                console.log(correctGuess[i]);
                // Make sure all instamces of correctly guessed letter appears
                // for (var i = 0; i < correctGuess.length; i++) {
                //     wordAsSpaces[correctGuess[i]] = letter;
                // }
                wordAsSpaces[correctGuess[0]] = letter;
                wordAsSpaces[correctGuess[1]] = letter;
                wordAsSpaces[correctGuess[2]] = letter;

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
        // alert("You won this round!");
        wins++;
        console.log("wins: " + wins);
        document.getElementById("wins").textContent = wins; // Display updated wins value
        newWordNum = Math.floor(Math.random() * words.length); // Pick a new word randomly
        newWord = words[newWordNum]; // Grab the new word
        guesses = []; // Clear the guesses
        wordAsSpaces = []; // Clear the spaces
        var blank = word.replace(newWord, " ");
        console.log("blank = " + blank);
        var gameboard = document.getElementById("gameboard");
        gameboard.removeChild(wordspace);
        console.log("childnode is " + gameboard.childNode);
        // var gameboard = document.getElementById("gameboard");
        var newWordspace = document.createElement("div");
        gameboard.appendChild(newWordspace);
        console.log("childnode is " + gameboard.childNode);
        // gameboard.replaceChild(newWordspace, gameboard.childNodes[0]);
        newWordspace.setAttribute("id", "wordspace");
        newWordspace.textContent = "";
        newWordspace.textContent = newWord;
        console.log("newWord =" + newWord);
        word = newWord;
        makeWord();
    }
}
beginGame(); // starts the game!