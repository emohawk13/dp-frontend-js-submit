document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://fe-students.onrender.com/api/users";
  const userList = document.getElementById("user-list");
  const placeholder = document.getElementById("placeholder");
  const myName = document.getElementById("myName");
  const randomizerButton = document.getElementById("randomizer");

  let users = [];
  let weights = {};
  let selectedUser = null;

  async function fetchUsers() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      users = data.results;
      populateUserList(users);
      fetchName();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function fetchName() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const user = data.results.find((user) => user.name === "Dauhson Capps");
      if (user) {
        myName.innerHTML = `Hello,<br>${user.name}`;
      } else {
        myName.textContent = "User not found";
      }
    } catch (error) {
      console.error("Error fetching name:", error);
      myName.textContent = "Error fetching name";
    }
  }

  function populateUserList(users) {
    userList.innerHTML = users
      .map((user) => {
        weights[user.id] = 1;
        return `
          <li data-id="${user.id}">
            ${user.name}
            <span class="weight">${weights[user.id]}</span>
            <div class="weight-buttons">
              <button class="decrease" data-id="${
                user.id
              }" data-change="-1">-</button>
              <button class="increase" data-id="${
                user.id
              }" data-change="1">+</button>
            </div>
          </li>
        `;
      })
      .join("");
    addEventListenersToButtons();
  }

  function addEventListenersToButtons() {
    const increaseButtons = document.querySelectorAll(".increase");
    const decreaseButtons = document.querySelectorAll(".decrease");

    increaseButtons.forEach((button) => {
      button.addEventListener("click", () =>
        changeWeight(button.dataset.id, parseInt(button.dataset.change))
      );
    });

    decreaseButtons.forEach((button) => {
      button.addEventListener("click", () =>
        changeWeight(button.dataset.id, parseInt(button.dataset.change))
      );
    });
  }

  function changeWeight(userId, change) {
    const userElement = document.querySelector(`li[data-id="${userId}"]`);
    const weightElement = userElement.querySelector(".weight");
    let currentWeight = parseInt(weightElement.textContent);
    currentWeight = Math.max(1, currentWeight + change);
    weightElement.textContent = currentWeight;
    weights[userId] = currentWeight;
  }

  userList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      selectUser(event.target);
    }
  });

  randomizerButton.addEventListener("click", () => {
    if (users.length) {
      const weightedUsers = users.flatMap((user) =>
        Array(weights[user.id]).fill(user)
      );
      const randomUser =
        weightedUsers[Math.floor(Math.random() * weightedUsers.length)];
      placeholder.textContent = randomUser.name;
      selectUserFromList(randomUser.id);
    }
  });

  function selectUserFromList(userId) {
    const listItems = userList.querySelectorAll("li");
    listItems.forEach((li) => {
      if (li.dataset.id === userId) {
        li.classList.add("highlighted");
        const name = li.childNodes[0].nodeValue.trim();
        placeholder.textContent = name;
      } else {
        li.classList.remove("highlighted");
      }
    });
  }

  function selectUser(element) {
    const listItems = userList.querySelectorAll("li");
    listItems.forEach((li) => li.classList.remove("highlighted"));

    if (element) {
      element.classList.add("highlighted");
      const name = element.childNodes[0].nodeValue.trim();
      placeholder.textContent = name;
    } else {
      placeholder.textContent = "Select a user to display their name here.";
    }

    selectedUser = element ? element.dataset.id : null;
  }

  fetchUsers();
});
