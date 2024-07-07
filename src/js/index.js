// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const inputTaskElement = document.getElementById("create");
const formElement = document.getElementById("form");
const containerTasksElement = document.getElementById("tasks");
const filterNumberElement = document.getElementById("filter-number");
const checkboxElement = document.getElementById("checkbox");

let taskCounter = 1;

const addTaskCounter = () => {
  // const taskElement = document.querySelectorAll(".task");
  console.log(taskElement);

  taskCounter++;
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
  newCheckbox.id.add("checkbox");

  const newText = document.createElement("span");
  newText.textContent = taskValue;
  newText.classList.add("task__text");

  const newImg = document.createElement("img");
  newImg.src = "./assets/images/icon-cross.svg";
  newImg.classList.add("task__cross");

  newTask.append(newCheckbox, newText, newImg);
  containerTasksElement.append(newTask);

  addTaskCounter();
};
formElement.addEventListener("submit", createTask);

const substractTaskCounter = (event) => {
  if (taskCounter > 0) {
    taskCounter--;
  }
};
checkboxElement.addEventListener("input", substractTaskCounter);
