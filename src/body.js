const bodyModule = (() => {
  const createBody = () => {
    const toDoBody = document.createElement('div');
    toDoBody.setAttribute('class', 'body-class')
    toDoBody.setAttribute('id', 'body-id');
    const left = document.createElement('div');
    const right = document.createElement('div')
    left.setAttribute('id', 'left-body')
    left.setAttribute('class', 'left-body')
    right.setAttribute('id', 'right-body')
    right.setAttribute('class', 'right-body')
    const project = document.createElement('div');
    project.setAttribute('class', 'projectStyles');
    project.innerHTML = `
      <div class="project-section">
        <div class='d-flex align-items-center'>
          <p><a id="dropDown" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
              aria-controls="collapseExample">
              <i class="fas fa-angle-right fa-2x"></i>
            </a></p>
          <p class='project-p'>Project</p>
        </div>
        <div id="addProjectDiv">
        </div>
      </div>
      <div id='reload'>
        <div class="collapse" id="collapseExample">
          <div id="projectList" class="card card-body">
          </div>
        </div>
      </div>`;
    left.appendChild(project);
    // const taskAddPlusC = document.createElement('div');
    // taskAddPlusC.setAttribute('class', 'taskContainer')
    // taskAddPlusC.setAttribute('id', 'taskAddC')
    // taskAddPlusC.innerHTML = `<div>
    //   <button id='add-id' class='add-class'>+</button></div>
    //   <div class='ml-2'><p class='add-task-text'>Add task</p></div>`
    const task = document.createElement('div');
    task.setAttribute('id', 'tasksId');
    task.setAttribute('class', 'tasksClass');
    // right.appendChild(taskAddPlusC)
    right.appendChild(task);
    toDoBody.appendChild(left);
    toDoBody.appendChild(right);

    return toDoBody
  }

  document.querySelector('.body-container').appendChild(createBody());

})();

export default bodyModule