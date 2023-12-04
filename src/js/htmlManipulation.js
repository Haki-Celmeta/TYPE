import Words from "./wordsData";
import Calculate from "./calculateWpm";

const wordInput = document.querySelector('#word-input');

let allRandomWords;

let startTime;
let isRunning = false;
let seconds = 0;

let mistakes = 0;

/**
 * Iterates through words-container in html and gets the current word to be type
 */
function getWordDiv() {
  const allWords = document.querySelectorAll('#words-container div');
  for (const word of allWords) {
    if (Number(word.id) === Words.getId()) {
      return word;
    }
  }
  return null;
}

/**
 * Create every word and append it on words-container
 * 
 * @param {array} array 
 */
function appendOnHTML(array) {
  const wordsContainer = document.querySelector('#words-container');
  array.forEach((word, index) => {
    const div = document.createElement('div');
    div.classList.add('word');
    div.id = index;
    div.textContent = `${word}`;
    wordsContainer.append(div);
  })
}

/**
 * Get all words randomly and display it on html
 * 
 * @param {number} allowedWords 
 */
function addWords(allowedWords) {
  allRandomWords = Words.randomWordArray(allowedWords);
  appendOnHTML(allRandomWords);
}

/**
 * put a border bottom to the first word
 */
function firstWord() {
  getWordDiv().style.borderBottom = '2px solid #a8c920';
}

/**
 * puts a green border bottom to the current word beging called. Called if word is correct.
 */
function validWord() {
  getWordDiv().style.borderBottom = '2px solid green';
  wordInput.style.border = 'none';
}

/**
 * puts a red border bottom to the current word beging called. Called if word is wrong.
 */
function wrongWord() {
  getWordDiv().style.borderBottom = '2px solid red';
  wordInput.style.border = '1px solid red';
}

/**
 * Returns the string content of the current word
 */
function currentWord() {
  return getWordDiv().textContent;
}

/**
 * Increment id for next word and style it.
 */
function nextWord() {
  if (Words.getId() < 39) Words.incrementId();
  else displayWpm();
  const word = getWordDiv();
  word.style.borderBottom = '2px solid #a8c920';
  wordInput.placeholder = `${word.textContent}`;
}

/**
 * Displays wpm, mistakes, words and time in after-container
 */
function displayWpm() {
  const beforeContainer = document.querySelector('.before-container');
  const afterContainer = document.querySelector('.after-container');

  const wpm = document.querySelector('#wpm');
  const mistake = document.querySelector('#mistake');
  const words = document.querySelector('#words');
  const time = document.querySelector('#time');

  clearInterval(startTime);

  wpm.textContent = `${Calculate.wpm(40, seconds)} wpm`;
  mistake.textContent = `${mistakes}`;
  words.textContent = `${40}`;
  time.textContent = `${seconds}s`;

  beforeContainer.style.display = 'none';
  afterContainer.style.display = 'flex';
}

/**
 * Start the time when user start to type in input box.
 */
function countSeconds() {
  wordInput.addEventListener('input', () => {
    if (!isRunning) {
      startTime = setInterval(updateSeconds, 1000);
      isRunning = true;
    }
  })
}

/**
 * Increments the seconds.
 */
function updateSeconds() {
  seconds++;
}

/**
 * Check if user press space or enter on input box. If yes it checks if word is valid or not.
 */
function spaceEnter() {
  wordInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      const word = currentWord();
      if (wordInput.value === word) {
        validWord();
        nextWord();
        wordInput.value = '';
      } else {
        wrongWord();
        mistakes++;
      }
    }
  })
}

/**
 * Display tooltip when user hover the element
 */
function tooltipDisplay() {
  const newOneButton = document.querySelector('.fa-arrow-left');
  const newOneTooltip = document.querySelector('#arrow-tooltip');
  const redoButton = document.querySelector('.fa-redo');
  const redoTooltip = document.querySelector('#redo-tooltip');

  newOneButton.addEventListener('mouseover', () => {
    newOneTooltip.style.visibility = 'visible';
  })

  newOneButton.addEventListener('mouseleave', () => {
    newOneTooltip.style.visibility = 'hidden';
  })

  redoButton.addEventListener('mouseover', () => {
    redoTooltip.style.visibility = 'visible';
  })

  redoButton.addEventListener('mouseleave', () => {
    redoTooltip.style.visibility = 'hidden';
  })
}

/**
 * All components to start the app
 */
function startApp() {
  addWords(40);
  spaceEnter();
  countSeconds();
  firstWord();
  wordInput.placeholder = `${allRandomWords[0]}`;

  tooltipDisplay();
}

export default startApp