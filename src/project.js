const project = (() => {
  function projects(project) {
    this.projectName = project;
    this.addProject = function() {
      return [this.projectName];
    };
  }
  return {
    projects
  }

})();

export default project;
