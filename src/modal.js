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

  modal.innerHTML = `
  <div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Add project</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
      <div class="">
      <div class="form-group">
        <label for="project">Project name</label>
        <input type="text" class="form-control" id="project-form-id" placeholder="Enter project name">
      </div>
      <div class="form-group">
        <label for="project">Project color</label>

        <div class="button-dropdown border rounded">
        <button class=" form-control border-0 dropdownbuttonforborder buttonChange" type="button">
          <div class='d-flex align-items-center'>
            <div id='colorChange' class="colorChange"></div>
            <div id='colorName' class='colorName'></div>
          </div>
        </button>
        <div class="dropdown-section">
          <button class="dropDownDivButtons border-0 form-control" type="button">
            <div class='d-flex align-items-center'>
              <div class="red"></div>
              <div class=''>Red</div>
            </div>
          </button>
          
          <button class="dropDownDivButtons border-0 form-control" type="button">
            <div class='d-flex align-items-center'>
              <div class="red"></div>
              <div class=''>Red</div>
            </div>
          </button>
          <button class="dropDownDivButtons border-0 form-control" type="button">
            <div class='d-flex align-items-center'>
              <div class="red"></div>
              <div class=''>Red</div>
            </div>
          </button>
        </div>
      </div>
      </div>
    </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary">Add</button>
    </div>
  </div>
</div>`;


  addProjectDiv.appendChild(modal);

  return {}
})();

export default modal