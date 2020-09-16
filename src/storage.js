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
  }

  const addDisplayproject = (project) =>
  {
    myProjectList.push(project);
    localStorage.setItem('project', JSON.stringify(myProjectList));
    return myProjectList;
  }

  const displayProject = (project) => {
    let projectslist = document.getElementById("projectList");
    console.log(project);
    project.forEach((obj, index) => {
    })
  };

  return {
    addDisplaytasks, addDisplayproject,displayProject
  }

})();

export default addAndDisplay;