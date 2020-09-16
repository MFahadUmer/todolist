const modal = (() => {
  const addProjectDiv = document.getElementById('addProjectDiv');
  const addProjectIcon = document.createElement('button');
  addProjectIcon.setAttribute('type', 'buttom');
  addProjectIcon.setAttribute('class', 'addProjectIcon');
  addProjectIcon.setAttribute('data-toggle', 'modal');
  addProjectIcon.setAttribute('data-target', '#exampleModal');
  addProjectIcon.innerHTML = '+';
  addProjectDiv.appendChild(addProjectIcon);

  const modal = document.createElement("div");
  modal.setAttribute('class', 'modal fade');
  modal.setAttribute('id', 'exampleModal');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-labelledby', 'exampleModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  modal.innerHTML= `
  <div class="modal-dialog" role="document">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
</div>
</div>
</div>`;

  addProjectDiv.appendChild(modal);


  return {

  }
})();

export default modal