function generateRandomHexColor() {
  const randomInt = Math.floor(Math.random() * 0xffffff);
  const hexString = randomInt.toString(16);
  const paddedHexString = hexString.padStart(6, "0");
  return `#${paddedHexString}`;
}

function changeColor() {
  const colorBox = document.getElementById("color-box");
  const newColor = generateRandomHexColor();
  colorBox.style.backgroundColor = newColor;
  console.log(newColor);
}

document.getElementById("change-color").addEventListener("click", changeColor);
