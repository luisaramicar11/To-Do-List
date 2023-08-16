const $title = document.querySelector(".toDo-title"),
  $form = document.querySelector(".toDo-form"),
  $table = document.querySelector(".toDo-table"),
  $row = document.querySelector(".toDo-tr");
($template = document.getElementById("toDo-template").content),
  ($fragment = document.createDocumentFragment());

document.addEventListener("submit", (e) => {
  e.preventDefault();
  let enlace = Date.now();
  $title.textContent = "Add activity";
  if (!e.target.id.value) {
    if (e.target === $form) {
      $template.querySelector(".toDo-activity").textContent =
        e.target.activity.value;
      $template.querySelector(".toDo-tr").id = enlace;
      $template.querySelector(".edit").dataset.enlace = enlace;
      $template.querySelector(".edit").dataset.actividad =
        e.target.activity.value;
      $template.querySelector(".delete").dataset.actividad =
        e.target.activity.value;
      $template.querySelector(".delete").dataset.enlace = enlace;
      $template.querySelector(".check").dataset.enlace = enlace;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
      $table.querySelector("tbody").appendChild($fragment);
    }
  } else {
    document
      .getElementById(e.target.id.value)
      .querySelector(".toDo-activity").textContent = e.target.activity.value;
  }
  e.target.activity.value = "";
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Edit Activity";
    $form.activity.value = e.target.dataset.actividad;
    $form.id.value = e.target.dataset.enlace;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".delete")) {
    let isDelete = confirm(`
Do you want to delete the activity "${e.target.dataset.actividad}"?`);

    if (isDelete) {
      document.getElementById(e.target.dataset.enlace).remove();
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".check")) {
    let check = "✔️",
      noCheck = "❌";
    if (e.target.textContent === noCheck) {
      e.target.textContent = check;
      document
        .getElementById(e.target.dataset.enlace)
        .querySelector(".toDo-activity").style.color = " #35EC0C";
    } else {
      e.target.textContent = noCheck;
      document
        .getElementById(e.target.dataset.enlace)
        .querySelector(".toDo-activity").style.color = "#000";
    }
  }
});
