const tasks = (() => {
  function toDoItems(project, title, description, priority, notes, checklist, duedate) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.duedate = duedate;
    this.addTasks = function() {
      return [project, title, description, priority, notes, checklist, duedate];
    };
  }

  return {
    toDoItems
  }

})();

export default tasks;
