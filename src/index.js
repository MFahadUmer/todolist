import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
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
import taskFormModule from './taskform'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
dom.i2svg()

let projectTitle;
let newProject = project;
let newProjectArray;
let addAndDisplayProjectArray = addAndDisplay;
let projectlist2;
let addAndDisplayTaskArray = addAndDisplay;

taskForm.onsubmit = (e)=> {
  e.preventDefault();
  let taskTitle = document.getElementById('taskTitle').value;
  let taskDesc = document.getElementById('taskDesc').value;
  let taskPriority = document.getElementById('taskPriority').value;
  let taskDate = document.getElementById('taskDate').value;
  let taskNotes = document.getElementById('taskNotes').value;
  let newTask = tasks
  newTask.toDoItems(projectTitle, taskTitle, taskDesc, taskPriority, taskNotes, taskDate);
  let newTaskArray = newTask.addTasks();
  addAndDisplayTaskArray.addtasks(newTaskArray);
  let displayTask = addAndDisplayTaskArray.displayTasks();
  document.getElementById('task-form-id').classList.add("task-form-class");

}

const defaultProject = () => {
  let defaultProjectDetails = ['Welcome', 'violet'];
  newProject.projects(defaultProjectDetails[0], defaultProjectDetails[1]);
  newProjectArray = newProject.addProject();
  addAndDisplayProjectArray = addAndDisplay;
  projectlist2 = addAndDisplayProjectArray.addDisplayproject(newProjectArray)
}

addProjectForm.onsubmit = (e) => {
  e.preventDefault();
  const projectTitle = document.getElementById("project-form-id").value;
  const projectColor = colorModule.dropObj[0];
  newProject.projects(projectTitle, projectColor);
  newProjectArray = newProject.addProject();
  addAndDisplayProjectArray = addAndDisplay;
  projectlist2 = addAndDisplayProjectArray.addDisplayproject(newProjectArray)
}
let projectListDisplay = addAndDisplay.displayProject();
if (projectListDisplay.length === 0) {
  defaultProject();
}

var times = 0;
const executeOddClick = () => {
  times++
  if (times % 2 != 0) {
    let projectListDiv = document.getElementById("projectList");
    projectListDisplay.forEach((obj, idx) => {
      let projectListElem = document.createElement("p");
      projectListElem.setAttribute('id', `projectId`);
      projectListElem.addEventListener('click', () => {
        projectTitle = obj[0];
      });
      console.log(obj);
      projectListElem.innerHTML = `${obj[0]}`;
      projectListElem.style.backgroundColor = `${obj[1]}`;
      projectListElem.classList.add('projectListELemParagraph');
      projectListDiv.appendChild(projectListElem);
    });

    let allProjectIds  = document.querySelectorAll('#projectId');
    allProjectIds.forEach((obj, idx) => {
      obj.addEventListener('click', ()=> {
        projectTitle = obj.innerHTML;
        let projectTitleDivForTask = document.createElement('div');
        projectTitleDivForTask.setAttribute('id', 'projectTitleDivForTask');
        let projectTitleDivForTaskParentDiv = document.getElementById('tasksId');
        projectTitleDivForTaskParentDiv.innerHTML = `<h2> ${projectTitle} </h2>`;
        projectTitleDivForTaskParentDiv.appendChild(projectTitleDivForTask);
        document.querySelector('.taskContainer').style.display = 'flex';
        let taskListValues = addAndDisplayTaskArray.displayTasks();
        taskListValues.forEach((obj) => {
          if (obj[0] === projectTitle){
            let taskList = document.createElement('div');
            taskList.setAttribute('id', 'taskList');
            taskList.setAttribute('class', 'taskList');
            taskList.classList.remove('taskList');
            taskList.innerHTML = `
            
      <div><span class="taskcategory">Task:</span> <span class="taskname">${obj[1]}</span></div>
      <div><span class="taskcategory">Description:</span> <span class="taskname">${obj[2]}</span></div>
      <div><span class="taskcategory">Priority:</span> <span class="taskname">${obj[3]}</span></div>
      <div><span class="taskcategory">Notes:</span> <span class="taskname">${obj[4]}</span></div>
      <div><span class="taskcategory">Due Date:</span> <span class="taskname">${obj[5]}</span></div>
           <br> `;

            projectTitleDivForTaskParentDiv.appendChild(taskList);
          }
        });
      });
    });

    document.getElementById('taskAddC').addEventListener('click', ()=> {
      document.getElementById('taskList').classList.add('taskList')
      document.getElementById('task-form-id').classList.remove("task-form-class");
    });


  }

}

document.getElementById("dropDown").addEventListener("click", executeOddClick)

document.getElementById('dropDown').addEventListener('click', () => {
  let projectsForTasks = document.querySelectorAll('.projectListELemParagraph');
});

document.getElementById('button-dropdown').addEventListener('click', () => {
  document.getElementById('dropdown-section').classList.toggle('dropdown-section');
});

//remember to fix
var timesClicked = 0;
document.getElementById('dropDown').addEventListener('click', () => {
  timesClicked++
  if (timesClicked % 2 == 0) {
    document.location.reload();
  }
});

document.getElementById('submit-reload').addEventListener('click', () => {
  window.location.reload();
})
