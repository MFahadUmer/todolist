const updateModal = (() => {
  const addModalDiv = document.getElementById('addModalDiv');// eslint-disable-line no-unused-vars
  const updateTaskModal = document.createElement('div');
  updateTaskModal.setAttribute('class', 'modal fade');
  updateTaskModal.setAttribute('id', 'updateTaskModal');
  updateTaskModal.setAttribute('tabindex', '-1');
  updateTaskModal.setAttribute('role', 'dialog');
  updateTaskModal.setAttribute('aria-labelledby', 'updateTaskModalLabel');
  updateTaskModal.setAttribute('aria-hidden', 'true');
  updateTaskModal.innerHTML = `
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateTaskModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h2>Heyyyyyyyyyy</h2>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
</div>`;
})();
export default updateModal;