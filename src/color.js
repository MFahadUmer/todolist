const colorModule = (() => {
  let dropObj = ['black']

  function defaultColor() {
    const styleColor = document.getElementById('colorChange');
    styleColor.style.backgroundColor = `${dropObj[0]}`;
    var styleContent = document.getElementById('colorName').textContent = `${dropObj[0]}`;
  }
  defaultColor();

  var buttons = document.querySelectorAll('[id^=addnew]');
  var buttonsCount = buttons.length;
  for (var i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function (e) {
      dropObj[0] = this.value
      defaultColor();
    };
  }

  return {
    dropObj
  }

})();

export default colorModule;


