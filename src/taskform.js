const taskFormModule = (() => {
  const createTaskForm = () => {
    const taskFormContainer = document.createElement('div');
    taskFormContainer.setAttribute('class', 'task-form-class')
    taskFormContainer.setAttribute('id', 'task-form-id')
    taskFormContainer.innerHTML = `<form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Project name</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name">
    </div>

    <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="title">
    </div>
    <div class="form-group">
    <label for="exampleFormControlInput1">Description</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="description">
    </div>

    <div class="form-group">
      <label for="exampleFormControlSelect1">Priority</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Low</option>
        <option>Normal</option>
        <option>High</option>
        <option>Urgent</option>
        <option>Important</option>
      </select>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">Checklist
      </label>
    </div><br>

    <div class="form-group">
      <label for="example-date-input">Date</label>
      <div class="col-10">
      <input class="form-control" type="date" value="2011-08-19" id="example-date-input">
    </div

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Notes</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </form>`
    return taskFormContainer
  }
  document.getElementById('tasksId').appendChild(createTaskForm());
})();

export default taskFormModule