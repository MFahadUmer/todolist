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
    project.innerHTML= `<div class="project-section"><p>Project</p> <p>+</p></div>`;
    left.appendChild(project);
    toDoBody.appendChild(left);
    toDoBody.appendChild(right);

    return toDoBody
  }

  document.querySelector('.body-container').appendChild(createBody());

})();

export default bodyModule