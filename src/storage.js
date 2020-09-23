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
  const addtasks = (tasks) => {
    myToDoList.push(tasks);
    localStorage.setItem('todo', JSON.stringify(myToDoList));
  };

  const displayTasks = () => {
    return myToDoList;
  };

  const addDisplayproject = (project) => {
    myProjectList.push(project);
    localStorage.setItem('project', JSON.stringify(myProjectList));
    return myProjectList;
  };

  const displayProject = () => {
    const projectslist = document.getElementById('projectList');// eslint-disable-line no-unused-vars
    return myProjectList;
  };

  return {
    addtasks, displayTasks, addDisplayproject, displayProject,
  };
})();
export default addAndDisplay;