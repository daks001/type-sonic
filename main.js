//globals

//available levels
const levels = {
 easy: 5,
 medium: 3,
 hard: 2
};

//variable to change levels
// let current_level = levels.easy;
// let level = document.getElementById('#level-select').value;
// const current_level = levels.level;
let level;

level = document.getElementById("level-select");
 // console.log(document.getElementById("level-select").value)
let current_level = levels[level.value];
// console.log(levels[level]);







// console.log(level);
// console.log(levels[level]);


let time = current_level;
let score = 0;
let is_playing; //whether game is going on or not

//dom elements
const word_input = document.querySelector('#word-input');
const current_word = document.querySelector('#current-word');
const score_display = document.querySelector('#score');
const time_display = document.querySelector('#time');
const message = document.querySelector('#message'); //correct or game over
const seconds = document.querySelector('#seconds'); 
const words = ['web development', 'mobile app', 'application', 'developer', 'tools', 'repository', 'javascript', 'query selectors', 'flutter', 'ecmascript', 'command line', 'interface', 'readme.md', 'ruby on rails', 'tutorial', 'chatbot', 'synthesis', 'programming', 'leetcode', 'environment', 'virtual', 'variable', 'constant', 'do while', 'return']; 

const level_val = () => {
 // level = document.getElementById("level-select").value;
 // console.log(document.getElementById("level-select").value)
 current_level = levels[level.value];
 time = current_level;
 seconds.innerHTML = current_level;
 console.log('changed level to ' + current_level);
};

//init function, fires off when window loads
const init = () => {
 // level_val();
 //show level in UI
 seconds.innerHTML = current_level;
 //load a random word from array
 show_word(words);
 //start matching on word input
 word_input.addEventListener('input', start_match);
 //call countdown every second
 setInterval(countdown, 1000);
 //check status of game: on or over
 setInterval(check_status, 50);
};

//pick and show random word
const show_word = (words) => {
 const rand_index = Math.floor(Math.random() * words.length);
 current_word.innerHTML = words[rand_index];
};

//countdown timer
const countdown = () => {
 //ensure time is not run out
 if (time > 0) {
  //decrement the time
  time--;
 } else if (time === 0) {
  //game over
  is_playing = false;
 } 
 //output the time
 time_display.innerHTML = time;
}

//check game status
const check_status = () => {
 if (!is_playing && time === 0) {
  message.innerHTML = "game over";
  score = -1;
  word_input.classList.add("wrong");
 }
}

//start matching input
const start_match = () => {
 if (match_words()) {
  word_input.classList.add("correct");
  setTimeout(() => word_input.classList.remove("correct"), 1500);
  is_playing = true;
  time = current_level + 1;
  show_word(words);
  word_input.value = "";
  score++;
 }
 if (score === -1) {
  score_display.innerHTML = 0;
  seconds.innerHTML = current_level;
 } else {
  score_display.innerHTML = score;
 }
}

//macth current_word to word_input
const match_words = () => {
 if (word_input.value === current_word.innerHTML) {
  message.innerHTML = "correct";
  return true;
 }
 else {
 message.innerHTML = "";
 return false;
 }
}

const remove_glow = () => {
 word_input.classList.remove("wrong");
 word_input.classList.remove("correct");
}

window.addEventListener("load", init);
word_input.addEventListener("input", remove_glow);
level.addEventListener("change", level_val);