const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const guessRouter = require('./routes/makeGuess.js');
const restartRouter = require('./routes/restart.js');
const wl = require('./models/wordsletters.js');

// Morgan
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static('public'));
app.use('/makeGuess',guessRouter);
app.use('/restart', restartRouter);

app.use(session({
  secret: 'winnerswin',
  resave: false,
  saveUninitialized: true
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set ('view engine', 'mustache');

if (app.get('env') == 'production') {
  console.log('Production environment');
} else {
  console.log('Developer environment');
};

app.use(morgan('combined'));

app.get('/', function(req, res) {
  let underscores;
  if(maxGuesses == 8){
    getRandWord();
    underscores = mysteryWord.replace(\{.}/g,'_ ');
  }

  res.render("index", {word:wl.mysterWord,
  hiddenword:underscores,
  guessesLeft:maxGuesses});

});

app.listen(3000, function() {
  console.log("Working hard... Listening on 3000");
});
