const DOMSelectors = {
  container: document.querySelector(".container"),
  card: document.querySelectorAll(".card"),
  form: document.querySelector(".form"),
  button: document.querySelector(".btn"),
  name: document.querySelector("#input1"),
  color: document.querySelector("#input2"),
};

// DOMSelectors.container.insertAdjacentHTML("beforebegin", 'ur html'); //takes two arguments: where and what we are putting it

function createObject() {
  DOMSelectors.button.addEventListener("click", function (e) {
    console.log("whiat");
    e.preventDefault();
    const input1 = DOMSelectors.name.value;
    const input2 = DOMSelectors.color.value;

    insertObject(input1, input2);
    clearText();
    removeObject();
  });
}

function insertObject(name, color) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-header">${name}</h2>
      <p class="fav-color">${color}</p></p>
      <br />
      <button class="removebtn" type="button">remove</button>
    </div>`
  );
}

function clearText() {
  document.querySelector(".form").reset(); //clears form
}

function removeObject() {
  DOMSelectors.container.addEventListener("click", function (event) {
    if (event.target.classList.contains("removebtn")) {
      //checks to see if elements in your HTMl have the class removebtn and if it does it follows thru with the if statement.
      event.target.closest(".card").remove(); //finds the closest parent card of the delete button that you clicked and deletes that div.
    }
  });
}

createObject();
