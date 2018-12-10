// /resources?q=${userInput}`

const data = {
  queryResources(userInput) {
    return fetch(`https://swapi.co/api/people/?search=${userInput}`)
    .then(response => response.json());
  }
}