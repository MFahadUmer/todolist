import './style.css';
import project from "./project";

let myProject = project.toDoItems;
myProject.add("adain toDolist", "Todolist", 1 )
let myProject2 = project.toDoItems;
myProject2.add("toDolist", "Todolist", 1 )
myProject.display();
myProject2.display();