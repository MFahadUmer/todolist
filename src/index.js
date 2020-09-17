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
let newProjectArray;
let addAndDisplayProjectArray = addAndDisplay;
let projectlist2;

const defaultProject = ()=> {
  let defaultProjectDetails = ['Welcome', 'violet'];
  newProject.projects(defaultProjectDetails[0],defaultProjectDetails[1]);
  newProjectArray = newProject.addProject();
  addAndDisplayProjectArray = addAndDisplay;
  projectlist2 = addAndDisplayProjectArray.addDisplayproject(newProjectArray)
}

addProjectForm.onsubmit = (e)=>{
  e.preventDefault();
  console.log("Hiii");
  const projectTitle = document.getElementById("project-form-id").value;
  const projectColor = colorModule.dropObj[0];
  newProject.projects(projectTitle,projectColor);
  newProjectArray = newProject.addProject();
  addAndDisplayProjectArray = addAndDisplay;
  projectlist2 = addAndDisplayProjectArray.addDisplayproject(newProjectArray)
}
let projectListDisplay = addAndDisplay.displayProject();
if (projectListDisplay.length === 0){
  defaultProject();
}
document.getElementById("dropDown").addEventListener("click", () => {
  let projectListDiv = document.getElementById("projectList");
  for(let i = 0; i < projectListDisplay.length; i += 1){
    let projectListElem = document.createElement("p");
    projectListElem.innerHTML = `${projectListDisplay[i][0]}`;
    projectListElem.style.backgroundColor = `${projectListDisplay[i][1]}`;
    projectListElem.classList.add('projectListELemParagraph');

    projectListDiv.appendChild(projectListElem);
  }

});

document.getElementById('button-dropdown').addEventListener('click', () => {
  document.getElementById('dropdown-section').classList.toggle('dropdown-section');
  // colorModule.changeColor();
});

