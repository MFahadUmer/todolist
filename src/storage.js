const myToDoList = localStorage.getItem('todo')
  ? JSON.parse(localStorage.getItem('todo'))
  : [];

localStorage.setItem('todo', JSON.stringify(myToDoList));
JSON.parse(localStorage.getItem('todo'));

const myProjectList = localStorage.getItem('project')
  ? JSON.parse(localStorage.getItem('project'))
  : [];

localStorage.setItem('project', JSON.stringify(myProjectList));
JSON.parse(localStorage.getItem('project'));

const addAndDisplay = (() => {
  const addDisplaytasks = (tasks) =>
  {
    myToDoList.push(tasks);
    localStorage.setItem('todo', JSON.stringify(myToDoList));
    console.log(myToDoList);
  }

  const addDisplayproject = (project) =>
  {
    myProjectList.push(project);
    localStorage.setItem('project', JSON.stringify(myProjectList));
    console.log(myProjectList);
  }

  return {
    addDisplaytasks, addDisplayproject
  }

})();

export default addAndDisplay;