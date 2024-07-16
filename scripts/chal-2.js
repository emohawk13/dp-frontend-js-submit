const SWAPI_PEOPLE_URL = "https://swapi.dev/api/people/1/";
const SWAPI_PLANETS_URL = "https://swapi.dev/api/planets/1/";

// Function to perform a promisified XMLHttpRequest
function promisifiedRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

// Fetch data from the first URL
promisifiedRequest(SWAPI_PEOPLE_URL)
  .then((data) => {
    console.log("Data fetched successfully from People:", data);
    const parsedDataName = JSON.parse(data);
    console.log("Name:", parsedDataName.name);

    // Fetch data from the second URL after parsing first data
    return promisifiedRequest(SWAPI_PLANETS_URL).then((data) => {
      console.log("Data fetched successfully from Planets:", data);
      const parsedDataPlanet = JSON.parse(data);
      console.log("Planet Name:", parsedDataPlanet.name);

      const userElement = document.getElementById("swapiContainer");
      userElement.innerHTML = `
          <p>Name: ${parsedDataName.name}</p>
          <p>Planet Name: ${parsedDataPlanet.name}</p>
        `;
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    alert(`Error fetching data from SWAPI.`);
  });
