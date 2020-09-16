import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
dom.i2svg()

const bodyModule = (() => {
  const createBody = () => {
    const toDoBody = document.createElement('div');
    toDoBody.setAttribute('class', 'body-class')
    toDoBody.setAttribute('id', 'body-id');
    const left = document.createElement('div');
    const right = document.createElement('div')
    left.setAttribute('id', 'left-body')
    left.setAttribute('class', 'left-body')
    right.setAttribute('id', 'right-body')
    right.setAttribute('class', 'right-body')
    const project = document.createElement('div');
    project.setAttribute('class', 'projectStyles');
    project.innerHTML = `
    <div>
      <div class="project-section">
        <div class='d-flex align-items-center'>
          <p><a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
              aria-controls="collapseExample">
              <i class="fas fa-angle-right fa-2x"></i>
            </a></p>
          <p class='project-p'> Project</p>
        </div>
        <div>
          <p>+</p>
        </div>
      </div>
      <div>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
            keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
  </div>`;
    left.appendChild(project);
    toDoBody.appendChild(left);
    toDoBody.appendChild(right);

    return toDoBody
  }

  document.querySelector('.body-container').appendChild(createBody());

})();

export default bodyModule