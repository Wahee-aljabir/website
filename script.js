function scrollToSection(sectionClass) {
    document.querySelector('.' + sectionClass).scrollIntoView({ behavior: 'smooth' });
};

$(document).ready(function(){

    $('.buttons').hide()
    $('.toggle').click(display)

    var click = 0

    function display () {
        $(".buttons").show('slow')
        click = click + 1

        if (click === 1)
            $(".buttons").show('slow')

        if (click === 2)
            $(".buttons").hide('slow')

        if (click > 2)
            click = 1
        console.log(click)
    };
    $("#games").hide()
    $(".logo").hide()
    $(".SecuritySend").click(myFunction)
    function myFunction() {
      var letter = document.getElementById("Security").value;
      var website;
      // If the letter is "c"
      if (letter === "Banana") {
        $("#games").show()
        // $(".logo").show()
      } else if (letter === "Pro12") {
        $("#ProGames").show()
      } else {
        text = "Wrong Password! &#128551";
        $("#games").hide()
        $(".logo").hide()
    }
  };
});
////////// games ////////////
function createPassword() {
  var adjectives = [
    "Sleepy",
    "Round",
    "Bold",
    "White",
    "Small",
    "Clever",
    "Gentle",
    "Fierce",
    "Sunny",
    "Brave",
    "Happy",
    "Lucky",
    "Charming",
    "Eager",
    "Graceful",
    "Mighty",
    "Swift",
    "Wise",
    "Radiant",
    "Vibrant",
    "Bright",
    "Calm",
    "Daring",
    "Elegant",
    "Fancy",
    "Gleaming",
    "Humble",
    "Jolly",
    "Kind",
    "Lively",
    "Merry",
    "Noble",
    "Optimistic",
    "Proud",
    "Quick",
    "Radiant",
    "Silly",
    "Thoughtful",
    "Unique",
    "Vivid"
  ]; 
  var index1 = Math.ceil(Math.random() * adjectives.length) - 1; // Adjust index to be 0-based
  var randomAnswer1 = adjectives[index1]; // Get the random answer
  console.log(randomAnswer1);
  var nouns = [
    "Dinosaur",
    "Mouse",
    "Pen",
    "Book",
    "Chicken",
    "Tree",
    "Car",
    "House",
    "Chair",
    "Lamp",
    "Dog",
    "Cat",
    "Bird",
    "Fish",
    "Table",
    "Phone",
    "Computer",
    "Shoe",
    "Hat",
    "Bag",
    "Rocket",
    "Planet",
    "Star",
    "Galaxy",
    "Meteor",
    "Comet",
    "Asteroid",
    "Satellite",
    "Spaceship",
    "Alien",
    "Robot",
    "Astronaut",
    "Moon",
    "Sun",
    "Universe",
    "Nebula",
    "Blackhole",
    "Quasar",
    "Pulsar",
    "Constellation"
  ]; 
  var index2 = Math.ceil(Math.random() * nouns.length) - 1; // Adjust index to be 0-based
  var randomAnswer2 = nouns[index2]; // Get the random answer
  console.log(randomAnswer2);
  var numbers = [
    "1",
    "3",
    "6",
    "2",
    "7",
    "4",
    "9",
    "5",
    "8",
    "0",
    "11",
    "13",
    "16",
    "22",
    "17",
    "19",
    "10",
    "15",
    "12",
    "14"
  ]; 
  var index3 = Math.ceil(Math.random() * numbers.length) - 1; // Adjust index to be 0-based
  var randomAnswer3 = numbers[index3]; // Get the random answer
  console.log(randomAnswer3);
  var specials = [
    "!",
    "%",
    "^",
    "@",
    "#",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "^_^",
    "/",
    ":"
  ]; 
  var index4 = Math.ceil(Math.random() * specials.length) - 1; // Adjust index to be 0-based
  var randomAnswer4 = specials[index4]; // Get the random answer
  console.log(randomAnswer4);
  document.getElementById("real").innerHTML =  randomAnswer1 + randomAnswer2 + randomAnswer3 + randomAnswer4;
};
// Function to add the clicked letter to the input field
function addLetter(letter) {
  document.getElementById('inputField').value += letter;
  document.getElementById('typedLetters').innerText += letter;
}

// Function to delete one character at a time
function deleteCharacter() {
  let inputField = document.getElementById('inputField');
  let typedLetters = document.getElementById('typedLetters');

  // Remove the last character from the input field
  inputField.value = inputField.value.slice(0, -1);
}