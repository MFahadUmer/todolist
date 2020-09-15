import './style.css';
import tasks from "./task";
import addAndDisplay from "./storage";
import project from "./project";

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