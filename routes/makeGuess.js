// Declared constants including Router
const express = require('express');
const router = express.Router();

//Words and Letters (wordsletters model)
const wordsLtrs = require('../models/wordsletters.js');

let maxGuesses = 8;

router.post('/makeGuess',function(req,res) {
  maxGuesses--;
  if(maxGuesses !== 0){
    res.redirect("/");
  }else{
    res.redirect("/restartApp");
  }
  let charGuess = req.body.ltr_guess;
  letter = charGuess.toUpperCase();
});

module.exports = router;
