const DOMSelectors = {
  container: document.querySelector(".container"),
  header: document.querySelector("h1"),
  card: document.querySelector(".card"),
  cardHeader: document.querySelector(".card-header"),
  form: document.querySelector(".form"),
  button: document.querySelector(".submit"),
};

function formAnswer() {
  let form = document.querySelector(".submit");
  console.log(form);
  form.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
  });
}
formAnswer();
