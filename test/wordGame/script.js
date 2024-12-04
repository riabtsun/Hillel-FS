// let playerName = prompt('Enter your name');

let words = ['программа', 'макака', 'прекрасный', 'оладушек'];
let randomWord = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < randomWord.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = randomWord.length;
// alert(answerArray.join(' '));

console.log(randomWord);
console.log(answerArray);

guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.');

if (guess === null) {
  break;
 } else if (guess.length !== 1) {
  alert("Пожалуйста, введите только одну букву.");
} else {
  for (let j = 0; j < randomWord.length; j++) {
    if (randomWord[j]===guess){
      answerArray[j] = guess
      remainingLetters--
    }
  }
}
