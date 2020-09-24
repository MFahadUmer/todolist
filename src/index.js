/* eslint-disable no-unused-vars, prefer-destructuring */
/* eslint-disable no-undef, import/no-extraneous-dependencies */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import tasks from './task';
import addAndDisplay from './storage';
import project from './project';
import navModule from './nav';
import bodyModule from './body';
import modal from './modal';
import colorModule from './color';
import taskFormModule from './taskform';

library.add(fas, far, fab);
dom.i2svg();

let projectTitle;
const newProject = project;
let newProjectArray;
let addAndDisplayProjectArray = addAndDisplay;
let projectlist2;
const addAndDisplayTaskArray = addAndDisplay;

const defaultTask = () => {
  const newTask = tasks;
  newTask.toDoItems('Welcome', 'Go shopping', 'Buy milk and honey', 'Urgent', 'Buy items to restoke shelf', '08/18/2020');
  const newTaskArray = newTask.addTasks();
  addAndDisplayTaskArray.addtasks(newTaskArray);
  addAndDisplayTaskArray.displayTasks();
  document.getElementById('task-form-id').classList.add('task-form-class');
};

const defaultProject = () => {
  const defaultProjectDetails = ['Welcome', 'violet'];
  newProject.projects(defaultProjectDetails[0], defaultProjectDetails[1]);
  newProjectArray = newProject.addProject();
  addAndDisplayProjectArray = addAndDisplay;
  projectlist2 = addAndDisplayProjectArray.addDisplayproject(newProjectArray);
};

const projectListDisplay = addAndDisplay.displayProject();
if (projectListDisplay.length === 0) {
  defaultProject();
  defaultTask();
}

