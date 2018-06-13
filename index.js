/*var txtgen = require('txtgen');
var buzzwords = require('buzzwords');
var fillers = require('fillers');
var weasels = require('weasels');
var brill = require('brill');


var NOUNS = new Set(['NN', 'NNS', 'NNP', 'NNPS', 'PRP', 'PRP$', 'WP']);
var ADJECTIVES = new Set(['JJ', 'JJS', 'JJR']);
var words = buzzwords;

words.forEach(function(word) {
  var isNoun = false;
  var isAdjective = false;
  var poses = brill[word];
  if (poses) {
    poses.forEach(function(pos) {
      if (NOUNS.has(pos)) {
        isNoun = true;
      } else if (ADJECTIVES.has(pos)) {
        isAdjective = true;
      }
    });
    if (isAdjective) {
      txtgen.addAdjectives([word]);
    } else if (isAdjective && isNoun) {
      txtgen.addNouns([word]);
      txtgen.addAdjectives([word]);
    } else {
      txtgen.addNouns([word]);
    }
  }
});*/


var buzzwordy = require('buzzwordy');
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'FJm516JifSpMmOAyeMlloDC6z',
  consumer_secret: 'L31qJubhblQ2PN82hywUhNboMr1vMd0Fy7SHyg8NaLnsmSjvix',
  access_token_key: '841567466262282240-DFGnop7DhXt1bGHoK4QGoeU6LWptvsM',
  access_token_secret: 'FIXr9iqmTWqh0kE1i4llunoNyWhZme7WlMNo5TnsnZKXn'
});
function makePost() {
  client.post('statuses/update', { status: buzzwordy.generate() }, function(err, data, response) {
    if(err){
      console.log("Error in Replying");
    }
    else{
      console.log("Success");
    }
  });
}

makePost();
setInterval(makePost, 1000); // every 17 hours
