document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://fe-students.onrender.com/api/users";
  const userList = document.getElementById("user-list");
  const placeholder = document.getElementById("placeholder");
  const myName = document.getElementById("myName");
  const randomizerButton = document.getElementById("randomizer");

  let users = [];
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
      .map((user) => `<li data-id="${user.id}">${user.name}</li>`)
      .join("");
  }

  userList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      selectUser(event.target);
    }
  });

  randomizerButton.addEventListener("click", () => {
    if (users.length) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      placeholder.textContent = randomUser.name;
      selectUserFromList(randomUser.id);
    }
  });

  function selectUserFromList(userId) {
    const listItems = userList.querySelectorAll("li");
    listItems.forEach((li) => {
      if (li.dataset.id === userId) {
        li.classList.add("highlighted");
        placeholder.textContent = li.textContent;
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
      placeholder.textContent = element.textContent;
    } else {
      placeholder.textContent = "Select a user to display their name here.";
    }

    selectedUser = element ? element.dataset.id : null;
  }

  fetchUsers();
});
