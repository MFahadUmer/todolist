const project = (() => {
  function projects(project, color) {
    this.projectName = project;
    this.projectColor = color;
    this.addProject = () => [this.projectName, this.projectColor];
  }
  return {
    projects,
  };
})();
export default project;