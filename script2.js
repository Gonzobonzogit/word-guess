// 🧠 Starter Word Guess Game — Keyboard Input Ready

// Word bank
let words = ['mozilla', 'linux', 'debian', 'cinnamon', 'wayland', 'sudo', 'arch', 'unix'];
let chosenWord;     
let attemptsLeft = 10;
//DOM Elements
const maskedWordEle = document.getElementById('maskedWord');
const attemptsEle = document.getElementById('attempts');
const guessedLettersEle = document.getElementById('guessedLetters');


//New word function
function pickNewWord() {
  const words = ['mozilla', 'linux', 'debian', 'cinnamon', 'wayland', 'sudo'];
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];       
  attemptsLeft = 10;         
  updateDisplay();
}

function updateDisplay() {
    let masked = '';
    for (let char of chosenWord){
      masked+= guessedLetters.includes(char) ? char : '_';
      masked += ' ';
    }
      maskedWordEle.textContent = masked.trim();
      attemptsEle.textContent = attemptsLeft;
      guessedLettersEle.textContent = guessedLetters.join(', ') || 'not yet';

      console.log("Updating guessed letters:", guessedLetters.join(', '));
      console.log("DOM element:", guessedLettersEle);
  }

  /* sounds to be added */

// 🎮 Function students will build next
function startGame(letter) {
 if (guessedLetters.includes(letter)){
  console.log(`You already guessed ${letter}!`)
  return; 
 }
//record
 guessedLetters.push(letter);
//show
  console.log(`Guessed so far ${guessedLetters.join( ',' )}`);
//check for correct letters

 if (chosenWord.includes(letter)){
  console.log( 'Correct!!!');
 
 } else {
  attemptsLeft--;
  console.log(`❌Wrong!! You have ${attemptsLeft} attempts left!❌`);
 }
 updateDisplay();
 checkWinOrLose();

}

function checkWinOrLose(){
  const won = chosenWord.split('').every( letter => guessedLetters.includes(letter));
  if (won){
    setTimeout(() => {
      alert('You have won!! The word was:' + chosenWord);
      pickNewWord();
    }, 100);
    return;
  }
  if (attemptsLeft <= 0) {
    setTimeout(() => {
      alert('Game Over!! Your word was:' + chosenWord);
      pickNewWord();
      }, 100);
  }
}


// ⌨️ Listen for keyboard input when the page loads
window.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();

  // Only process alphabetic letters (ignore Shift, Enter, etc.)
  if (key.match(/^[a-z]$/)) {
    startGame(key);
  } else {
    console.log("Please press a valid letter (A–Z).");
  }
});

pickNewWord();
