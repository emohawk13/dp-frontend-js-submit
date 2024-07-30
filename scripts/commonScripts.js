document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  let header = document.getElementById("dynamic-header");
  const input = document.getElementById("text-input");

  function updateHeader() {
    if (header && input) {
      header.textContent = input.value;

      if (input.value.length > 50) {
        input.disabled = true;
      }
    } else if (input) {
      header = document.createElement("h1");
      header.id = "dynamic-header";
      header.textContent = input.value;
      container.insertBefore(header, document.querySelector(".color-box"));
    }
  }

  function deleteHeader() {
    if (header) {
      header.remove();
      header = null;
    }

    if (input) {
      input.value = "";
      input.disabled = false;
    }
  }

  if (input) {
    input.addEventListener("input", updateHeader);
  }

  const deleteButton = document.getElementById("delete-header");
  if (deleteButton) {
    deleteButton.addEventListener("click", deleteHeader);
  }
});
