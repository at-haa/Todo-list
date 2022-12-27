let tasks = document.querySelector(".todo-list__tasks");

document.querySelector(".add").addEventListener("click", () => {
  let task = document.querySelector(".todo-list__input").value;
  document.querySelector(".todo-list__input").value = "";
  if (task) {
    tasks.innerHTML =
      `<li class="task">${task}<span><i class="fa fa-check check"></i><i class="fa fa-trash-o delete"></span></i>` +
      tasks.innerHTML;
  }
});

document.querySelector(".clear").addEventListener("click", () => {
  tasks.innerHTML = "";
});

tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("check"))
    event.target.parentNode.parentNode.classList.add("checked");

  if (event.target.classList.contains("delete"))
    event.target.parentNode.parentNode.remove();
});
