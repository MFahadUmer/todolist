const colorModule = (() => {
  function changeColor() {
    const dropObj = ['blue', 'black']
    console.log(dropObj)
    console.log(typeof `${dropObj[1]}`)

    const styleColor = document.getElementById('colorChange');
    styleColor.style.backgroundColor = `${dropObj[0]}`;
    var styleContent = document.getElementById('colorName').textContent = `${dropObj[1]}`;
    console.log(`${dropObj[1]}`)
  }
  changeColor();

  return {}

})();

export default colorModule;


