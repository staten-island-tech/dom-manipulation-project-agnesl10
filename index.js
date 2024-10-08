function formAnswer() {
  let form = document.querySelector(".submit");
  console.log(form);
  form.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
  });
}
formAnswer();
