const navModule = (() => {
  const navBar = () => {
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'nav-container')
    nav.setAttribute('id', 'nav-id');
    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('id', 'left-container')
    const elem = document.createElement('h1');
    //elem.setAttribute('class', 'navitem')
    const text = document.createTextNode("Todo list");
    const rightDiv = document.createElement('div')
    rightDiv.setAttribute('id', 'right-container')
    const fastTask = document.createElement('div')
    fastTask.innerHTML = `<a href="#" class='plus' id='plus'>+</a>`
    //fastTask.setAttribute('class', 'fast-add')
    const bell = document.createElement('div')
    bell.setAttribute('class', 'bell')
    bell.innerHTML = `<a href="#" class='bell-item'>notification</a></i>`
    nav.appendChild(leftDiv);
    nav.appendChild(rightDiv)
    leftDiv.appendChild(elem)
    elem.appendChild(text);
    rightDiv.appendChild(fastTask)
    rightDiv.appendChild(bell)
    return nav
  }
  document.querySelector('.nav').appendChild(navBar());

})();

export default navModule