// Array of quotes
const quotes = [
  {
    quote: "Appear weak when you are strong, and strong when you are weak.",
    author: "Sun Tzu",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "Don't eat yellow snow. I promise you it's not pineapple flavor.",
    author: "Pelle",
  },
  {
    quote: "Walking on your hands is not always efficant.",
    author: "Pelle",
  },
  {
    quote: "To win 100 victories in 100 battles is not the highest skill. To subdue the enemy without fighting is the highest skill.",
    author: "Zhuge Liang"
  },
  {
    quote: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    author: "Cao Cao"
  },
];

// Get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

let hover = false;

// Display the random quote
function displayRandomQuote(e) {
   if (hover === false) {

    hover = true;
    const randomQuote = getRandomQuote();

    const quoteContainer = document.querySelector("#quote-container");
    quoteContainer.innerHTML = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="author">- ${randomQuote.author}</p>
    `;
  }
}

/* simply change hover back to false */
function resetHover() {
  hover = false;
}

// hover event handler
const hoverRandomQuote = document.querySelector(".container");
hoverRandomQuote.addEventListener("mouseover", displayRandomQuote);

/* when the mouse leaves the container, call the function to reset hover */
hoverRandomQuote.addEventListener("mouseleave", resetHover);