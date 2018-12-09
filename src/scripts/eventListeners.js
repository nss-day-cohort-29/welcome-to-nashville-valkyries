
const eventListeners = {
  handleSearchButton(classname) {
    let searchInput = document.querySelector(`input[class='${classname}']`);
    let searchQuery = searchInput.value;
    searchInput.value = "";
    console.log(searchQuery);

    data.queryResources(searchQuery)
    .then(searchResultsArray => {
      console.log(searchResultsArray)
      // searchResultsArray.results.forEach((characterInfo) => {
      //   console.log("console says ", characterInfo.name, characterInfo.skin_color );
      // })
      let resourcesFragments = domComponents.createResourcesDocumentFragments(searchResultsArray);
      console.log(resourcesFragments);
      domBuilder.appendAllResources(resourcesFragments);
    });
  }
};


// const eventListeners = (() => {
//   return {
//     handleSearchButton,
//   }

//   function handleSearchButton() {
//     let concertInput = document.querySelector("input[placeholder='Concerts']");
//     let concertQuery = concertInput.value;
//     console.log(concertQuery);
//   }
// })()


//  jake corn code lesson...
// const buildTicketMasterSdk = (config) => {
//   const API_URL = config.API_URL
//   return {
//     getTicketPricesForArtist,
//     findTourLocationsForArtistByYear,
//   }
  
//   function getTicketPricesForArtist(artistId) {
//     return fetch(`${API_URL}/artists/${artistId}/ticketPrices`)
//   }

//   function findTourLocationsForArtistByYear(artistId, year) {
//     return fetch(`${API_URL}/artists/${artistId}?year=${year}`)
//   }
// }

// const ticketMasterSDK = buildTicketMasterSdk({ API_URL: 'http://stuff.com' })
