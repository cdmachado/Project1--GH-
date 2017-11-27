// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var randomNumber;
var randomQuote;

function getRandomQuote() {
  randomNumber = Math.floor( Math.random() * 6);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

function printQuote() {
  var randomQuote2 = getRandomQuote();
  var quotePrint = '<p class="quote">' + randomQuote2.quote + '</p>';
  quotePrint += '<p class="source">' + randomQuote2.source;
  quotePrint += '<span class="citation">' + randomQuote2.citation + '</span>';
  quotePrint += '<span class="year">' + randomQuote2.year + '</span></p>';
  return quotePrint;
}

function print(message) {
var quoteBox = document.getElementById('quote-box');
quoteBox.innerHTML = message;
}

print(printQuote());
