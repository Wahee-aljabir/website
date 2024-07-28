// script.js
const wordList = [
    {word: "guitar", hint: "A musical instrument with strings."},
    {word: "elephant", hint: "A large animal with a trunk."},
    {word: "javascript", hint: "A popular programming language."},
    {word: "lemon", hint: "Best class in year 5"},
    {word: "apple", hint: "A common fruit that keeps the doctor away."},
    {word: "banana", hint: "A yellow fruit that's a monkey's favorite."},
    {word: "chess", hint: "A strategic board game with kings and queens."},
    {word: "computer", hint: "A device used to browse the internet and run software."},
    {word: "dog", hint: "A common pet known as man's best friend."},
    {word: "piano", hint: "A large keyboard musical instrument."},
    {word: "beach", hint: "A sandy shore by the sea."},
    {word: "mountain", hint: "A high elevation with a peak."},
    {word: "river", hint: "A flowing body of water."},
    {word: "forest", hint: "A large area filled with trees and wildlife."},
    {word: "car", hint: "A four-wheeled vehicle for driving on roads."},
    {word: "book", hint: "A collection of written pages bound together."},
    {word: "bridge", hint: "A structure that connects two places over water."},
    {word: "train", hint: "A long vehicle that runs on tracks."},
    {word: "airplane", hint: "A flying vehicle used for travel."},
    {word: "bicycle", hint: "A two-wheeled vehicle powered by pedaling."},
    {word: "kitchen", hint: "A room where food is cooked and prepared."},
    {word: "phone", hint: "A device for making calls and sending texts."},
    {word: "lamp", hint: "A device that provides light in a room."},
    {word: "chair", hint: "A piece of furniture you sit on."},
    {word: "desk", hint: "A piece of furniture you use to work or study on."},
    {word: "clock", hint: "A device that tells the time."},
    {word: "television", hint: "A device for watching shows and movies."},
    {word: "camera", hint: "A device used to take photographs."},
    {word: "guitar", hint: "A stringed instrument played with fingers or a pick."},
    {word: "flute", hint: "A wind instrument played by blowing across a hole."},
    {word: "violin", hint: "A stringed instrument played with a bow."},
    {word: "drum", hint: "A percussion instrument you hit with sticks."},
    {word: "rose", hint: "A flower often given on Valentine's Day."},
    {word: "tulip", hint: "A spring flower that comes in many colors."},
    {word: "sunflower", hint: "A large yellow flower that turns to face the sun."},
    {word: "daisy", hint: "A white flower with a yellow center."},
    {word: "winter", hint: "The coldest season of the year."},
    {word: "spring", hint: "The season when flowers bloom."},
    {word: "summer", hint: "The hottest season of the year."},
    {word: "autumn", hint: "The season when leaves fall from trees."},
    {word: "ocean", hint: "A vast body of salt water."},
    {word: "lake", hint: "A large inland body of water."},
    {word: "pizza", hint: "A popular Italian dish with cheese and toppings."},
    {word: "burger", hint: "A sandwich with a patty between two buns."},
    {word: "pasta", hint: "An Italian dish made from dough, often with sauce."},
    {word: "salad", hint: "A dish of mixed raw vegetables."},
    {word: "soup", hint: "A liquid dish served hot or cold."},
    {word: "sandwich", hint: "Two slices of bread with fillings between them."},
    {word: "orange", hint: "A citrus fruit that's a color and a flavor."},
    {word: "grape", hint: "A small fruit used to make wine."},
    {word: "strawberry", hint: "A red fruit with seeds on the outside."},
    {word: "blueberry", hint: "A small, blue fruit often used in muffins."},
    {word: "raspberry", hint: "A small red fruit often used in desserts."},
    {word: "watermelon", hint: "A large green fruit with red flesh and black seeds."},
    {word: "pineapple", hint: "A tropical fruit with a spiky exterior."},
    {word: "mango", hint: "A tropical fruit with a large seed and orange flesh."},
    {word: "kiwi", hint: "A small brown fruit with green flesh."},
    {word: "coconut", hint: "A large nut with a hard shell and white meat."},
    {word: "peach", hint: "A soft, fuzzy fruit with a large pit."},
    {word: "plum", hint: "A small, sweet, purple fruit."},
    {word: "grapefruit", hint: "A large, sour citrus fruit."},
    {word: "pear", hint: "A sweet fruit with a green or yellow skin."},
    {word: "cherry", hint: "A small, round, red fruit with a pit."},
    {word: "apricot", hint: "A small, orange fruit with a pit."},
    {word: "fig", hint: "A small, sweet fruit with a soft skin."},
    {word: "date", hint: "A sweet, chewy fruit from a palm tree."},
    {word: "pomegranate", hint: "A fruit with many juicy seeds inside."},
    {word: "melon", hint: "A large fruit with sweet flesh and hard rind."},
    {word: "avocado", hint: "A fruit with a creamy texture and a large seed."},
    {word: "broccoli", hint: "A green vegetable that looks like a tree."},
    {word: "carrot", hint: "An orange root vegetable."},
    {word: "cabbage", hint: "A leafy green vegetable used in coleslaw."},
    {word: "lettuce", hint: "A leafy green used in salads."},
    {word: "spinach", hint: "A leafy green vegetable often used in salads."},
    {word: "pepper", hint: "A vegetable that can be sweet or spicy."},
    {word: "onion", hint: "A bulb vegetable that makes you cry."},
    {word: "garlic", hint: "A pungent bulb used to add flavor to food."},
    {word: "potato", hint: "A starchy tuber often made into fries."},
    {word: "tomato", hint: "A red fruit often used as a vegetable."},
    {word: "cucumber", hint: "A long, green vegetable often used in salads."},
    {word: "zucchini", hint: "A green vegetable often used in cooking."},
    {word: "eggplant", hint: "A purple vegetable also known as aubergine."},
    {word: "corn", hint: "A yellow vegetable grown on a cob."},
    {word: "peas", hint: "Small, green seeds often eaten as a vegetable."},
    {word: "bean", hint: "A legume often used in cooking."},
    {word: "rice", hint: "A staple grain food."},
    {word: "bread", hint: "A staple food made from flour and water."},
    {word: "butter", hint: "A dairy product made from milk or cream."},
    {word: "cheese", hint: "A dairy product made from curdled milk."},
    {word: "milk", hint: "A white liquid produced by mammals."},
    {word: "yogurt", hint: "A dairy product made by fermenting milk."},
    {word: "cream", hint: "The thick, fatty part of milk."},
    {word: "honey", hint: "A sweet food made by bees."},
    {word: "sugar", hint: "A sweet substance from plants."},
    {word: "salt", hint: "A mineral used to flavor food."},
    {word: "pepper", hint: "A spice used to season food."},
    {word: "coffee", hint: "A drink made from roasted coffee beans."},
    {word: "tea", hint: "A beverage made by steeping tea leaves."},
    {word: "juice", hint: "A drink made from fruit or vegetable liquids."},
    {word: "water", hint: "A clear, colorless liquid essential for life."},
    {word: "soda", hint: "A carbonated soft drink."}
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
    updateGameDisplay();
    checkGameOver();
    event.target.disabled = true;
}

function checkGameOver() {
    if (guessedLetters.join("") === chosenWord) {
        resultMessage.textContent = "You win! Press ctrl + r to play again";
        resultmodal.style.display = "block";
    } else if (incorrectGuesses >= 11) {
        resultMessage.textContent = `Game over! The correct word was: ${chosenWord} Press ctrl + r to play again`;
        resultmodal.style.display = "block";
    }
}

closeBtn.addEventListener("click", () => {
    resultModal.style.display = "none";
    startGame();
});

startGame();