const createTask = (taskListValues) => {
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'parentDivForTask');
  taskListValues.forEach((obj, idx) => {
    if (obj[0] === projectTitle) {
      createTask(obj);
      const taskList = document.createElement('div');
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
    
    <button type="button" id='${idx}' class="update" data-toggle="modal" data-target="#updateTaskModal">
      <i class="fas fa-pencil-alt"></i>
    </button>
    </div>
    </div>
     <br> `;
      document.getElementById('tasksId').appendChild(mainDiv);
      mainDiv.appendChild(taskList);
    }
  });
  const deleteTask = document.querySelectorAll('.delete');
  deleteTask.forEach((obj) => {
    obj.addEventListener('click', () => {
      console.log(obj.id)
      delete taskListValues[obj.id]
      var filtered = taskListValues.filter(function (el) {
        return el != null;
      });
      taskListValues = filtered
      const taskList = document.getElementById('parentDivForTask');
      if (taskList !== null) {
        taskList.remove();
      }
      localStorage.setItem('todo', JSON.stringify(taskListValues));
      createTask(taskListValues);
    });
  });

  const updateTask = document.querySelectorAll('.update');
  updateTask.forEach((obj) => {
    obj.addEventListener('click', () => {
      const updateTaskModal = document.createElement('div');
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
                      <input type="text" class="form-control" id="updateTaskTitle" value="${taskListValues[obj.id][1]}">
                      </div>
                      <div class="form-group">
                      <label for="updateTaskDesc">Description</label>
                      <input type="text" class="form-control" id="updateTaskDesc" value="${taskListValues[obj.id][2]}">
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
                        <input class="form-control" type="date" value="${taskListValues[obj.id][5]}" id="UpdateTaskDate">
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
    });
  });
};

const displayCreateProject = () => {
  const parentDiv = document.getElementById('collapseExample');
  const projectListDiv = document.createElement('div');
  projectListDiv.setAttribute('id', 'projectList');
  parentDiv.appendChild(projectListDiv);
  projectListDisplay.forEach((obj) => {
    const projectListElem = document.createElement('p');
    projectListElem.setAttribute('id', 'projectId');
    projectListElem.addEventListener('click', () => {
      projectTitle = obj[0];
    });
    projectListElem.innerHTML = `${obj[0]}`;
    projectListElem.style.backgroundColor = `${obj[1]}`;
    projectListElem.classList.add('projectListELemParagraph');
    projectListDiv.appendChild(projectListElem);
  });
  const allProjectIds = document.querySelectorAll('#projectId');
  allProjectIds.forEach((obj) => {
    obj.addEventListener('click', () => {
      projectTitle = obj.innerHTML;
      const projectTitleDivForTask = document.createElement('div');
      projectTitleDivForTask.setAttribute('id', 'projectTitleDivForTask');
      const projectTitleDivForTaskParentDiv = document.getElementById('tasksId');
      projectTitleDivForTaskParentDiv.innerHTML = `<h2> ${projectTitle} </h2>`;
      projectTitleDivForTaskParentDiv.appendChild(projectTitleDivForTask);
      document.querySelector('.taskContainer').style.display = 'flex';
      const taskListValues = addAndDisplayTaskArray.displayTasks();
      createTask(taskListValues);
    });
  });
};

let times = 0;
const executeOddClick = () => {
  times += 1;
  if (times % 2 !== 0) {
    document.getElementById('fa-angle').style.cssText = 'transition: all 0.25s; transitionDuration = 0.25s; transform: rotate(90deg); margin-top: 10px;';
    const addTaskDiv = document.getElementById('right-body');
    addTaskDiv.style.cssText = 'display:block;';
    displayCreateProject();
    document.getElementById('taskAddC').addEventListener('click', () => {
      document.getElementById('task-form-id').classList.remove('task-form-class');
    });
  }
};

addProjectForm.onsubmit = (e) => {
  e.preventDefault();
  const projectTitle = document.getElementById('project-form-id').value;
  const projectColor = colorModule.dropObj[0];
  newProject.projects(projectTitle, projectColor);
  newProjectArray = newProject.addProject();
  addAndDisplayProjectArray = addAndDisplay;
  projectlist2 = addAndDisplayProjectArray.addDisplayproject(newProjectArray);
  document.getElementById('projectList').remove();
  document.getElementById('addProjectForm').reset();
  $('#projectModal').modal('hide');
  displayCreateProject();
};

taskForm.onsubmit = (e) => {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDesc = document.getElementById('taskDesc').value;
  const taskPriority = document.getElementById('taskPriority').value;
  const taskDate = document.getElementById('taskDate').value;
  const taskNotes = document.getElementById('taskNotes').value;
  document.getElementById('taskForm').reset();
  const newTask = tasks;
  newTask.toDoItems(projectTitle, taskTitle, taskDesc, taskPriority, taskNotes, taskDate);
  const newTaskArray = newTask.addTasks();
  addAndDisplayTaskArray.addtasks(newTaskArray);
  const displayTask = addAndDisplayTaskArray.displayTasks();
  document.getElementById('task-form-id').classList.add('task-form-class');
  const taskList = document.getElementById('parentDivForTask');
  if (taskList !== null) {
    taskList.remove();
  }
  createTask(displayTask);
};

document.getElementById('dropDown').addEventListener('click', executeOddClick);
document.getElementById('dropDown').addEventListener('click', () => {
  const projectsForTasks = document.querySelectorAll('.projectListELemParagraph');
});

let timesClicked = 0;
document.getElementById('dropDown').addEventListener('click', () => {
  timesClicked += 1;
  if (timesClicked % 2 === 0) {
    document.getElementById('fa-angle').style.cssText = 'transition: all 0.25s; transitionDuration = 0.25s; transform: rotate(0deg);';
    const myDoubingDiv = document.getElementById('projectList');
    myDoubingDiv.remove();
    const removeTask = document.getElementById('right-body');
    removeTask.style.cssText = 'display:none;';
  }
});

/* eslint-enable no-unused-vars, prefer-destructuring */
/* eslint-enable no-undef, import/no-extraneous-dependencies */
