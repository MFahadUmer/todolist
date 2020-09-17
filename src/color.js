const colorModule = (() => {
  const dropObj = ['black']

  function defaultColor() {
    const styleColor = document.getElementById('colorChange');
    styleColor.style.backgroundColor = `${dropObj[0]}`;
    var styleContent = document.getElementById('colorName').textContent = `${dropObj[0]}`;
  }
  defaultColor();

  function changeColor() {
    
    const changeStyleColor = document.getElementById('colorChange');
    changeStyleColor.style.backgroundColor = `${dropObj[0]}`;
    var styleContent = document.getElementById('colorName').textContent = `${dropObj[0]}`;
  }

  return {}

})();

export default colorModule;


