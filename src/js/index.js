// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const inputTaskElement = document.getElementById("create");
const formElement = document.getElementById("form");
const containerTasksElement = document.getElementById("tasks");
const filterNumberElement = document.getElementById("filter-number");
const checkboxElement = document.getElementById("checkbox");

const allTasks = [
  {
    id: Date.now(),
    task: "Comprar pan",
    completed: false,
  },
];

const insertTask = () => {
  const fragment = document.createDocumentFragment();

  allTasks.forEach((task) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.classList.add("task__checkbox");

    const newText = document.createElement("span");
    newText.textContent = task.task;
    newText.classList.add("task__text");

    const newImg = document.createElement("img");
    newImg.src = "./assets/images/icon-cross.svg";
    newImg.classList.add("task__cross");

    newTask.append(newCheckbox, newText, newImg);
    fragment.append(newTask);
  });

  containerTasksElement.append(fragment);
};

const saveTask = (task) => {
  allTtasks.push(task);

  insertTask();
};

const createTask = (task) => {
  const newTask = [
    {
      id: Date.now(),
      task: task,
      completed: false,
    },
  ];

  saveTask(newTask);
};

const getTask = (event) => {
  event.preventDefault();

  if (!taskValue) return;
  const taskValue = inputTaskElement.value;
  createTask(taskValue);

  event.target.reset();
};
formElement.addEventListener("submit", getTask);
