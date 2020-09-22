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
              <i class="fas fa-angle-right fa-2x" id="fa-angle"></i>
            </a></p>
          <p class='project-p'>Project</p>
        </div>
        <div id="addProjectDiv">
        </div>
      </div>
      <div id='reload'>
        <div class="collapse" id="collapseExample">
        </div>
      </div>`;
    left.appendChild(project);
    const task = document.createElement('div');
    task.setAttribute('id', 'tasksId');
    task.setAttribute('class', 'tasksClass');
    right.appendChild(task);
    toDoBody.appendChild(left);
    toDoBody.appendChild(right);

    return toDoBody
  }

  document.querySelector('.body-container').appendChild(createBody());

})();

export default bodyModule