// This module interacts with the API, meaning all fetch calls to the json-server API will be in this module.

const data = {
    queryResources(userInput) {
      return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?q=${userInput}`)
        .then(response => response.json())



//         let today = new Date();
// let searchDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;