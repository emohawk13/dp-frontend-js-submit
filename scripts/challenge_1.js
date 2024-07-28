function createHeading(size, text) {
  if (size < 1 || size > 6) {
    throw new Error("Heading size must be between 1 and 6.");
  }

  const heading = document.createElement(`h${size}`);
  heading.textContent = text;

  return heading;
}

function render(element, containerSelector) {
  const container = document.querySelector(containerSelector);

  if (container) {
    container.appendChild(element);
  } else {
    throw new Error(`Container with selector ${containerSelector} not found.`);
  }
}

class DOMHelper {
  static createHeading(size, text) {
    if (size < 1 || size > 6) {
      throw new Error("Heading size must be between 1 and 6.");
    }

    const heading = document.createElement(`h${size}`);
    heading.textContent = text;

    return heading;
  }

  static render(element, containerSelector) {
    const container = document.querySelector(containerSelector);

    if (container) {
      container.appendChild(element);
    } else {
      throw new Error(
        `Container with selector ${containerSelector} not found.`
      );
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 6; i++) {
    const heading = createHeading(i, `Dynamic Heading ${i} from Function`);
    render(heading, "#heading-container");
  }
  for (let i = 1; i <= 6; i++) {
    const heading = DOMHelper.createHeading(
      i,
      `Dynamic Heading ${i} from Class`
    );
    DOMHelper.render(heading, "#heading-container");
  }
});
