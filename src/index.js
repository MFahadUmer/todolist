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

let newTask = tasks
newTask.toDoItems("Hillary", "Doe", 50, "blue", "jeez", 'sgdffd');
let newTaskArray = newTask.addTasks();
let addAndDisplayTaskArray = addAndDisplay;
addAndDisplayTaskArray.addDisplaytasks(newTaskArray);

let newProject = project;
newProject.projects("TO DO LIST");
let newProjectArray = newProject.addProject();
let addAndDisplayProjectArray = addAndDisplay;
addAndDisplayProjectArray.addDisplayproject(newProjectArray);