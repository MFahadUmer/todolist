import './style.css';
import { project } from './project';

const myToDoList = localStorage.getItem('todo')
  ? JSON.parse(localStorage.getItem('todo'))
  : [];

localStorage.setItem('todo', JSON.stringify(myToDoList));
JSON.parse(localStorage.getItem('todo'));

let newProject = project
newProject.toDoItems("John", "Doe", 50, "blue", "jeez", 'sgdffd')
// var newProject = new toDoItems("John", "Doe", 50, "blue", "jeez", 'sgdffd')
console.log(newProject)
myToDoList.push(newProject);
console.log(myToDoList)
