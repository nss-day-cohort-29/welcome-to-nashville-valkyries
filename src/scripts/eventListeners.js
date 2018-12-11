
const eventListeners = {
  handleConcertButton(classname) {
    let searchInput = document.querySelector(`input[class='${classname}']`);
    let searchButtonCall = searchInput.value;
    searchInput.value = "";
    console.log(searchButtonCall);
    
    concertsFetch(searchButtonCall);

  },
  handleRetaurantButton(classname) {
    let restaurantSearchInput = document.querySelector(`input[class='${classname}']`);
    let restaurantSearchButtonCall = restaurantSearchInput.value;
    restaurantSearchInput.value = "";
    console.log(restaurantSearchButtonCall)

    restarauntFetch(restaurantSearchButtonCall)
  },
  handleMeetupSearchButton(classname) {
    let searchInput = document.querySelector(`input[class='${classname}']`);
    let searchButtonCall = searchInput.value;
    searchInput.value = "";
    console.log(searchButtonCall);

    meetupsObject.meetUpsFetch(searchButtonCall)
  },
  saveButton(classname) {
    let saveContentPointer = classname.target.className;
    let chosenContentForItenerary = document.querySelector(`li[class='${saveContentPointer}']`)
    let savedContent = chosenContentForItenerary.textContent;
    console.log(savedContent)//this will print saved selection to console
    //REMOVE THE SEARCH RESULT WINDOW HERE.... I THINK

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
