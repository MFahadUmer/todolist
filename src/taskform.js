const taskFormModule = (() => {
  const createTaskForm = () => {
    const taskFormContainer = document.createElement('div');
    taskFormContainer.setAttribute('class', 'task-form-class')
    taskFormContainer.setAttribute('id', 'task-form-id')
    rightWing = document.getElementById('tasksId')
    rightWing.appendChild(taskFormContainer)
    return taskFormContainer
  }
  document.getElementById('right-body').appendChild(createTaskForm());
})();

export default taskFormModule