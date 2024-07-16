const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
  },
  {
    id: 2,
    name: "Dauhson Capps",
    email: "dcapps@example.com",
    password: "somePassword",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "qwerty123",
  },
];

function printUsers() {
  const usersContainer = document.getElementById("usersContainer");
  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.innerHTML = `
        <p class='ch-1-child'>Hi ${user.name}, your email is: ${user.email}</p>
      `;
    console.log(user);
    console.log(`Hi ${user.name}, your email is ${user.email}`);
    usersContainer.appendChild(userElement);
  });
}

printUsers();
