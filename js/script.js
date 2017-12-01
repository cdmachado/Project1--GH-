// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Variables

var timeoutID;
var intervalID;

//Random element generating functions

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * 5);
  return quotes[randomNumber];
}

function randomNumber2() {
  return Math.floor( Math.random() * 256);
}

function randomColor() {
  var color = 'rgb(';
  color += randomNumber2() + ',';
  color += randomNumber2() + ',';
  color += randomNumber2() + ')';
  return color;
}

//Main function

function printQuote() {
  var rgbcolor = randomColor();
  var randomQuote = getRandomQuote();
  var quotePrint = '<p class="quote">' + randomQuote.quote + '</p>';
  quotePrint += '<p class="source">' + randomQuote.source;
    if ( randomQuote.citation !== '') {
        quotePrint += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if ( randomQuote.year !== '') {
        quotePrint += '<span class="year">' + randomQuote.year + '</span></p>';
    }
  quotePrint += '<p class="tags">' + randomQuote.tags + '</p>';
  document.getElementById('quote-box').innerHTML = quotePrint;
  document.getElementById('body').style.backgroundColor = rgbcolor;
}

//Time changing elements

function timer() {
    timeoutID = window.setTimeout(printQuote, 1000);
}

intervalID = window.setInterval(timer, 5000);
