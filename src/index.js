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
import updateModal from "./update"
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

const defaultTask = () => {
  let newTask = tasks
  newTask.toDoItems('Welcome', 'Go shopping', 'Buy milk and honey', 'Urgent', 'Buy items to restoke shelf', '08/18/2020');
  let newTaskArray = newTask.addTasks();
  addAndDisplayTaskArray.addtasks(newTaskArray);
  let displayTask = addAndDisplayTaskArray.displayTasks();
  document.getElementById('task-form-id').classList.add("task-form-class");
}

taskForm.onsubmit = (e) => {
  e.preventDefault();
  let taskTitle = document.getElementById('taskTitle').value;
  let taskDesc = document.getElementById('taskDesc').value;
  let taskPriority = document.getElementById('taskPriority').value;
  let taskDate = document.getElementById('taskDate').value;
  let taskNotes = document.getElementById('taskNotes').value;
  document.getElementById('taskForm').reset();
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
  defaultTask();
}

var times = 0;
const executeOddClick = () => {
  times++
  if (times % 2 != 0) {
    document.getElementById("fa-angle").style.cssText = "transition: all 0.25s; transitionDuration = 0.25s; transform: rotate(90deg); margin-top: 10px;";
    var addTaskDiv = document.getElementById('right-body')
    addTaskDiv.style.cssText = 'display:block;'
    var parentDiv = document.getElementById('collapseExample')
    let projectListDiv = document.createElement('div')
    projectListDiv.setAttribute('id', 'projectList')
    parentDiv.appendChild(projectListDiv)
    projectListDisplay.forEach((obj, idx) => {
      let projectListElem = document.createElement("p");
      projectListElem.setAttribute('id', `projectId`);
      projectListElem.addEventListener('click', () => {
        projectTitle = obj[0];
      });
      projectListElem.innerHTML = `${obj[0]}`;
      projectListElem.style.backgroundColor = `${obj[1]}`;
      projectListElem.classList.add('projectListELemParagraph');
      projectListDiv.appendChild(projectListElem);
    });

    let allProjectIds = document.querySelectorAll('#projectId');
    allProjectIds.forEach((obj, idx) => {
      obj.addEventListener('click', () => {
        projectTitle = obj.innerHTML;
        let projectTitleDivForTask = document.createElement('div');
        projectTitleDivForTask.setAttribute('id', 'projectTitleDivForTask');
        let projectTitleDivForTaskParentDiv = document.getElementById('tasksId');
        projectTitleDivForTaskParentDiv.innerHTML = `<h2> ${projectTitle} </h2>`;
        projectTitleDivForTaskParentDiv.appendChild(projectTitleDivForTask);
        document.querySelector('.taskContainer').style.display = 'flex';
        let taskListValues = addAndDisplayTaskArray.displayTasks();
        taskListValues.forEach((obj, idx) => {
          if (obj[0] === projectTitle) {
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
              <div id="taskListOperations" class='d-flex flex-row'>
              <div>
              <button class="delete" id='${idx}'><i class="fas fa-trash"></i></button>
              
              <button type="button" id="${idx}" class="update" data-toggle="modal" data-target="#updateTaskModal">
                <i class="fas fa-pencil-alt"></i>
              </button>
              </div>
              </div>
           <br> `;
            projectTitleDivForTaskParentDiv.appendChild(taskList);
          }
        });

        let deleteTask = document.querySelectorAll('.delete');
        deleteTask.forEach((obj) => {
          obj.addEventListener('click', () => {
            taskListValues.splice(obj.id, 1);
            localStorage.setItem('todo', JSON.stringify(taskListValues));
          })
        });
        let updateTask = document.querySelectorAll('.update');
        updateTask.forEach((obj)=>{
          obj.addEventListener('click', ()=> {
            let updateTaskModal = document.createElement('div');
            updateTaskModal.setAttribute('class', 'modal fade');
            updateTaskModal.setAttribute('id', 'updateTaskModal');
            updateTaskModal.setAttribute('tabindex', '-1');
            updateTaskModal.setAttribute('role', 'dialog');
            updateTaskModal.setAttribute('aria-labelledby', 'updateTaskModalLabel');
            updateTaskModal.setAttribute('aria-hidden', 'true');
            updateTaskModal.innerHTML = `
           <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title text-success" id="updateTaskModalLabel"><span class="text-danger">Project =></span> ${taskListValues[obj.id][0]}</h3>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body" id='modal-update'>
                    <form id="updateTaskForm" name="updateTaskForm">
                        <div class="form-group">
                        <label for="updateTaskTitle">Title</label>
                        <input type="text" class="form-control" id="updateTaskTitle" value=\"${taskListValues[obj.id][1]}\">
                        </div>
                        <div class="form-group">
                        <label for="updateTaskDesc">Description</label>
                        <input type="text" class="form-control" id="updateTaskDesc" value=\"${taskListValues[obj.id][2]}\">
                        </div>
                        <div class="form-group">
                          <label for="updateTaskPriority">Priority</label>
                          <select class="form-control" id="updateTaskPriority">
                            <option>Low</option>
                            <option>Normal</option>
                            <option>High</option>
                            <option>Urgent</option>
                            <option>Important</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label for="UpdateTaskDate">Date</label>
                          <input class="form-control" type="date" value=\"${taskListValues[obj.id][5]}\" id="UpdateTaskDate">
                        </div>

                        <div class="form-group">
                          <label for="updateTaskNotes">Notes</label>
                          <textarea class="form-control" id="updateTaskNotes" rows="3" >${taskListValues[obj.id][4]}</textarea>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <input type="submit" class="btn btn-primary" name="updateTaskForm" value="Update">
                        </div>
                      </form> 
                    </div>
                  </div>
                </div>`;
            document.getElementById('taskListOperations').appendChild(updateTaskModal);
          })
        })
      });
    });

    document.getElementById('taskAddC').addEventListener('click', () => {
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

var timesClicked = 0;
document.getElementById('dropDown').addEventListener('click', () => {
  timesClicked++
  if (timesClicked % 2 == 0) {
    document.getElementById("fa-angle").style.cssText = "transition: all 0.25s; transitionDuration = 0.25s; transform: rotate(0deg);";
    var myDoubingDiv = document.getElementById("projectList");
    myDoubingDiv.remove();
    var removeTask = document.getElementById('right-body')
    removeTask.style.cssText = 'display:none;'
  }
});