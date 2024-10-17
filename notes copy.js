//variables and datatypes//
let variable; // declaring variable
variable = "variable"; //defines variable
let number = 7; //one line of code for ^^
let string = "Hello."; // strong data type
let truthy = true; //booleans
let falsey = false; //booleans
let brigString = "hi i'm a larger string"; //camel case: longer name

//ways to declare variables/
var variable1 = "var"; // we don't do this
let variable2; //we can define later or REDEFINE
variable = "nope";
console.log(variable); // should display the later line of code of the definition of variable
const constant = "constant"; //cannot redefine, you will get error msg. use this 95% of the time.

// null and operations//
const nullTest = null; // absense of value, not that it means 0 but that it has no meaning. good for debugging. can be used if u want to give it another defination.
const undefinedTest = "test"; // usually when u don't define a variable there is a error,
console.log(nullTest, undefinedTest);
//operations --
const number1 = 72;
const number2 = 9;
let add = number1 + number2; //math
let subtract = number1 + number2; // you cand do multiplication and division using "mult" and "div"
console.log(add); // can do two functions (mult, div)

//functions and params//
function test() {
  // declare with ()
  console.log("This is a test."); // prints it in console.
}
test(); // call the function, you can call function before you every declare it.

function argument(student) {
  // accepts and argument
  console.log("this is my student ${student}");
}
argument("claire"); // not text specific, both works
argument(8);

function add(x, y) {
  return x + y; // to get the value back with return, if u don't have return it is undefined. sends product for output.
}
console, log(add(7, 9));
const answer = add(7, 0);
console.log(answer);
//--------------//
//TRUTH TABLES : ^ = and  v = or
// null and operations//

//DOM notes??//
const header = document.querySelecter("h1");
console.log(header.parentElement); //parent select other parts

const DOMSelectors = {
  //storage
  header: document.querySelector("h1"), //stored object in another like classes in python, "i wnna know where this is so i can do smth to it later"
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"), // all shows all in the list without it it just shows one of the items on the list
}; //instead of dictionaries we have objects
console.log(DOMSelectors.description);
const student = {
  name: "mark",
};

//button
function changeColor() {
  let button = document.querySelector(".enter");
  //console.log(button); //always log things early to know what to expect
  //listen for a click event
  button.addEventListener("click", function (event) {
    event.preventDefault(); //prevents default behavior of thing.
    //logging the click event
    console.log(event);
    button.style.backgroundColor = "red"; //not used alot if u do u will get ripped apart
  });
}
//call function
changeColor();

//get info from form

function formAnswer() {
  let form = document.querySelector(".submit");
  console.log(form);
  form.preventDefault();
  form.addEventListener("click", function (event) {});
  console.log(form);
}
formAnswer();

//complex java: array and objects lessons//
const students = ["Matt", "Mark", "Josephine", "Thomas"]; //array
console.log(students[0]); //remember that lists [0] is the first element, this way is faster for finding a certain value if you know its location in the list.
students.forEach((student) => console.log(student)); //for each allows us to loop through each element in the list
//=> arrow functions returns this function
const movie = {
  title: "Star Wars",
  released: 1977,
  actors: ["Mark", "Harrison", "Carrie"],
}; //dictionaries in javascript
cards.length; // .length finds the amount of objects in the file.

const movies = [
  {
    title: "Star Wars",
    released: 1977,
    actors: ["Mark", "Harrison", "Carrie"],
  },
  { title: "Lion King", released: 1994, actors: ["James Earl Jones"] },
];

movies.forEach((movie) => console.log(movie.title));
//filter, to get a new array of movies that match criteria
const newMovies = movies.filter((movie) => movie.release > 1990); //filters to see for each movie which has a release year of greater than 1990 and then we console.log it.
console.log(newMovies);
//----------//
//array name DOT array command then arrow function that accepts singular element of array
//^^ format of filter
movies //chaining arrays
  .filter((movie) => movie.release > 1990)
  .forEach((movie) => console.log(movie));

//-----------------//
//for html dom file//
const item = document.querySelectorAll("li"); // selects all list items
const items = Array.from(item); //turns node lists to arrays ??
console.log(item);
items.forEach((el) => (el.style.color = "red")); // iterate/loop over array and for each element and makes it red.
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target.textcontext);
  })
); //you can use this to add events to multiple things so for cards you know what you are taking off

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class = "card"><h2 class="card-header">${album.name}</h2></div>`
);
// im assuming that adds card

// we need to do: //
//  event listener for form
//  get values from form for widget object
// create the card insert the card
// find remove buttons and add event listeners
