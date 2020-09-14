const project = (() => {
  let toDoItems = {
    title: 'title',
    description: 'description', 
    priority: 'priority',
    notes: 'notes',
    checklist: false,
    dueDate: 'duedate',
    add: (title, description, priority) => {
      toDoItems.title = title;
      toDoItems.description = "description";
      toDoItems.priority = "priority";
    }
  };

  return {toDoItems};
})();

export default project;