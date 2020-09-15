
const project = (() => {
  function toDoItems(title, description, priority, notes, checklist, duedate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.duedate = duedate;
  }

})();
