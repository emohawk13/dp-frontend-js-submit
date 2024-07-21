function updateBalanceDisplay() {
  const balanceDisplayElement = document.getElementById("balanceDisplay");
  const currentBalance = atm.getBalance();
  balanceDisplayElement.textContent = `Current Balance: $${currentBalance}`;
}

function blinkDiv() {
  var blinkingDiv = document.getElementById("blinkingDiv");
  blinkingDiv.style.visibility =
    blinkingDiv.style.visibility == "hidden" ? "visible" : "hidden";
}

function linesWithDelay() {
  const heights = [20, 40, 50, 100, 50];
  const delays = [0, 1000, 2000, 500];

  function divLinesDelay(height, delay) {
    setTimeout(function () {
      const div = document.createElement("div");
      div.classList.add("line");
      div.style.height = height + "px";
      document.querySelector(".atm-cover").appendChild(div);
    }, delay);
  }

  heights.forEach(function (height, index) {
    divLinesDelay(height, delays[index]);
  });
}

linesWithDelay();
updateBalanceDisplay();
setInterval(blinkDiv, 750);
