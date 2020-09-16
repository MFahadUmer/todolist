const bodyModule = (() => {
  const createBody = () => {
    const toDoBody = document.createElement('div');
    toDoBody.setAttribute('class', 'body-class')
    toDoBody.setAttribute('id', 'body-id');
    const left = document.createElement('div');
    const right = document.createElement('div')
    left.setAttribute('id', 'left-body')
    right.setAttribute('id', 'right-body')
    toDoBody.appendChild(left);
    toDoBody.appendChild(right)

    return toDoBody
  }

  document.querySelector('.body-container').appendChild(createBody());

})();

export default bodyModule