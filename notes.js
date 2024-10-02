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

function argument(student) { // accepts and argument
  console.log("this is my student ${student}"); 
}
argument("claire");// not text specific, both works
argument(8);

function add (x,y){
    return x + y; // to get the value back with return, if u don't have return it is undefined. sends product for output.
}
console,log(add(7,9));
const answer = add(7,0);
console.log(answer)
//--------------//
//TRUTH TABLES : ^ = and  v = or
// null and operations//
