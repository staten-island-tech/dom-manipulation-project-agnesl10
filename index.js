const DOMSelectors = {
  container: document.querySelector(".container"),
  card: document.querySelectorAll(".card"),
  form: document.querySelector(".form"),
<<<<<<< HEAD
  button: document.querySelectorAll(".btn"),
  name: document.querySelector("#inputn"),
  color: document.querySelector("#inputc"),
=======
  button: document.querySelector(".btn"),
  name: document.querySelector("#input1"),
  color: document.querySelector("#input2"),
>>>>>>> fe2ce06e4cb05552f4af92d20ccab0f5f80f2db6
};

// DOMSelectors.container.insertAdjacentHTML("beforebegin", 'ur html'); //takes two arguments: where and what we are putting it

function createObject() {
  DOMSelectors.form.addEventListener("submit", function (e) {
    e.preventDefault();
<<<<<<< HEAD
    const input1 = DOMSelectors.input1.value;
    const input2 = DOMSelectors.input2.value;

    insertObject(input1, input2);
    clearText();
    removebtn();
=======
    const input1 = DOMSelectors.name.value;
    const input2 = DOMSelectors.color.value;

    insertOBject(input1, input2);
    clearText();
    removeObject();
>>>>>>> fe2ce06e4cb05552f4af92d20ccab0f5f80f2db6
  });
}

function insertObject(name, color) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
<<<<<<< HEAD
    `<div class=card>
    <h2>${name}</h2>
    <p>${color}</p>
    <button class="delete-btn"">remove</button>
=======
    `<div class="card">
      <h2 class="card-header">${name}</h2>
      <p class="fav-color">${color}</p></p>
      <button class="removebtn" type="button">remove</button>
>>>>>>> fe2ce06e4cb05552f4af92d20ccab0f5f80f2db6
    </div>`
  );
}

<<<<<<< HEAD
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

=======
function clearText(){
  document.querySelector(".form").reset(); //clears form 
}

function removeObject(){
  DOMSelectors.container.addEventListener("click", function (event){
    if (event.target.classList.contains("removebtn")) { //checks to see if elements in your HTMl have the class removebtn and if it does it follows thru with the if statement.
      event.target.closest(".card").remove(); //finds the closest parent card of the delete button that you clicked and deletes that div.
    }
  });
}
>>>>>>> fe2ce06e4cb05552f4af92d20ccab0f5f80f2db6
createObject();
