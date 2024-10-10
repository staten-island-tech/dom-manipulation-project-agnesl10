const DOMSelectors = {
  container: document.querySelector(".container"),
  header: document.querySelector("h1"),
  card: document.querySelectorAll(".card"),
  cardHeader: document.querySelectorAll(".card-header"),
  form: document.querySelectorAll(".form"),
  button: document.querySelectorAll(".btn"),
};

function formAnswer() {
  let form = document.querySelectorAll(".form");
  console.log(form);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event.target);
  });
}
console.log("connected");
formAnswer();

function createCard(card, cardTitle) {}
