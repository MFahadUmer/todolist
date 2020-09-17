import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style.css';
import tasks from "./task";
import addAndDisplay from "./storage";
import project from "./project";
import navModule from './nav'
import bodyModule from './body'
import modal from "./modal";
import colorModule from './color'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
dom.i2svg()

let newTask = tasks
newTask.toDoItems("Hillary", "Doe", 50, "blue", "jeez", 'sgdffd');
let newTaskArray = newTask.addTasks();
let addAndDisplayTaskArray = addAndDisplay;
addAndDisplayTaskArray.addDisplaytasks(newTaskArray);

let newProject = project;
newProject.projects("TO LIST");
let newProjectArray = newProject.addProject();
let addAndDisplayProjectArray = addAndDisplay;

let projectlist2 = addAndDisplayProjectArray.addDisplayproject(newProjectArray);

document.getElementById("dropDown").addEventListener("click", () => {
  let projectListDiv = document.getElementById("projectList");
  projectlist2.forEach((obj, index) => {
    let projectListElem = document.createElement("p");
    projectListElem.innerHTML = `${obj}`;
    projectListDiv.appendChild(projectListElem);
  })
});

const remItem = document.getElementById('button-dropdown').addEventListener('click', () => {
  document.getElementById('dropdown-section').classList.remove('dropdown-section')
});