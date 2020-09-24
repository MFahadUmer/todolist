const taskFormModule = (() => {
  const createTaskForm = () => {
    const taskAddPlusC = document.createElement('div');
    taskAddPlusC.setAttribute('class', 'taskContainer');
    taskAddPlusC.setAttribute('id', 'taskAddC');
    taskAddPlusC.innerHTML = `<div>
      <button id='add-id' class='add-class'>+</button></div>
      <div class='ml-2'><p class='add-task-text'>Add task</p></div>`;
    const right = document.getElementById('right-body');
    right.appendChild(taskAddPlusC);
    const taskFormContainer = document.createElement('div');
    taskFormContainer.setAttribute('class', 'task-form-class');
    taskFormContainer.setAttribute('id', 'task-form-id');
    taskFormContainer.innerHTML = `<form id="taskForm" name="taskForm">

      <div class="form-group">
      <label for="taskTitle">Title</label>
      <input type="text" class="form-control" id="taskTitle" placeholder="title">
      </div>
      <div class="form-group">
      <label for="taskDesc">Description</label>
      <input type="text" class="form-control" id="taskDesc" placeholder="description">
      </div>
      <div class="form-group">
        <label for="taskPriority">Priority</label>
        <select class="form-control" id="taskPriority">
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
          <option>Urgent</option>
          <option>Important</option>
        </select>
      </div>
      <div class="form-group">
        <label for="taskDate">Date</label>
        <input class="form-control" type="date" value="2011-08-19" id="taskDate">
      </div>
      <div class="form-group">
        <label for="taskNotes">Notes</label>
        <textarea class="form-control" id="taskNotes" rows="3"></textarea>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Add Task">
      </div>
    </form>`;
    return taskFormContainer;
  };
  document.getElementById('right-body').appendChild(createTaskForm());
})();
export default taskFormModule;