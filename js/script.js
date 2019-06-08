/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//list of quotes
Quotes = [
  {
    quote: "The Way Get Started Is To Quit Talking And Begin Doing.",
    source: "Walt Disney",
    citation: "www.briantracy.com",
    year: "1950",
    color: "#575757"
  },
  {
    quote:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    source: "Winston Churchill",
    citation: "www.briantracy.com",
    year: "1930",
    color: "#ffe4e1"
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    citation: "www.briantracy.com",
    year: "1920",
    color: "#3c0a96"
  },
  {
    quote: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
    source: "Vince Lombardi",
    citation: "www.briantracy.com",
    year: "1954",
    color: "#ffff8e"
  },
  {
    quote:
      "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    source: "Steve Jobs",
    citation: "www.briantracy.com",
    year: "N/A",
    color: "#800000"
  },
  {
    quote:
      "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    source: "Rob Siltanen",
    citation: "www.briantracy.com",
    year: "N/A",
    color: "#ffacd9"
  },
  {
    quote:
      "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    source: "Og Mandino",
    citation: "www.briantracy.com",
    year: "1985",
    color: "#68228b"
  }
];

//pick a random quote in the qoute object
function getRandomQuote() {
  let randomQuote = Quotes[Math.floor(Math.random() * Quotes.length) - 1];
  return randomQuote;
}

//print the quotes to the screen
function printQuote() {
  let randomQuote = getRandomQuote();
  const quoteSelector = document.querySelector("#quote-box");
  const p = document.querySelector("p#source");
  quoteSelector.querySelector(".quote").innerHTML = randomQuote.quote;
  quoteSelector.querySelector(".source").innerHTML = randomQuote.source;
  quoteSelector.querySelector(".citation").innerHTML = randomQuote.citation;
  quoteSelector.querySelector(".year").innerHTML = randomQuote.year;
  document.body.style.backgroundColor = randomQuote.color;
  setInterval(printQuote, 20000);
}

//listen fot the click of the button
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
