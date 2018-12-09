// const eventListeners = {
//     handleSearchButton () {
//         let parkInput = document.getElementById("park-button");
//         let parkQuery = parkInput.value;
//         console.log(parkQuery);
//     }

// }; 


const eventListeners = (() => {
  return {
    handleSearchButton,
  }

  function handleSearchButton() {
    const parkInput = document.getElementById("park-button");
    const parkQuery = parkInput.value;
    console.log(parkQuery);
  }
})()

const buildTicketMasterSdk = (config) => {
  const API_URL = config.API_URL
  return {
    getTicketPricesForArtist,
    findTourLocationsForArtistByYear,
  }
  
  function getTicketPricesForArtist(artistId) {
    return fetch(`${API_URL}/artists/${artistId}/ticketPrices`)
  }

  function findTourLocationsForArtistByYear(artistId, year) {
    return fetch(`${API_URL}/artists/${artistId}?year=${year}`)
  }
}

const ticketMasterSDK = buildTicketMasterSdk({ API_URL: 'http://stuff.com' })
