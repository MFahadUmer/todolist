const tasks = (() => {
  function toDoItems(title, description, priority, notes, checklist, duedate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.duedate = duedate;
    this.addTasks = function() {
      return [title, description, priority, notes, checklist, duedate];
    };
  }

  return {
    toDoItems
  }

})();

export default tasks;
