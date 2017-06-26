// Declared constants including Router
const express = require('express');
const router = express.Router();
const guessRouter = require('./routes/makeGuess.js');
const wordsLtrs = require('../models/wordsletters.js');
const wl = require('./models/wordsletters.js');

const mainjs = require('../app.js');

app.use('/makeGuess',guessRouter);

router.get('/restartApp',function(req,res){
  res.render('restart');
});

router.post('/restartApp',function(req,res){
  wl.mysterWord = " ";
  maxGuesses = 8;
  letGuessed = [];
  res.redirect("/");
});

module.exports = router;
