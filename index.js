const DOMSelectors = {
  container: document.querySelector(".container"),
  header: document.querySelector("h1"),
  card: document.querySelectorAll(".card"),
  cardHeader: document.querySelectorAll(".card-header"),
  form: document.querySelector(".form"),
  button: document.querySelectorAll(".btn"),
  name: document.querySelector("#inputn"),
  color: document.querySelector("#inputc"),
};

// DOMSelectors.container.insertAdjacentHTML("beforebegin", 'ur html'); //takes two arguments: where and what we are putting it

function createObject() {
  DOMSelectors.form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input1 = DOMSelectors.input1.value;
    const input2 = DOMSelectors.input2.value;

    insertObject(input1, input2);
    clearText();
    removebtn();
  });
}

function insertObject(name, color) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <h2>${name}</h2>
    <p>${color}</p>
    <button class="delete-btn"">remove</button>
    </div>`
  );
}

function clearText() {
  document.querySelector("#inputn").value = "";
  document.querySelector("#inputc").value = "";
}

function removebtn() {
  const deletebtn = document.querySelector(".delete-btn");
  deletebtn.addEventListener("click", function () {
    const card = document.querySelector(".card");
    card.remove();
  });
}

createObject();
