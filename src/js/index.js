// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const inputTaskElement = document.getElementById("create");
const formElement = document.getElementById("form");
const containerTasksElement = document.getElementById("tasks");
const filterNumberElement = document.getElementById("filter-number");
const checkboxElement = document.getElementById("checkbox");
const allFilter = document.querySelectorAll('.filter')
const deleteCompletedElement = document.getElementById('filter-clear')
const filtersElement = document.getElementById('filters')

let allTasks = [
  {
    id: Date.now(),
    task: "Comprar pan",
    completed: false,
  },
];

const getFilteredTasks = () => {
  const currentFilter = document.querySelector('.filter-active').dataset.filter
  let filteredTasks = allTasks

  if (currentFilter === 'active') {
    filteredTasks = filteredTasks.filter(task => !task.completed)
    console.log('activo')
  } else if (currentFilter === 'completed') {
    filteredTasks = filteredTasks.filter(task => task.completed)
    console.log('completado')
  }

  return filteredTasks
}

const countItemsLeft = () => {
  const itemsLeft = allTasks.filter(task => !task.completed).length

  if(allTasks.length === 0) {
    filterNumberElement.textContent = 'No tasks'
  } else if (itemsLeft === 0) {
    filterNumberElement.textContent = 'All tasks completed'
  } else {
    filterNumberElement.textContent = `${itemsLeft} items left`
  }
}

const insertTask = tasks => {
  const fragment = document.createDocumentFragment();

  tasks.forEach((task) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newCheckbox = document.createElement("input");
    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add("task__checkbox");
    newCheckbox.id = task.id;
    newCheckbox.checked = task.completed;

    const newText = document.createElement("label");
    newText.textContent = task.task;
    newText.htmlFor = task.id;
    newText.classList.add("task__text");

    const newDelete = document.createElement("img");
    newDelete.src = "./assets/images/icon-cross.svg";
    newDelete.classList.add("task__cross");

    newCheckbox.addEventListener('change', () => completeTask(task.id))

    newDelete.addEventListener('click', () => deleteTask(task.id))

    newTask.append(newCheckbox, newText, newDelete);
    fragment.append(newTask);
    countItemsLeft();
  });

  containerTasksElement.textContent = "";
  containerTasksElement.append(fragment);
  countItemsLeft()
};

const completeTask = id => {
  allTasks = allTasks.map(task => {
    if(task.id === id) {
      task.completed = !task.completed
    }
    return task
  })

  const filteredTasks = getFilteredTasks()
  insertTask(filteredTasks)
}

const saveTask = (newTask) => {
  allTasks.push(newTask);
  const tasksToRender = getFilteredTasks()
  insertTask(tasksToRender);
};

const deleteTask = (id) => {
  allTasks = allTasks.filter((task) => task.id !== id);
  insertTask(allTasks)
};

const createTask = (task) => {
  const newTask = {
      id: Date.now(),
      task: task,
      completed: false,
    };

  saveTask(newTask);
};

const changeFilter = filterTarget => {
  allFilter.forEach(filter => {
    filter.classList.remove('filter-active')
    console.log('quitando clase')
  })

  filterTarget.classList.add('filter-active')
}

const filterTasks = filterTarget => {
  changeFilter(filterTarget)

  const filteredTasks = getFilteredTasks(filterTarget)
  insertTask(filteredTasks)
}

const deleteAllCompleteTasks = () => {
  allTasks = allTasks.filter(task => !task.completed)
  insertTask(allTasks)
}

insertTask(allTasks)

const getTask = (event) => {
  event.preventDefault();
  if(!event.target.task.value) return
  //if (!taskValue) return; IGUAL
  createTask(event.target.task.value);
  // createTask(taskValue);

  event.target.reset();
};
formElement.addEventListener("submit", getTask);

deleteCompletedElement.addEventListener('click', deleteAllCompleteTasks)

filtersElement.addEventListener('click', event => {
  if (!event.target.dataset.filter) return;
  filterTasks(event.target)
})