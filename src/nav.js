const navModule = (() => {
  const navBar = () => {
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav-id');
    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('id', 'left-container')
    const elem = document.createElement('p');
    const text = document.createTextNode("This just got added");
    const rightDiv = document.createElement('div')
    rightDiv.setAttribute('id', 'right-container')
    nav.appendChild(leftDiv);
    nav.appendChild(rightDiv)
    leftDiv.appendChild(elem)
    elem.appendChild(text);
    return nav
  }
  document.querySelector('.nav').appendChild(navBar());

})();

export default navModule