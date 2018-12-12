// This module interacts with the API, meaning all fetch calls to the json-server API will be in this module. 

const data = {
  getResources() {
    return fetch("http://localhost:8088/resources")
    // .then(function(response){
    //   response.json();
    // })
    .then(response => response.json());
  },
  queryResources(userInput) {
    return fetch(`http://localhost:8088/resources?q=${userInput}`)
    .then(response => response.json());
  }
};
