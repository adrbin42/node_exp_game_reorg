const fs = require('fs');
const parseurl = require('parseurl');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");


let mysteryWord = " ",
    guessedRight = [],
    letter;

 function getRandWord(){
  let i = Math.floor(Math.random()* words.length);
  mysteryWord = words[i];
  return mysteryWord;
}

function showLtr(){

  let upWord = mysteryWord.toUpperCase();
  let word = upWord.split("");

  // let index = word.indexOf(guess);
  // let letterFound = word[index];

  for(let i = 0;i<word.length;i++){
    if(letter == word[i] ){
      guessedRight.push(letter);
    }else{
      guessedRight.push('_ ');
    }
  }
  // word.forEach(function(letter){
  //
  //   letGuessed.push(word[i].indexOf(letter));
  // })
  // let letGuessed = word.indexOf(letter);
  // word.forEach(function(letter){
  //   letGuessed =
  // })

  // console.log(letGuessed);

  // if(index !== -1){
  // alert("You guessed correctly!");
  // letGuessed.push(word[index]);
  // }

   return guessedRight;
}

//export model
module.exports = {
  mysterWord:mysterWord,
  guessedRight:guessedRight,
  letter:letter
  getRandWord:getRandWord,
  showLtr:showLtr
}
