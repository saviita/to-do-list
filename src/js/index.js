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

const deleteTask = (id) => {
  allTasks = allTasks.filter((task) => task.id !== id);
  console.log(allTasks);
};

const insertTask = () => {
  const fragment = document.createDocumentFragment();

  allTasks.forEach((task) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.classList.add("task__checkbox");
    newCheckbox.id = task.id;
    newCheckbox.checked = task.completed;

    const newText = document.createElement("label");
    newText.textContent = task.task;
    newText.htmlFor = task.id;
    newText.classList.add("task__text");
    console.log(task.task);

    const newImg = document.createElement("img");
    newImg.src = "./assets/images/icon-cross.svg";
    newImg.classList.add("task__cross");

    newTask.append(newCheckbox, newText, newImg);
    fragment.append(newTask);
  });

  containerTasksElement.textContent = "";
  containerTasksElement.append(fragment);
};

insertTask();

const saveTask = (newTask) => {
  allTasks.push(newTask);

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
  const taskValue = inputTaskElement.value;

  if (!taskValue) return;
  createTask(taskValue);

  event.target.reset();
};
formElement.addEventListener("submit", getTask);
