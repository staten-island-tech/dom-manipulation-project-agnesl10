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
  form.addEventListener("Beep", function (event) {});
  console.log(form);
}
formAnswer();

//-----------------//
//media format for css style file.
@media screen and (max-width: 1100px) {
  .container {
      flex-direction: row;
  }
  .card {
      width: 30%
  }
}
@media screen and (max-width: 800px) {
  .container {
      flex-direction: row;
  }
  .card {
      width: 40%
  }
}
@media screen and (max-width: 600px) {
  .container {
      flex-direction: row;
  }
  .card{
      width: 70%
  }
}
@media screen and (max-width: 400px) {
  .contianer {
      flex-direction: column;
  }
  .card {
      width: 80%
  }
}