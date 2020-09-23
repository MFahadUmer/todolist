const colorModule = (() => {
  const dropObj = ['black'];
  function defaultColor() {
    const styleColor = document.getElementById('colorChange');
    styleColor.style.backgroundColor = `${dropObj[0]}`;
    const styleContent = document.getElementById('colorName');
    styleContent.textContent = `${dropObj[0]}`;
  }
  defaultColor();
  const buttons = document.querySelectorAll('[id^=addnew]');
  const buttonsCount = buttons.length;
  for (let i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = (e) => { // eslint-disable-line no-unused-vars
      dropObj[0] = this.value;
      defaultColor();
    };
  }
  return {
    dropObj,
  };
})();
export default colorModule;