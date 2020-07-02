//globals
let time = 5;
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

//init function, fires off when window loads
const init = () => {
 //load a random word from array
 show_word(words);
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
 }
}

window.addEventListener("load", init);