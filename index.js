const DOMSelectors = {
  container: document.querySelector(".container"),
  header: document.querySelector("h1"),
  card: document.querySelectorAll(".card"),
  cardHeader: document.querySelectorAll(".card-header"),
  form: document.querySelector(".form"),
  button: document.querySelectorAll(".btn"),
  name: document.querySelector("#input1"),
  color: document.querySelector("#input2"),
};

// DOMSelectors.container.insertAdjacentHTML("beforebegin", 'ur html'); //takes two arguments: where and what we are putting it

function createObject() {
  DOMSelectors.form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input1 = DOMSelectors.input1.value;
    const input2 = DOMSelectors.input2.value;
  });
}

function insertOBject(name, color) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class=card><h2>${input1}</h2></div>`
  );
}
createObject();
