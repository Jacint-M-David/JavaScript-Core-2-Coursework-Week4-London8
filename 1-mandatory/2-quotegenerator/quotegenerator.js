// IMPORT quote.js FUNCTIONALITY AND DATA

import { pickFromArray, quotes } from "./quotes.js";

// BUILD BASIC FRAME AND ATTACH IT TO BODY

const mainDiv = document.createElement("div"),
  quote = document.createElement("h1"),
  quoteText = document.createTextNode("SampleQuoteText"),
  author = document.createElement("h2"),
  newQuoteButton = document.createElement("button"),
  quoteIconLeft = document.createElement("i"),
  quoteIconRight = document.createElement("i"),
  toggleContainer = document.createElement("div"),
  toggle = document.createElement("div"),
  toggleButton = document.createElement("div"),
  toggleText = document.createElement("div");

newQuoteButton.innerText = "New Quote";
toggle.append(toggleButton);
toggleContainer.append(toggle, toggleText);
quote.append(quoteIconLeft, quoteText, quoteIconRight);
mainDiv.append(quote, author, newQuoteButton, toggleContainer);
document.body.append(mainDiv);

// STYLE NEWLY CREATED ELEMENTS

document.body.style.backgroundColor = "teal";

mainDiv.style.backgroundColor = "white";
mainDiv.style.minHeight = "250px";
mainDiv.style.width = "550px";
mainDiv.style.marginTop = "50px";
mainDiv.style.padding = "40px 20px";
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.justifyContent = "space-around";

quote.style.textAlign = "center";
quote.style.fontStyle = "italic";
quote.style.fontSize = "1.75rem";
quote.style.fontWeight = "bold";
quote.style.color = "teal";

quoteIconLeft.classList.add("fa-solid", "fa-quote-left");
quoteIconRight.classList.add("fa-solid", "fa-quote-right");

author.style.fontSize = "1rem";
author.style.fontStyle = "italic";
author.style.color = "teal";
author.style.textAlign = "right";
author.style.margin = "30px 0";

newQuoteButton.style.alignSelf = "flex-start";
newQuoteButton.style.backgroundColor = "teal";
newQuoteButton.style.color = "white";
newQuoteButton.style.border = 0;
newQuoteButton.style.padding = "5px 10px";
newQuoteButton.style.borderRadius = "5px";

// EXTRA TOGGLE BUTTON

toggleContainer.classList.add("container");
toggle.classList.add("toggle");
toggleButton.classList.add("toggle-button");
toggleText.classList.add("text");
toggleText.innerText = "OFF";

// RANDOM QUOTE

let renderNewQuote = () => {
  let randomQuote = pickFromArray(quotes);
  quoteText.nodeValue = ` ${randomQuote.quote} `;
  author.innerText = `-${randomQuote.author}`;
};

renderNewQuote();

newQuoteButton.addEventListener("click", renderNewQuote);

// EXTRA TOGGLE FUNCTIONALITY

const animate = () => {
  toggle.classList.toggle("active");
  toggleButton.classList.toggle("active");
  if (toggle.classList.contains("active")) {
    toggleText.innerText = "ON";
  } else {
    toggleText.innerText = "OFF";
  }
};

toggle.addEventListener("click", animate);
