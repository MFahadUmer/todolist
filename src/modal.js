const modal = (() => {
  const addProjectDiv = document.getElementById('addProjectDiv');
  const addProjectIcon = document.createElement('button');
  addProjectIcon.setAttribute('type', 'button');
  addProjectIcon.setAttribute('class', 'addProjectIcon');
  addProjectIcon.setAttribute('data-toggle', 'modal');
  addProjectIcon.setAttribute('data-target', '#projectModal');
  addProjectIcon.innerHTML = '+';
  addProjectDiv.appendChild(addProjectIcon);

  const modal = document.createElement("div");
  modal.setAttribute('class', 'modal fade');
  modal.setAttribute('id', 'projectModal');
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
      <form name="addProjectForm" id="addProjectForm">
    <div class="modal-body">
      <div class="">
      <div class="form-group">
        <label for="project">Project name</label>
        <input type="text" class="form-control" id="project-form-id" placeholder="Enter project name">
      </div>
      <div class="form-group">
        <label for="project">Project color</label>

        <div class="button-dropdown border rounded" id='button-dropdown'>
        <button  class=" form-control border-0 dropdownbuttonforborder buttonChange" type="button">
          <div class='d-flex align-items-center'>
            <div id='colorChange' class="colorChange"></div>
            <div id='colorName' class='colorName'></div>
          </div>
        </button>
        <div class="dropdown-section" id='dropdown-section'>
          <button class="dropDownDivButtons border-0 form-control close-dropdown" type="button" id='addnew' value='red'>
            <div class='d-flex align-items-center'>
              <div class="red"></div>
              <div class=''>Red</div>
            </div>
          </button>
          
          <button class="dropDownDivButtons border-0 form-control close-dropdown" type="button" id="addnew" value="green">
            <div class='d-flex align-items-center'>
              <div class="green"></div>
              <div class=''>Green</div>
            </div>
          </button>
          <button class="dropDownDivButtons border-0 form-control close-dropdown" type="button" id='addnew' value='blue'>
            <div class='d-flex align-items-center'>
              <div class="blue"></div>
              <div class=''>Blue</div>
            </div>
          </button>
        </div>
      </div>
      </div>
    </div>

    <div class="modal-footer">
      <input type="submit" name="addProjectForm" id='submit-reload'>
    </div>
    </form>
  </div>
  </div>`;

  addProjectDiv.appendChild(modal);

  return {}
})();

export default modal