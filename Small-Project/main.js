function changeColor(getColor) {
  let bg = document.querySelector(".bg");
  let seclectColor = getColor.value;
  let text = getColor.options[getColor.selectedIndex].text;
  bg.style.background = seclectColor;
  bg.innerHTML = text;
}
