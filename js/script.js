// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var randomNumber;
var timeoutID;

function getRandomQuote() {
  randomNumber = Math.floor( Math.random() * 6);
  return quotes[randomNumber];
}

function printQuote() {
  var randomQuote = getRandomQuote();
  var quotePrint = '<p class="quote">' + randomQuote.quote + '</p>';
  quotePrint += '<p class="source">' + randomQuote.source;
    if ( randomQuote.citation !== '') {
        quotePrint += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if ( randomQuote.year !== '') {
        quotePrint += '<span class="year">' + randomQuote.year + '</span></p>';
    }
  document.getElementById('quote-box').innerHTML = quotePrint;
}

timeoutID = window.setTimeout(printQuote, 3000);
