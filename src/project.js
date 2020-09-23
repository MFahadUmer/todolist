const project = (() => {
  function projects(project, color) {
    this.projectName = project;
    this.projectColor = color;
    this.addProject = function() {
      return [this.projectName, this.projectColor];
    };
  }
  return {
    projects
  }
})();
export default project;