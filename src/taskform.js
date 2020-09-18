const taskFormModule = (() => {
  const createTaskForm = () => {
    const taskFormContainer = document.createElement('div');
    taskFormContainer.setAttribute('class', 'task-form-class')
    taskFormContainer.setAttribute('id', 'task-form-id')
    taskFormContainer.innerHTML = `<form id="taskForm" name="taskForm">
<!--      <div class="form-group">-->
<!--        <label for="projectName">Project name</label>-->
<!--        <input type="text" class="form-control" id="projectName" placeholder="name">-->
<!--      </div>-->

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

<!--      <div class="form-check">-->
<!--        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">-->
<!--        <label class="form-check-label" for="defaultCheck1">Checklist-->
<!--        </label>-->
<!--      </div><br>-->

      <div class="form-group">
        <label for="taskDate">Date</label>
        <input class="form-control" type="date" value="2011-08-19" id="taskDate">
      </div>

      <div class="form-group">
        <label for="taskNotes">Notes</label>
        <textarea class="form-control" id="taskNotes" rows="3"></textarea>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <input type="submit" class="btn btn-primary" value="Add Task">
      </div>
    </form>`
    return taskFormContainer
  }
  document.getElementById('right-body').appendChild(createTaskForm());

})();

export default taskFormModule