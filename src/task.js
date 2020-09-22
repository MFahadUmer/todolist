const tasks = (() => {
  function toDoItems(project, title, description, priority, notes, duedate) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.notes = notes;
    this.duedate = duedate;
    this.addTasks = function() {
      return [project, title, description, priority, notes, duedate];
    };
  }
  return {
    toDoItems
  }

})();

export default tasks;
