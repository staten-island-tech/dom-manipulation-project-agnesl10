const DOMSelectors = {
  container: document.querySelector(".container"),
  header: document.querySelector("h1"),
  card: document.querySelectorAll(".card"),
  cardHeader: document.querySelectorAll(".card-header"),
  form: document.querySelectorAll(".form"),
  button: document.querySelectorAll(".btn"),
  input: document.querySelector("#input"),
};

function formAnswer() {
  let button = document.querySelectorAll(".btn");
  console.log(button);
  button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);
  });
}
console.log("connected");
formAnswer();

// DOMSelectors.container.insertAdjacentHTML("beforebegin", 'ur html'); //takes two arguments: where and what we are putting it
DOMSelectors.form.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
  DOMSelectors.input.value = ""; //resets button
});
function createCard(card, cardTitle) {}
