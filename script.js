let apiQuotes = [];

// show new quote
function newQuote() {
    // to pick a random quote from random quote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// get quotes from api
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch (apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // catch error here
    }
}

// on load
getQuotes();