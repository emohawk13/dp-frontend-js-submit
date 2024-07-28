document.addEventListener("DOMContentLoaded", () => {
  const colorCodes = document.querySelectorAll(".color-code");
  const columns = document.querySelectorAll(".container > div");

  function rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    const toHex = (n) => n.toString(16).padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  columns.forEach((column, index) => {
    const backgroundColor = getComputedStyle(column).backgroundColor;
    const hexColor = rgbToHex(backgroundColor);
    colorCodes[index].textContent = hexColor;
  });
});
