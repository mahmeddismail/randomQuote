let Quotes = fetch('Quotes.json')
  .then((response) => response.json())
  .then((data) => { Quotes = data })
  .catch(error => { console.log('Error :', error); });
let myBtn = document.querySelector('.myBtn')
let myBody = document.querySelector('body')



var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF', '#FF6600', '#FFCC33', '#FF3366', '#FFFF00', '#00B399',
  '#E6B366', '#3333E6', '#999900', '#99FF66', '#4D4DB3',
  '#80B333', '#809933', '#E6B3FF', '#6680FF', '#669900',];


let displayedQuote = null;
function Quote() {
  let value = Math.floor(Math.random() * Quotes.length);
  while (displayedQuote == Quotes[value]) {
    value = Math.floor(Math.random() * Quotes.length);

  }
  let myQuote = Quotes[value].quote;
  let movie = Quotes[value].movie;
  console.log(myQuote);

  // console.log(myQuote + " " + author);
  document.querySelector(".Quote").innerHTML = myQuote;
  document.querySelector(".movie").innerHTML = movie;
  displayedQuote = Quotes[value]
}
function changeColor() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  myBody.style.backgroundColor = randomColor;
}

myBtn.addEventListener("click", function () {
  Quote()
  changeColor()

});
