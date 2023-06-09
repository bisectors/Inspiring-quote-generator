const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Show showLoadingspinner spinner
function showLoadingspinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide showLoadingspinner spinner
function showLoadingComplete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}
// let apiQuotes = [];

// Show New Quote
function newQuote(){
    showLoadingspinner();
  // Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
  // Check if Author field is blank and replace it with 'unknown'
  if (!quote.author){
    authorText.textContent = 'UNKNOWN'
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote length to determine styling
  if (quote.text.length > 80) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
   quoteText.textContent = quote.text;
   showLoadingComplete();
}



//Get quote from API
// async function getQuotes(){
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//       const response = await fetch(apiUrl);
//       apiQuotes = await response.json();
//       newQuote();    
//     } catch (error) {
//        // Catch Error Here 
//     }
// }

//To Tweet a quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - 
    ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// On Load
// getQuotes();
newQuote();
