// script.js
const wordList = [
    {word: "Guitar", hint: "A musical instrument with strings."},
    {word: "Elephant", hint: "A large animal with a trunk."},
    {word: "Javascript", hint: "A popular programming language."},
    {word: "Lemon", hint: "Best class in year 5"},
];

let chosenWord = "";
let guessedLetters = [];
let incorrectGuesses = 0;

const wordDisplay = document.getElementById("wordDisplay");
const hintDisplay = document.getElementById("hint");
const keyboard = document.getElementById("keyboard");
const hangman = document.getElementById("hangman");
const resultmodal = document.getElementById("result");
const resultMessage = document.getElementById("message");
const closeBtn = document.querySelector(".close-btn");

function startGame() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    chosenWord = wordList[randomIndex].word;
    hintDisplay.textContent = wordList[randomIndex].hint;
    guessedLetters = Array(chosenWord.length).fill("_");
    incorrectGuesses = 0;
    updateGameDisplay();
    createKeyboard();
}

function updateGameDisplay() {
    wordDisplay.textContent = guessedLetters.join(" ");
    hangman.textContent = `Incorrect guesses: ${incorrectGuesses}`;
}

function createKeyboard() {
    keyboard.innerHTML = "";
    for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.textContent = String.fromCharCode(i);
        button.addEventListener("click", handleGuess);
        keyboard.appendChild(button);
    }
}

function handleGuess(event) {
    const letter = event.target.textContent;
    if (chosenWord.includes(letter)) {
        chosenWord.split("").forEach((char, index) => {
            if (char === letter) {
                guessedLetters[index] = letter;
            }
        });
    } else {
        incorrectGuesses++;
    }
    checkGameOver();
    updateGameDisplay();
    event.target.disabled = true;
}

function checkGameOver() {
    if (guessedLetters.join("") === chosenWord) {
        resultMessage.textContent = "You win!";
        resultModal.style.display = "block";
    } else if (incorrectGuesses >= 11) {
        resultMessage.textContent = `Game over! The correct word was: ${chosenWord}`;
        resultModal.style.display = "block";
    }
}

closeBtn.addEventListener("click", () => {
    resultModal.style.display = "none";
    startGame();
});

startGame();
