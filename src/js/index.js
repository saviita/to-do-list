// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const inputTaskElement = document.getElementById("create");
const formElement = document.getElementById("form");
const containerTasksElement = document.getElementById("tasks");
const filterNumberElement = document.getElementById("filter-number");

let taskCounter = 0;

const addTaskCounter = () => {
  const checkboxElement = document.querySelectorAll(".checkbox");
  console.log(checkboxElement);
  taskCounter = checkboxElement.length;

  filterNumberElement.textContent = `${taskCounter} items left`;
};

const createTask = (event) => {
  event.preventDefault();
  const taskValue = inputTaskElement.value;

  const newTask = document.createElement("div");
  newTask.classList.add("task");

  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.classList.add("task__checkbox", "checkbox");

  const newText = document.createElement("span");
  newText.textContent = taskValue;
  newText.classList.add("task__text");

  const newImg = document.createElement("img");
  newImg.src = "./assets/images/icon-cross.svg";
  newImg.classList.add("task__cross");

  newTask.append(newCheckbox, newText, newImg);
  containerTasksElement.append(newTask);

  taskCounter();
};
formElement.addEventListener("submit", createTask);

const substractTaskCounter = (event) => {};
