const header = document.querySelecter("h1");
console.log(header.parentElement); //parent select other parts

const DOMSelectors = { //storage
    header: document.querySelector("h1") //stored object in another like classes in python, "i wnna know where this is so i can do smth to it later"
    description: document.querySelector(".card-desc")
    items: document.querySelectorAll("li") // all shows all in the list without it it just shows one of the items on the list
};//instead of dictionaries we have objects
console.log(DOMSelectors.description);
const student = {
    name: "mark",
};

//button
function changeColor(){
    let button = document.querySelector(".enter")
    //console.log(button); //always log things early to know what to expect
    //listen for a click event
    button.addEventListener("click", function(event){
        event.preventDefault(); //prevents default behavior of thing.
        //logging the click event
        console.log(event);
        button.style.backgroundColor = "red"; //not used alot if u do u will get ripped apart
    });
}
//call function
changeColor();

//get info from form